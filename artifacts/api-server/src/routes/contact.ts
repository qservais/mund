import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { z } from "zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const ContactSchema = z.object({
  nom:     z.string().min(1),
  email:   z.string().email(),
  type:    z.string().optional(),
  date:    z.string().optional(),
  message: z.string().min(1),
});

router.post("/contact", async (req, res) => {
  const parsed = ContactSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "Champs invalides." });
    return;
  }

  const { nom, email, type, date, message } = parsed.data;
  const apiKey = process.env["API_RESEND_KEY"];

  if (!apiKey) {
    logger.error("API_RESEND_KEY missing");
    res.status(500).json({ ok: false, error: "Configuration email manquante." });
    return;
  }

  const to   = process.env["CONTACT_EMAIL"] ?? "julie@mund.be";
  const from = process.env["RESEND_FROM_EMAIL"] ?? "studio@send.mund.be";

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouveau message — ${nom}`,
      html: `
        <p><strong>Nom :</strong> ${escHtml(nom)}</p>
        <p><strong>Email :</strong> ${escHtml(email)}</p>
        ${type ? `<p><strong>Nature du projet :</strong> ${escHtml(type)}</p>` : ""}
        ${date ? `<p><strong>Date envisagée :</strong> ${escHtml(date)}</p>` : ""}
        <p><strong>Message :</strong></p>
        <p>${escHtml(message).replace(/\n/g, "<br>")}</p>
      `,
    });
    logger.info({ to, from: email }, "contact: email sent");
    res.json({ ok: true });
  } catch (err) {
    logger.error({ err }, "contact: resend failed");
    res.status(500).json({ ok: false, error: "Erreur envoi email." });
  }
});

function escHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export default router;

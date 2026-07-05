import { Router, type IRouter } from "express";
import { Resend } from "resend";
import { z } from "zod";
import { logger } from "../lib/logger";

const router: IRouter = Router();

const SubscribeSchema = z.object({
  email:     z.string().email(),
  telephone: z.string().min(1),
  type:      z.enum(["particulier", "pro"]),
  data:      z.record(z.union([z.string(), z.array(z.string())])),
});

router.post("/subscribe", async (req, res) => {
  const parsed = SubscribeSchema.safeParse(req.body);
  if (!parsed.success) {
    res.status(400).json({ ok: false, error: "Champs invalides." });
    return;
  }

  const { email, telephone, type, data } = parsed.data;
  const apiKey = process.env["API_RESEND_KEY"];

  if (!apiKey) {
    logger.error("API_RESEND_KEY missing");
    res.status(500).json({ ok: false, error: "Configuration email manquante." });
    return;
  }

  const to   = process.env["CONTACT_EMAIL"] ?? "julie@mund.be";
  const from = process.env["RESEND_FROM_EMAIL"] ?? "studio@mund.be";
  const label = type === "pro" ? "Professionnel" : "Particulier";

  const rows = Object.entries(data)
    .map(([k, v]) => `<p><strong>${escHtml(k)} :</strong> ${escHtml(Array.isArray(v) ? v.join(", ") : v)}</p>`)
    .join("");

  try {
    const resend = new Resend(apiKey);
    await resend.emails.send({
      from,
      to,
      replyTo: email,
      subject: `Nouvelle demande d'abonnement ${label} — ${email}`,
      html: `
        <h2>Demande d'abonnement ${label}</h2>
        <p><strong>Email :</strong> ${escHtml(email)}</p>
        <p><strong>Téléphone :</strong> ${escHtml(telephone)}</p>
        ${rows}
      `,
    });
    logger.info({ to, email, type }, "subscribe: email sent");
    res.json({ ok: true });
  } catch (err) {
    logger.error({ err }, "subscribe: resend failed");
    res.status(500).json({ ok: false, error: "Erreur envoi email." });
  }
});

function escHtml(s: string) {
  return s.replace(/&/g, "&amp;").replace(/</g, "&lt;").replace(/>/g, "&gt;").replace(/"/g, "&quot;");
}

export default router;

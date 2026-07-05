import { useState, type FormEvent } from "react";
import { SERIF, BODY } from "@/components/ArtboardShell";
import { apiUrl } from "@/lib/api";

export const FIELD_LBL: React.CSSProperties = {
  ...BODY, textTransform: "uppercase", letterSpacing: "0.24em",
  color: "rgba(0,0,0,0.38)", lineHeight: 1, display: "block",
};
export const FINPUT: React.CSSProperties = {
  ...BODY,
  color: "#151515", background: "transparent",
  border: "none", borderBottom: "1px solid rgba(0,0,0,0.18)",
  paddingBottom: 9, paddingTop: 2,
  width: "100%", outline: "none",
};

export type CheckboxField = {
  type: "checkboxgroup"; name: string; label: string;
  options: string[]; required: boolean;
};
export type TextField = {
  type: "text" | "email" | "tel" | "textarea"; name: string; label: string;
  placeholder: string; required: boolean;
};
export type FormField = CheckboxField | TextField;

export type FormValues = Record<string, string | string[]>;

export function CheckboxOption({ label, checked, onChange }: {
  label: string; checked: boolean; onChange: () => void;
}) {
  return (
    <div
      role="checkbox" aria-checked={checked} tabIndex={0}
      onClick={onChange}
      onKeyDown={(e) => (e.key === " " || e.key === "Enter") && onChange()}
      style={{ display: "flex", alignItems: "center", gap: 10, cursor: "pointer", userSelect: "none" }}
    >
      <span style={{
        width: 9, height: 9, flexShrink: 0,
        border: "1px solid rgba(0,0,0,0.4)",
        background: checked ? "#151515" : "transparent",
        display: "inline-block", transition: "background 0.12s",
      }} />
      <span style={{ ...BODY, textTransform: "uppercase", letterSpacing: "0.12em", lineHeight: 1 }}>
        {label}
      </span>
    </div>
  );
}

export function SubForm({
  fields, submit, success, successBody, reset, style, apiPath, subscribeType,
}: {
  fields: FormField[];
  submit: string;
  success: string;
  successBody: (email: string) => string;
  reset: string;
  style?: React.CSSProperties;
  apiPath?: string;
  subscribeType?: "particulier" | "pro";
}) {
  const [submitted, setSubmitted] = useState(false);
  const [values, setValues]       = useState<FormValues>({});
  const [errors, setErrors]       = useState<Record<string, boolean>>({});
  const [sending, setSending]     = useState(false);
  const [sendError, setSendError] = useState<string | null>(null);

  const toggleCheckbox = (name: string, opt: string) => {
    setValues((prev) => {
      const cur = (prev[name] as string[] | undefined) ?? [];
      const next = cur.includes(opt) ? cur.filter((v) => v !== opt) : [...cur, opt];
      return { ...prev, [name]: next };
    });
    setErrors((prev) => ({ ...prev, [name]: false }));
  };

  const handleSubmit = async (e: FormEvent) => {
    e.preventDefault();
    setSendError(null);
    const newErrors: Record<string, boolean> = {};
    let ok = true;
    for (const f of fields) {
      if (f.required && f.type === "checkboxgroup") {
        const val = (values[f.name] as string[] | undefined) ?? [];
        if (val.length === 0) { newErrors[f.name] = true; ok = false; }
      }
    }
    if (!ok) { setErrors(newErrors); return; }

    if (apiPath) {
      setSending(true);
      try {
        const email     = (values["email"] as string) ?? "";
        const telephone = (values["telephone"] as string) ?? "";
        const rest = { ...values };
        delete rest["email"];
        delete rest["telephone"];

        const res = await fetch(apiUrl(apiPath), {
          method: "POST",
          headers: { "Content-Type": "application/json" },
          body: JSON.stringify({ email, telephone, type: subscribeType ?? "particulier", data: rest }),
        });
        if (!res.ok) {
          const body = await res.json().catch(() => ({}));
          setSendError((body as { error?: string }).error ?? "Erreur réseau.");
          setSending(false);
          return;
        }
      } catch {
        setSendError("Impossible d'envoyer. Vérifiez votre connexion.");
        setSending(false);
        return;
      }
      setSending(false);
    }

    setSubmitted(true);
  };

  if (submitted) {
    const email = (values["email"] as string) ?? "";
    return (
      <div style={{ display: "flex", flexDirection: "column", gap: 16, ...style }} data-testid="sub-success">
        <span style={{ ...SERIF, textTransform: "none" }}>{success}</span>
        <p style={{ ...BODY, lineHeight: 1.15, margin: 0, whiteSpace: "pre-line", color: "rgba(0,0,0,0.5)" }}>
          {successBody(email)}
        </p>
        <button
          type="button"
          onClick={() => { setValues({}); setErrors({}); setSubmitted(false); setSendError(null); }}
          style={{
            ...BODY, textTransform: "uppercase", letterSpacing: "0.2em",
            color: "rgba(0,0,0,0.45)", background: "transparent", border: "none",
            borderBottom: "1px solid rgba(0,0,0,0.25)", paddingBottom: 2,
            cursor: "pointer", alignSelf: "flex-start",
          }}
        >
          {reset}
        </button>
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 24, ...style }}>
      {fields.map((field, i) => {
        const idx = String(i + 1).padStart(2, "0");
        if (field.type === "checkboxgroup") {
          const selected = (values[field.name] as string[] | undefined) ?? [];
          return (
            <fieldset key={field.name} style={{ border: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
              <legend style={{ display: "flex", width: "100%", alignItems: "baseline", justifyContent: "space-between", marginBottom: 4 }}>
                <span style={FIELD_LBL}>{idx} — {field.label}{field.required && " *"}</span>
                {errors[field.name] && (
                  <span style={{ ...BODY, color: "rgba(180,0,0,0.65)", fontSize: 11 }}>↑ requis</span>
                )}
              </legend>
              <div style={{ display: "flex", flexDirection: "column", gap: 7, paddingTop: 2 }}>
                {field.options.map((opt) => (
                  <CheckboxOption
                    key={opt} label={opt}
                    checked={selected.includes(opt)}
                    onChange={() => toggleCheckbox(field.name, opt)}
                  />
                ))}
              </div>
            </fieldset>
          );
        }
        return (
          <div key={field.name} style={{ display: "flex", flexDirection: "column", gap: 8 }}>
            <div style={{ display: "flex", alignItems: "baseline", justifyContent: "space-between" }}>
              <label htmlFor={`sf-${field.name}`} style={FIELD_LBL}>{idx} — {field.label}</label>
              {field.required && <span style={FIELD_LBL} aria-hidden>*</span>}
            </div>
            {field.type === "textarea" ? (
              <textarea
                id={`sf-${field.name}`}
                name={field.name} required={field.required}
                placeholder={(field as TextField).placeholder} rows={3}
                value={(values[field.name] as string) ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                style={{ ...FINPUT, resize: "none" }}
              />
            ) : (
              <input
                id={`sf-${field.name}`}
                type={field.type} name={field.name} required={field.required}
                placeholder={(field as TextField).placeholder}
                value={(values[field.name] as string) ?? ""}
                onChange={(e) => setValues((v) => ({ ...v, [field.name]: e.target.value }))}
                style={FINPUT}
              />
            )}
          </div>
        );
      })}

      {sendError && (
        <p style={{ ...BODY, color: "rgba(180,0,0,0.75)", margin: 0 }}>{sendError}</p>
      )}

      <div style={{
        display: "flex", alignItems: "baseline",
        justifyContent: "flex-end", paddingTop: 8,
        borderTop: "1px solid rgba(0,0,0,0.10)",
      }}>
        <button type="submit" disabled={sending} style={{
          ...BODY, textTransform: "uppercase", letterSpacing: "0.22em",
          color: sending ? "rgba(0,0,0,0.35)" : "#151515",
          background: "transparent", border: "none",
          borderBottom: `1px solid ${sending ? "rgba(0,0,0,0.2)" : "#151515"}`,
          paddingBottom: 2,
          cursor: sending ? "default" : "pointer",
          display: "inline-flex", gap: 10, alignItems: "baseline",
        }}>
          <span>{sending ? "…" : submit}</span>
          {!sending && <span aria-hidden>→</span>}
        </button>
      </div>
    </form>
  );
}

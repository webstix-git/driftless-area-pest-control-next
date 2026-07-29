"use client";

import { useId, useState, type FormEvent } from "react";
import { ClipboardList, Search, ShieldCheck } from "lucide-react";
import { CONTACT } from "@/lib/contact";

export const SERVICE_TYPE_OPTIONS = [
  { value: "rodent", label: "Commercial & Industrial Rodent Control" },
  { value: "agricultural", label: "Agricultural Pest Management" },
  { value: "insect", label: "Insect Control" },
  { value: "bird-wildlife", label: "Wildlife Removal" },
  { value: "wildlife", label: "Wildlife Removal" },
  { value: "weed", label: "Perimeter Weed Control" },
  { value: "monitoring", label: "Remote Monitoring" },
  { value: "other", label: "Other" },
] as const;

export type ServiceTypeValue = (typeof SERVICE_TYPE_OPTIONS)[number]["value"];

export const FACILITY_TYPE_OPTIONS = [
  { value: "", label: "Select facility type" },
  { value: "food-processing", label: "Food Processing" },
  { value: "warehouse", label: "Warehouse" },
  { value: "retail", label: "Retail" },
  { value: "office", label: "Office" },
  { value: "other", label: "Other" },
] as const;

type FormState = {
  name: string;
  business: string;
  phone: string;
  email: string;
  serviceType: string;
  facilityType: string;
  message: string;
};

type FormErrors = Partial<Record<keyof FormState, string>>;

type ServiceConversionFormProps = {
  defaultServiceType?: ServiceTypeValue | string;
  headline?: string;
  supportingLine?: string;
  /** `band` = full service-page section; `embedded` = form only (Contact Us). */
  variant?: "band" | "embedded";
  formTitle?: string;
  formDescription?: string;
};

const initialErrors: FormErrors = {};

function validate(values: FormState): FormErrors {
  const errors: FormErrors = {};

  if (!values.name.trim()) {
    errors.name = "Please enter your name.";
  }

  if (!values.business.trim()) {
    errors.business = "Please enter your business or facility name.";
  }

  if (!values.phone.trim()) {
    errors.phone = "Please enter your phone number.";
  }

  const email = values.email.trim();
  if (!email) {
    errors.email = "Please enter your email address.";
  } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!values.serviceType) {
    errors.serviceType = "Please select a service type.";
  }

  if (!values.facilityType) {
    errors.facilityType = "Please select a facility type.";
  }

  return errors;
}

export default function ServiceConversionForm({
  defaultServiceType = "other",
  headline = "Ready to protect your facility? Let's talk.",
  supportingLine = "Tell us about your site and we will help you map the right next step for commercial or agricultural pest pressure.",
  variant = "band",
  formTitle = "Request Service",
  formDescription = "We'll get back to you quickly to talk through your needs.",
}: ServiceConversionFormProps) {
  const formId = useId();
  const [values, setValues] = useState<FormState>({
    name: "",
    business: "",
    phone: "",
    email: "",
    serviceType: defaultServiceType,
    facilityType: "",
    message: "",
  });
  const [errors, setErrors] = useState<FormErrors>(initialErrors);
  const [submitted, setSubmitted] = useState(false);

  const fieldId = (name: string) => `${formId}-${name}`;
  const isEmbedded = variant === "embedded";

  const updateField = (field: keyof FormState, value: string) => {
    setValues((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) {
      setErrors((prev) => {
        const next = { ...prev };
        delete next[field];
        return next;
      });
    }
  };

  const handleSubmit = (event: FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    const nextErrors = validate(values);
    setErrors(nextErrors);
    if (Object.keys(nextErrors).length > 0) {
      return;
    }

    // Placeholder handler — replace with API / CRM integration when backend is ready.
    // mailto fallback keeps a working path for early launches.
    const serviceLabel =
      SERVICE_TYPE_OPTIONS.find((option) => option.value === values.serviceType)?.label ||
      values.serviceType;
    const facilityLabel =
      FACILITY_TYPE_OPTIONS.find((option) => option.value === values.facilityType)?.label ||
      "Not specified";
    const subject = encodeURIComponent(`Service request — ${serviceLabel}`);
    const body = encodeURIComponent(
      [
        `Name: ${values.name}`,
        `Business / Facility: ${values.business || "Not provided"}`,
        `Phone: ${values.phone || "Not provided"}`,
        `Email: ${values.email || "Not provided"}`,
        `Service Type: ${serviceLabel}`,
        `Facility Type: ${facilityLabel}`,
        "",
        "Message:",
        values.message,
      ].join("\n")
    );

    const mailtoUrl = `${CONTACT.emailHref}?subject=${subject}&body=${body}`;
    try {
      const mailLink = document.createElement("a");
      mailLink.href = mailtoUrl;
      mailLink.rel = "noopener";
      document.body.appendChild(mailLink);
      mailLink.click();
      mailLink.remove();
    } catch {
      // Ignore mailto failures in restricted environments; still show success state.
    }

    setSubmitted(true);
  };

  const formBody = submitted ? (
    <div className="scf-success" role="status" aria-live="polite">
      <h3>Thanks — we&apos;ve received your request and will be in touch.</h3>
      <p>
        Our team will review your details and follow up to talk through the next step for your
        facility.
      </p>
    </div>
  ) : (
    <form className="scf-form" onSubmit={handleSubmit} noValidate>
      <div className="scf-form-header">
        <h3 className="scf-form-title">{formTitle}</h3>
        <p className="scf-form-desc">{formDescription}</p>
      </div>

      <div className="scf-form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor={fieldId("name")}>
            Name: <span className="scf-required" aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("name")}
            name="name"
            type="text"
            className={`form-control${errors.name ? " is-invalid" : ""}`}
            autoComplete="name"
            placeholder="Enter your full name"
            value={values.name}
            onChange={(e) => updateField("name", e.target.value)}
            aria-required="true"
            aria-invalid={errors.name ? "true" : "false"}
            aria-describedby={errors.name ? fieldId("name-error") : undefined}
          />
          {errors.name ? (
            <p id={fieldId("name-error")} className="scf-error">
              {errors.name}
            </p>
          ) : null}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor={fieldId("business")}>
            Business / Facility Name:{" "}
            <span className="scf-required" aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("business")}
            name="business"
            type="text"
            className={`form-control${errors.business ? " is-invalid" : ""}`}
            autoComplete="organization"
            placeholder="Enter business or facility name"
            value={values.business}
            onChange={(e) => updateField("business", e.target.value)}
            aria-required="true"
            aria-invalid={errors.business ? "true" : "false"}
            aria-describedby={errors.business ? fieldId("business-error") : undefined}
          />
          {errors.business ? (
            <p id={fieldId("business-error")} className="scf-error">
              {errors.business}
            </p>
          ) : null}
        </div>
      </div>

      <div className="scf-form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor={fieldId("phone")}>
            Phone: <span className="scf-required" aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("phone")}
            name="phone"
            type="tel"
            className={`form-control${errors.phone ? " is-invalid" : ""}`}
            autoComplete="tel"
            placeholder="(608) 555-0123"
            value={values.phone}
            onChange={(e) => updateField("phone", e.target.value)}
            aria-required="true"
            aria-invalid={errors.phone ? "true" : "false"}
            aria-describedby={errors.phone ? fieldId("phone-error") : undefined}
          />
          {errors.phone ? (
            <p id={fieldId("phone-error")} className="scf-error">
              {errors.phone}
            </p>
          ) : null}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor={fieldId("email")}>
            Email: <span className="scf-required" aria-hidden="true">*</span>
          </label>
          <input
            id={fieldId("email")}
            name="email"
            type="email"
            className={`form-control${errors.email ? " is-invalid" : ""}`}
            autoComplete="email"
            placeholder="you@company.com"
            value={values.email}
            onChange={(e) => updateField("email", e.target.value)}
            aria-required="true"
            aria-invalid={errors.email ? "true" : "false"}
            aria-describedby={errors.email ? fieldId("email-error") : undefined}
          />
          {errors.email ? (
            <p id={fieldId("email-error")} className="scf-error">
              {errors.email}
            </p>
          ) : null}
        </div>
      </div>

      <div className="scf-form-grid">
        <div className="form-group">
          <label className="form-label" htmlFor={fieldId("serviceType")}>
            Service Type: <span className="scf-required" aria-hidden="true">*</span>
          </label>
          <select
            id={fieldId("serviceType")}
            name="serviceType"
            className={`form-control${errors.serviceType ? " is-invalid" : ""}`}
            value={values.serviceType}
            onChange={(e) => updateField("serviceType", e.target.value)}
            aria-required="true"
            aria-invalid={errors.serviceType ? "true" : "false"}
            aria-describedby={errors.serviceType ? fieldId("serviceType-error") : undefined}
          >
            {SERVICE_TYPE_OPTIONS.map((option) => (
              <option key={option.value} value={option.value}>
                {option.label}
              </option>
            ))}
          </select>
          {errors.serviceType ? (
            <p id={fieldId("serviceType-error")} className="scf-error">
              {errors.serviceType}
            </p>
          ) : null}
        </div>

        <div className="form-group">
          <label className="form-label" htmlFor={fieldId("facilityType")}>
            Facility Type: <span className="scf-required" aria-hidden="true">*</span>
          </label>
          <select
            id={fieldId("facilityType")}
            name="facilityType"
            className={`form-control${errors.facilityType ? " is-invalid" : ""}`}
            value={values.facilityType}
            onChange={(e) => updateField("facilityType", e.target.value)}
            aria-required="true"
            aria-invalid={errors.facilityType ? "true" : "false"}
            aria-describedby={errors.facilityType ? fieldId("facilityType-error") : undefined}
          >
            {FACILITY_TYPE_OPTIONS.map((option) => (
              <option
                key={option.value || "placeholder"}
                value={option.value}
                disabled={option.value === ""}
              >
                {option.label}
              </option>
            ))}
          </select>
          {errors.facilityType ? (
            <p id={fieldId("facilityType-error")} className="scf-error">
              {errors.facilityType}
            </p>
          ) : null}
        </div>
      </div>

      <div className="form-group">
        <label className="form-label" htmlFor={fieldId("message")}>
          Message:
        </label>
        <textarea
          id={fieldId("message")}
          name="message"
          className="form-control scf-textarea"
          rows={4}
          placeholder="Tell us about your needs (optional)"
          value={values.message}
          onChange={(e) => updateField("message", e.target.value)}
        />
      </div>

      <button type="submit" className="btn btn-accent scf-submit">
        Send Request
      </button>
    </form>
  );

  if (isEmbedded) {
    return (
      <div className="scf-embedded" id="request-service">
        {formBody}
      </div>
    );
  }

  return (
    <section className="scf-band" id="request-service" aria-labelledby={fieldId("heading")}>
      <div className="scf-band-bg" aria-hidden="true">
        <img src="/images/final_cta_bg.jpg" alt="" />
      </div>
      <div className="scf-band-overlay" aria-hidden="true" />
      <div className="container scf-grid">
        <div className="scf-context reveal-up">
          <span className="section-eyebrow scf-eyebrow">Get In Touch</span>
          <h2 id={fieldId("heading")} className="scf-headline">
            {headline}
          </h2>
          <p className="scf-support">{supportingLine}</p>

          <ul className="scf-contact-list">
            <li>
              <a href={CONTACT.phoneHref} className="scf-contact-link">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z" />
                </svg>
                <span>(608) 604-9190</span>
              </a>
            </li>
            <li>
              <a href={CONTACT.emailHref} className="scf-contact-link">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <rect width="20" height="16" x="2" y="4" rx="2" />
                  <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7" />
                </svg>
                <span>{CONTACT.emailDisplay}</span>
              </a>
            </li>
            <li>
              <span className="scf-contact-static">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <path d="M20 10c0 6-8 12-8 12s-8-6-8-12a8 8 0 0 1 16 0z" />
                  <circle cx="12" cy="10" r="3" />
                </svg>
                <span>{CONTACT.addressDisplay}</span>
              </span>
            </li>
            <li>
              <span className="scf-contact-static">
                <svg viewBox="0 0 24 24" aria-hidden="true">
                  <circle cx="12" cy="12" r="10" />
                  <path d="M12 6v6l4 2" />
                </svg>
                <span>Monday–Friday, 8:00 AM – 5:00 PM</span>
              </span>
            </li>
          </ul>

          <ul className="scf-trust-list">
            <li>
              <span className="scf-trust-icon" aria-hidden="true">
                <ClipboardList strokeWidth={1.75} />
              </span>
              <div>
                <strong>Customized plan</strong>
                <p>We build service around your layout, schedule, and pressure areas.</p>
              </div>
            </li>
            <li>
              <span className="scf-trust-icon" aria-hidden="true">
                <Search strokeWidth={1.75} />
              </span>
              <div>
                <strong>Root-cause focus</strong>
                <p>We look for entry points and conditions — not just symptoms.</p>
              </div>
            </li>
            <li>
              <span className="scf-trust-icon" aria-hidden="true">
                <ShieldCheck strokeWidth={1.75} />
              </span>
              <div>
                <strong>Biosecurity-conscious</strong>
                <p>We work with farm and facility protocols your team already follows.</p>
              </div>
            </li>
          </ul>
        </div>

        <div className="scf-card reveal-up stagger-delay-1">{formBody}</div>
      </div>
    </section>
  );
}

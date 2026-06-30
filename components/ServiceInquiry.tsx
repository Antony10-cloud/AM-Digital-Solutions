"use client";

import { FormEvent, useState } from "react";

type ServiceInquiryProps = {
  serviceName?: string;
  prompt?: string;
};

export function ServiceInquiry({ serviceName = "General Project", prompt }: ServiceInquiryProps) {
  const [status, setStatus] = useState("");

  function buildMessage(form: HTMLFormElement) {
    const formData = new FormData(form);
    const name = String(formData.get("name") || "").trim();
    const email = String(formData.get("email") || "").trim();
    const phone = String(formData.get("phone") || "").trim();
    const message = String(formData.get("message") || "").trim();

    return [
      `New AM Digital Solutions enquiry`,
      `Service: ${serviceName}`,
      `Name: ${name}`,
      `Email: ${email}`,
      `Phone: ${phone}`,
      ``,
      message
    ].join("\n");
  }

  function sendWhatsApp(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = buildMessage(event.currentTarget);
    setStatus("Opening WhatsApp with your enquiry.");
    window.open(`https://wa.me/254793505248?text=${encodeURIComponent(message)}`, "_blank", "noopener,noreferrer");
  }

  function sendEmail(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    const message = buildMessage(event.currentTarget);
    setStatus("Opening email with your enquiry.");
    window.location.href = `mailto:antonymugo66@gmail.com?subject=${encodeURIComponent(
      `${serviceName} enquiry`
    )}&body=${encodeURIComponent(message)}`;
  }

  function sendEmailFromButton(button: HTMLButtonElement) {
    const form = button.form;
    if (!form) {
      return;
    }

    const message = buildMessage(form);
    setStatus("Opening email with your enquiry.");
    window.location.href = `mailto:antonymugo66@gmail.com?subject=${encodeURIComponent(
      `${serviceName} enquiry`
    )}&body=${encodeURIComponent(message)}`;
  }

  return (
    <section className="inquiry-section" id="inquiry">
      <div>
        <p className="section-kicker">Project Enquiry</p>
        <h2>Tell me about your project.</h2>
        <p>{prompt || "Share what you want to build, what already exists, and what the finished result should help you do."}</p>
      </div>

      <form className="contact-form" onSubmit={sendWhatsApp}>
        <label>
          Name
          <input name="name" type="text" placeholder="Your name" required />
        </label>
        <label>
          Email
          <input name="email" type="email" placeholder="you@example.com" required />
        </label>
        <label>
          Phone
          <input name="phone" type="tel" placeholder="07..." />
        </label>
        <label>
          Project details
          <textarea name="message" rows={5} placeholder="What do you need built?" required />
        </label>
        <div className="form-actions">
          <button type="submit">Send on WhatsApp</button>
          <button type="button" onClick={(event) => sendEmailFromButton(event.currentTarget)}>
            Send by Email
          </button>
        </div>
        <p className="form-status" aria-live="polite">
          {status}
        </p>
      </form>
    </section>
  );
}

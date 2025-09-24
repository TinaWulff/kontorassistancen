import { useState } from "react";
import { z } from "zod";

// Valideringsskema med Zod
const schema = z.object({
  fullname: z.string().min(1, { message: "Navn er påkrævet" }),
  email: z.string().email({ message: "Ugyldig email-adresse" }),
  phone: z
    .string()
    .regex(/^\d{8}$/, { message: "Telefonnummer skal være 8 cifre" })
    .optional(),
  message: z.string().min(1, { message: "Besked er påkrævet" }),
});

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);
  const [isSubmitting, setIsSubmitting] = useState(false);

  const encode = (data) => {
    return Object.keys(data)
      .map(
        (key) =>
          encodeURIComponent(key) + "=" + encodeURIComponent(data[key])
      )
      .join("&");
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());

    // Zod-validering
    const result = schema.safeParse(formData);
    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      setSuccessMessage(false);
      return;
    }

    setIsSubmitting(true);

    try {
      // POST til Netlify Forms
      const response = await fetch("/", {
        method: "POST",
        headers: { "Content-Type": "application/x-www-form-urlencoded" },
        body: encode({ "form-name": "contact", ...formData }),
      });

      if (response.ok) {
        setErrors({});
        setSuccessMessage(true);
        form.reset();
      } else {
        throw new Error("Form submission failed");
      }
    } catch (error) {
      console.error("Error:", error);
      setErrors({ submit: ["Der opstod en fejl. Prøv igen."] });
    } finally {
      setIsSubmitting(false);
    }
  };

  return (
    <div>
      <form
        name="contact"
        className="form"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: "none" }}>
          <label>
            Don’t fill this out if you’re human: <input name="bot-field" />
          </label>
        </p>

        <input type="text" name="fullname" placeholder="Dit navn*" />
        {errors.fullname && (
          <p style={{ color: "red" }}>{errors.fullname[0]}</p>
        )}

        <input type="email" name="email" placeholder="Din email*" />
        {errors.email && <p style={{ color: "red" }}>{errors.email[0]}</p>}

        <input type="text" name="phone" placeholder="Telefonnummer" />
        {errors.phone && <p style={{ color: "red" }}>{errors.phone[0]}</p>}

        <textarea name="message" placeholder="Eventuel besked*" />
        {errors.message && <p style={{ color: "red" }}>{errors.message[0]}</p>}

        <button type="submit" disabled={isSubmitting}>
          {isSubmitting ? "Sender..." : "Send besked"}
        </button>

        {errors.submit && <p style={{ color: "red" }}>{errors.submit[0]}</p>}
      </form>

      {successMessage && (
        <p style={{ color: "green", marginTop: "1em", fontSize: "14px" }}>
          Tak for din besked! Vi vender tilbage hurtigst muligt.
        </p>
      )}
    </div>
  );
}

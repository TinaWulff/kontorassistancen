import { useState } from 'react';
import { z } from 'zod';

// Valideringsskema med Zod
const schema = z.object({
  fullname: z.string().min(1, { message: 'Navn er påkrævet' }),
  email: z.string().email({ message: 'Ugyldig email-adresse' }),
  phone: z
    .string()
    .regex(/^\d{8}$/, { message: 'Telefonnummer skal være 8 cifre' })
    .optional(),
  message: z.string().min(1, { message: 'Besked er påkrævet' }),
});

export default function ContactForm() {
  const [errors, setErrors] = useState({});
  const [successMessage, setSuccessMessage] = useState(false);

  const handleSubmit = (event) => {
    const form = event.currentTarget;
    const formData = Object.fromEntries(new FormData(form).entries());
    const result = schema.safeParse(formData);

    if (!result.success) {
      setErrors(result.error.flatten().fieldErrors);
      event.preventDefault(); // Stop form submission hvis validering fejler
      return;
    }

    // Hvis validering OK, Netlify Forms håndterer submission
    setErrors({});
    setSuccessMessage(true);
    // Bemærk: form reset sker først efter Netlify har modtaget formen
  };

  return (
    <div>
      <form
        name="contact"
        method="POST"
        data-netlify="true"
        data-netlify-honeypot="bot-field"
        onSubmit={handleSubmit}
      >
        {/* Hidden fields for Netlify */}
        <input type="hidden" name="form-name" value="contact" />
        <p style={{ display: 'none' }}>
          <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
        </p>

        {/* Fulde navn */}
        <input type="text" name="fullname" placeholder="Dit navn*" />
        {errors.fullname && <p style={{ color: 'red' }}>{errors.fullname[0]}</p>}

        {/* Email */}
        <input type="email" name="email" placeholder="Din email*" />
        {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}

        {/* Telefonnummer */}
        <input type="text" name="phone" placeholder="Telefonnummer" />
        {errors.phone && <p style={{ color: 'red' }}>{errors.phone[0]}</p>}

        {/* Besked */}
        <textarea name="message" placeholder="Eventuel besked*" />
        {errors.message && <p style={{ color: 'red' }}>{errors.message[0]}</p>}

        {/* Send-knap */}
        <button type="submit">Send besked</button>
      </form>

      {successMessage && (
        <p style={{ color: 'green', marginTop: '1em', fontSize: '14px' }}>
          Tak for din besked! Vi vender tilbage hurtigst muligt.
        </p>
      )}
    </div>
  );
}

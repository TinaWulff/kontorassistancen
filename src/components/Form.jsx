//Formen er skrevet med kode til opsætning af Netlify Forms, så mailen kommer direkte til kontorassistancen, desuden honeypot spamfilter.

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
    const [isSubmitting, setIsSubmitting] = useState(false);

    // const handleSubmit = async (event) => {
    //     event.preventDefault();
    //     const formData = new FormData(event.currentTarget);
    //     const data = Object.fromEntries(formData.entries());

    //     const result = schema.safeParse(data);

    //     if (!result.success) {
    //         setErrors(result.error.flatten().fieldErrors);
    //         setSuccessMessage(false);
    //         return;
    //     }

    //     // Send til Netlify Forms
    //     setIsSubmitting(true);
    //     try {
    //         const response = await fetch('/', {
    //             method: 'POST',
    //             headers: { 'Content-Type': 'application/x-www-form-urlencoded' },
    //             body: new URLSearchParams(formData).toString()
    //         });

    //         if (response.ok) {
    //             setErrors({});
    //             setSuccessMessage(true);
    //             event.target.reset(); // Nulstil form
    //         } else {
    //             throw new Error('Form submission failed');
    //         }
    //     } catch (error) {
    //         console.error('Error:', error);
    //         setErrors({ submit: ['Der opstod en fejl. Prøv igen.'] });
    //     } finally {
    //         setIsSubmitting(false);
    //     }
    // };

    const handleSubmit = async (event) => {
    event.preventDefault();
    const form = event.currentTarget;
    const formData = new FormData(form);

    // Tilføj form-name manuelt
    formData.append("form-name", form.getAttribute("name"));

    const data = Object.fromEntries(formData.entries());
    const result = schema.safeParse(data);

    if (!result.success) {
        setErrors(result.error.flatten().fieldErrors);
        setSuccessMessage(false);
        return;
    }

    setIsSubmitting(true);
    try {
        const response = await fetch("/", {
            method: "POST",
            headers: { "Content-Type": "application/x-www-form-urlencoded" },
            body: new URLSearchParams(formData).toString(),
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
                className="form"
                method="post"
                onSubmit={handleSubmit}
                name="contact"
                data-netlify="true"
                data-netlify-honeypot="bot-field"
            >
                {/* Hidden fields for Netlify */}
                <input type="hidden" name="form-name" value="contact" />
                <p style={{ display: 'none' }}>
                    <label>Don’t fill this out if you’re human: <input name="bot-field" /></label>
                </p>

                {/* Fulde navn */}
                <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Dit navn*"
                />
                {errors.fullname && <p style={{ color: 'red' }}>{errors.fullname[0]}</p>}

                {/* Email */}
                <input
                    type="email"
                    name="email"
                    id="email"
                    placeholder="Din email*"
                />
                {errors.email && <p style={{ color: 'red' }}>{errors.email[0]}</p>}

                {/* Telefonnummer */}
                <input
                    type="text"
                    name="phone"
                    id="phone"
                    placeholder="Telefonnummer"
                />
                {errors.phone && <p style={{ color: 'red' }}>{errors.phone[0]}</p>}

                {/* Besked */}
                <textarea
                    name="message"
                    id="message"
                    placeholder="Eventuel besked*"
                />
                {errors.message && <p style={{ color: 'red' }}>{errors.message[0]}</p>}

                {/* Send-knap */}
                <button type="submit" name="send" id="send" disabled={isSubmitting}>
                    {isSubmitting ? 'Sender...' : 'Send besked'}
                </button>

                {errors.submit && <p style={{ color: 'red' }}>{errors.submit[0]}</p>}
            </form>

            {/* Succesbesked */}
            {successMessage && (
                <p style={{ color: 'green', marginTop: '1em', fontSize: '14px' }}>
                    Tak for din besked! Vi vender tilbage hurtigst muligt.
                </p>
            )}
        </div>
    );
}
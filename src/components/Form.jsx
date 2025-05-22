import { useState } from 'react';
// import { Form } from 'react-router';
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
        event.preventDefault();
        const formData = new FormData(event.currentTarget);
        const data = Object.fromEntries(formData.entries());

        const result = schema.safeParse(data);

        if (!result.success) {
            setErrors(result.error.flatten().fieldErrors);
            setSuccessMessage(false);
        } else {
            setErrors({});
            setSuccessMessage(true);
            console.log('Valid data:', result.data);

        }
    };

    return (
        <div>
            <form className="form" method="post" onSubmit={handleSubmit}>
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
                <button type="submit" name="send" id="send">
                    Kontakt os
                </button>
            </form>
            {/* Succesbesked */}
            {successMessage && (
                <p style={{ color: 'black', marginTop: '1em', fontSize: '14px' }}>
                    Tak for din besked! Vi vender tilbage hurtigst muligt.
                </p>
            )}
        </div>


    );
}

import './FormSection.scss';
import './LinkButton.scss';

export default function FormSection() {


    return (

        <section id="formular" className='form__section'>
          <div>
            <h2>Get in Touch</h2>
            <h3>We are awwwards and we are here to serve! <br />How can we help you?</h3>
            <p>If you have any questions, please contact us through this form.</p>
            <p>Please complete the following fields.</p>
          </div>

        
          <form id="contactform" className="form" action="#" method="get">
                    <input
                    type="text"
                    name="fullname"
                    id="fullname"
                    placeholder="Dit navn*"
                    />

                    <input type="text"
                    name="email"
                    id="email"
                    placeholder="Din email*"
                    />

                    <input type="text"
                    name="Phone number"
                    placeholder="Telefonnummer"
                    />

                    <textarea name="message"
                    id="message"
                    placeholder="Eventuel besked*"
                    />

                    <button type="submit" name="send" id="send">
                        Kontakt os
                    </button>
            </form>

        </section>
    )
}
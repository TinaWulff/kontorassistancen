
import './FormSection.scss';
import './LinkButton.scss';

import ContactForm from './Form';

export default function FormSection() {


    return (

        <section id="formular" className='form__section'>
          <div>
            <h2>Get in Touch</h2>
            <h3>We are awwwards and we are here to serve! <br />How can we help you?</h3>
            <p>If you have any questions, please contact us through this form.</p>
            <p>Please complete the following fields.</p>
          </div>

        <ContactForm />

        </section>
    )
}
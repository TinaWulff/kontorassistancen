
import './formSection.scss';
import './linkButton.scss';

import ContactForm from './Form.jsx';

export default function FormSection() {


    return (

        <section id="formular" className='form__section'>
          <div>
            <h2>Tag kontakt</h2>
            <h3>Kontorassistancen er klar til at hjælpe dig!<br />Få et tilbud eller book et møde!</h3>
            <p>Har du spørgsmål til nærmere afklaring om jeg er den rette til at hjælpe netop din virksomhed, så tøv ikke med at skrive til mig.</p>
            <p>Udfyld formularen og jeg vil vende tilbage til dig hurtigst muligt.</p>
          </div>

        <ContactForm />

        </section>
    )
}
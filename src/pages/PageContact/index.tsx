import { useState } from 'react';
import { ToastContainer, toast } from 'react-toastify';
import emailjs from '@emailjs/browser';

import { ContactStyle } from './styles';

// Types Files
import { TypeSendeMail } from '../../interfaces/TEmail';

export default function PageContact() {

  const [loading, setLoading] = useState('');

  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');
  const [subject, setSubject] = useState('');

  const notifySuccess = () => toast.success("Email enviado com sucesso!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  const notifyError = () => toast.error("Ocorreu um erro no envio!", {
    position: "top-right",
    autoClose: 5000,
    hideProgressBar: false,
    closeOnClick: true,
    pauseOnHover: true,
    draggable: true,
    progress: undefined,
    theme: "dark",
  });

  function sendEmail(e: { preventDefault: TypeSendeMail }) {
    e.preventDefault();

    setLoading("Enviando email, aguarde...")

    const templateParams = {
      from_name: name,
      email: email,
      message: message,
      subject: subject,
    }

    emailjs.send(
      `${process.env.REACT_APP_SERVICE_ID}`,
      `${process.env.REACT_APP_TEMPLATE_ID}`,
      templateParams,
      `${process.env.REACT_APP_PUBLIC_KEY}`
    )
      .then((response) => {

        if (response.status === 200) {
          setLoading("")
          console.log("Email enviado com sucesso.", response.status, response.text)
          notifySuccess()
          setName('')
          setEmail('')
          setSubject('')
          setMessage('')
        }
      }, (error) => {
        console.log("Ocorreu um erro no envio", error)
        notifyError()
      })
  };

  return (
    <>
      <ToastContainer />
      <ContactStyle>
        <section className="contact" id="contact" >
          <div className="max-width">
            <h2 className="title">Contato</h2>
            <div className="contact-content">
              <div className="column left">
                <div className="text">Deseja contratar meus serviços?</div>
                <p>Entre em contato pelo campo a sua direita ou abaixo e vamos conversar, tenho muito a somar no seu projeto ou em sua empresa.</p>
                <div className="icons">

                  <div className="row">
                    <i className="fab fa-linkedin-in"></i>
                    <div className="info">
                      <div className="head">Linkedin</div>
                      <div className="sub-title">https://br.linkedin.com/in/vulquimar-silva-0aab36119</div>
                    </div>
                  </div>

                  <div className="row">
                    <i className="fab fa-github"></i>
                    <div className="info">
                      <div className="head">Github</div>
                      <div className="sub-title">https://github.com/Vulquimar-Silva</div>
                    </div>
                  </div>

                  <div className="row">
                    <i className="fas fa-map-marker-alt"></i>
                    <div className="info">
                      <div className="head">Endereço</div>
                      <div className="sub-title">Uberlândia-MG, Brasil</div>
                    </div>
                  </div>
                </div>
              </div>

              <div className="column right">
                <div className="text">Escreva a mensagem</div>
                <form action="#" onSubmit={sendEmail}>
                  <div className="fields">
                    <div className="field name">
                      <input
                        type="text"
                        placeholder="Digite seu nome"
                        onChange={(e) => setName(e.target.value)}
                        value={name}
                        required />
                    </div>
                    <div className="field email">
                      <input
                        type="email"
                        placeholder="Digite seu email"
                        onChange={(e) => setEmail(e.target.value)}
                        value={email}
                        required />
                    </div>
                  </div>
                  <div className="field">
                    <input
                      type="text"
                      placeholder="Assunto"
                      onChange={(e) => setSubject(e.target.value)}
                      value={subject}
                      required />
                  </div>
                  <div className="field textarea">
                    <textarea
                      cols={30}
                      rows={10}
                      placeholder="Escreva sua mensagem"
                      onChange={(e) => setMessage(e.target.value)}
                      value={message}
                      required
                    ></textarea>
                  </div>
                  <div className="button">
                    <button type="submit">Enviar mensagem</button>
                    <p style={{ color: '#333', fontSize: '14px', marginTop: '10px' }}>{loading}</p>
                  </div>
                </form>
              </div>
            </div>
          </div>
        </section>
      </ContactStyle>
    </>
  )
}

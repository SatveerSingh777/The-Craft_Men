import React from 'react'
import './Contact.css'
function Contact() {
  const phoneNumber = "919877946435";
  const message = "Hello! I would like to connect with you.";
  return (
    <>
      <section className="Contact-section">
        <div className="Con-container">
          <h1>THANK YOU ..</h1>
          <div className="contact">

            <p>E-Mail: <a href="mailto:Thecraftmen01@gmail.com?subject=Hello&body=How are you?" target="_blank" rel="noopener noreferrer">Thecraftmen01@gmail.com</a></p>
            <p><a
              href={`whatsapp://${phoneNumber}?text=${encodeURIComponent(message)}`}
              target="_blank"
              rel="noopener noreferrer"
              style={{ textDecoration: 'none', color: 'green' }}
            >
              Click to Chat on WhatsApp
            </a></p>

          </div>
        </div>
      </section>
    </>
  )
}

export default Contact

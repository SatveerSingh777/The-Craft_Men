import React from 'react';
import './Contact.css';

function Contact() {
  const phoneNumber = "919877946435";
  const message = "Hello! I would like to connect with you.";

  const handleWhatsAppClick = () => {
    const isMobile = /Android|iPhone/i.test(navigator.userAgent);
    const whatsappUrl = isMobile
      ? `whatsapp://send?phone=${phoneNumber}&text=${encodeURIComponent(message)}` // Opens WhatsApp app
      : `https://wa.me/${phoneNumber}?text=${encodeURIComponent(message)}`; // Opens WhatsApp Web

    window.location.href = whatsappUrl; // Direct redirection
  };

  return (
    <>
      <section className="Contact-section">
        <div className="Con-container">
          <h1>THANK YOU ..</h1>
          <div className="contact">
            <p>E-Mail: <a href="mailto:thecraftmen6@gmail.com?subject=Hello&body=I would like to connect with you." target="_blank" rel="noopener noreferrer">thecraftmen6@gmail.com</a></p>
            <p>
              <button
                onClick={handleWhatsAppClick}
                style={{
                  textDecoration: 'none',
                  color: 'white',
                  backgroundColor: '#571f7d',
                  padding: '10px',
                  borderRadius: '5px',
                  border: 'none',
                  cursor: 'pointer',
                }}
              >
                Chat on WhatsApp
              </button>
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Contact;

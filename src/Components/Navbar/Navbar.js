import React from 'react'
import './Navbar.css'

function Navbar() {
  const toBottom = () => {
    window.scrollTo({
      top: document.body.scrollHeight,
      behavior: 'smooth'
    });
  };

  return (
    <>
      <nav>
        <div className="logo">
          <h1>THE CRAFT MEN</h1>
        </div>
        <button onClick={toBottom}>Contact-Us</button>
      </nav> 
    </>
  )
}

export default Navbar;

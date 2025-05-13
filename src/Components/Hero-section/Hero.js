import React from 'react'
import './Hero.css'
import photo1 from '../Pictures/three.png'

function Hero() {
  return (
    <>
    <section className='Hero-section'>
        <div className="Hero-container">
      <div className="Hero-img">
        <img src={photo1} alt=""/>
      </div>
      <div className="Hero-details">
        <h1 className='Hero-heading'>Designing dreams, <br />crafting reality.  </h1>
        <div className='Hero-para'><p>Creativity thrives in collaboration. As a team of passionate designers, we bring diverse perspectives, expertise, and innovation to every project. From concept to completion, we craft visual experiences that inspire, engage, and make an impact. Together, we transform ideas into design that speaks.
        </p></div>

      </div>
      </div>
      </section>
    </>
  )
}

export default Hero

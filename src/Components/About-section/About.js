import React from 'react'
import './About.css'
// import photo1 from '../Pictures/Copilot_20250620_142100.png'
function About() {
  return (
    <>
        <section className='About-section'>
            <div className='About-heading'>
                <h1>ABOUT US</h1>
            </div>

        <div className="About-container">
      <div className="About-details">
        <h1 >WE'RE <br />ENGINEERS</h1>
        <div className='About-para'><p>Engineers by foundation, designers by passion—we fuse logic and artistry to craft meaningful experiences. Driven by innovation, our team turns precision into imagination to shape brands, products, and the future.</p></div>

      </div>
      {/* <div className="About-img">
        <img src={photo1} alt=""/>
      
      </div> */}
      <div className="serve">
        <h1>WHAT WE <br />DO??</h1>
        <ul>
          <li>Poster Making</li>
          <li>Logo Making</li>
          <li>Video Editing</li>
          <li>Product Shoot</li>
          <li>Account Handling: Youtube , Instagram</li>
          <li>Ads Run</li>
        </ul>
      </div>
      </div>
      </section>
    </>
  )
}

export default About

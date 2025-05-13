import React from 'react'
import './About.css'
import photo1 from '../Pictures/sit.png'
function About() {
  return (
    <>
        <section className='About-section'>
            <div className='About-heading'>
                <h1>ABOUT US</h1>
            </div>

        <div className="About-container">
      <div className="About-details">
        <h1 >WE'RE <br />  DESIGNERS </h1>
        <div className='About-para'><p>We are a team of three—engineers by foundation, designers by passion. With a deep understanding of functionality and aesthetics, we bridge the gap between technical precision and creative vision. Every project is a fusion of logic and artistry, where innovation drives design and engineering fuels imagination. Whether crafting brands, building experiences, or shaping the future, we dive into design with a problem-solving mindset and a commitment to excellence.
        </p></div>

      </div>
      <div className="About-img">
        <img src={photo1} alt=""/>
      </div>
      </div>
      </section>
    </>
  )
}

export default About

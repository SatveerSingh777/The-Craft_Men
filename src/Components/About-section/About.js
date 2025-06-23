import React from 'react'
import './About.css'
// import video from '../Pictures/TCM 2.mp4'
function About() {
  return (
    <>
      <section className='About-section'>
        <div className='About-heading'>
          <h1>ABOUT US</h1>
        </div>

        <div className="About-container">
          <div className="About-container1">
            <div className="About-details">
              <h1 >WE'RE <br />ENGINEERS</h1>
              <div className='About-para'><p>Engineers by foundation, designers by passion—we fuse logic and artistry to craft meaningful experiences. Driven by innovation, our team turns precision into imagination to shape brands, products, and the future.</p></div>
            </div>
            
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

            <div className="choose">
              <h1>WHY CHOOSE <br />USE ??</h1>
              <ul>
                <li>Premium quality work</li>
                <li>Professional Approach</li>
                <li>Creative & Original</li>
                <li>Affordable Packages</li>
              </ul>
            </div>

          </div>
          {/* <div className="About-container2">
            <div className="About-container1">
              <div className="About-details">
                <h1 >RAW TO <br />REFINED</h1>
                <div className='About-para'><p>Engineers by foundation, designers by passion—we fuse logic and artistry to craft meaningful experiences. Driven by innovation, our team turns precision into imagination to shape brands, products, and the future.</p></div>

              </div>
              <div className="vid">
                <video
                  src={video}
                  autoPlay
                  muted
                  loop
                  playsInline
                  className="About-video"
                />
              </div>
            </div>
          </div> */}
        </div>
      </section>
    </>
  )
}

export default About

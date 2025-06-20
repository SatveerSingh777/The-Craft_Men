import React, { useState, useEffect } from 'react';
import './Hero.css';
// import bcc from '../Pictures/Kraft Paper Texture.jpeg';
import img1 from '../Pictures/sahil2.png';
import img2 from '../Pictures/Armaan2.png';
import img3 from '../Pictures/me3.png';

const words = [
  { text: 'EDITOR', weight: 900 },
  { text: 'LOGO DESIGNER', weight: 900 },
  { text: 'UI/UX STRATEGIST', weight: 900 },
  { text: 'CREATIVE THINKER', weight: 900 },
  { text: 'VISUAL STORYTELLER', weight: 900 }
];

const images = [img1, img2, img3];

function Hero() {
  const [wordIndex, setWordIndex] = useState(0);
  const [imgIndex, setImgIndex] = useState(0);
  const [animate, setAnimate] = useState(true);

  useEffect(() => {
    const wordInterval = setInterval(() => {
      setAnimate(false);
      setTimeout(() => {
        setWordIndex((prev) => (prev + 1) % words.length);
        setAnimate(true);
      }, 100);
    }, 2500);

    const imgInterval = setInterval(() => {
      setImgIndex((prev) => (prev + 1) % images.length);
    }, 2500);

    return () => {
      clearInterval(wordInterval);
      clearInterval(imgInterval);
    };
  }, []);


  return (
    <section className='Hero-section'>
      <div className="Hero-container">
        <div className="Hero-details">
          <li className='Hero-heading'>We're</li>
          <div className="heading2">
          <li
            className={`Hero-heading2 ${animate ? 'word-fade' : ''}`}
            style={{
              fontFamily: '"Poppins", sans-serif',
              fontWeight: words[wordIndex].weight
            }}
          >
            {words[wordIndex].text}
          </li>
          </div>
            <li className='para'>Creativity thrives in collaboration. As a team of passionate designers</li>
        </div>
          <div className='image-toggle-box'>
            <img src={images[imgIndex]} alt='Cycle' className='toggle-img' />
          </div>
      </div>
    </section>
  );
}

export default Hero;

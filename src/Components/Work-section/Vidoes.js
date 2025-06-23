import React, { useState, useRef, useEffect } from 'react';
import './Work.css';
import './Videos.css';
import VideoCard2 from './VideoCard2';

import s1 from '../Pictures/Food Thumbnail.png';
import s2 from '../Pictures/Beauty.png';
import s3 from '../Pictures/MakeUp.png';
import s4 from '../Pictures/Nails.png';
import s5 from '../Pictures/BOOK VIDEO-Cover.jpg';

function Vidoes() {
  const [showAll, setShowAll] = useState(false);
  const [isNarrow, setIsNarrow] = useState(window.innerWidth <= 1164);
  const containerRef = useRef(null);
  const currentIndex = useRef(0);

  const items = [
    { label: s1, url: 'https://drive.google.com/file/d/1ck-3jRSOZ28m6tXwQu_PWbvbMHdrvapi/view?usp=drive_link' },
    { label: s2, url: 'https://drive.google.com/file/d/1K1kecDrOTPhUAB7opmFTBA1QjWODOTB9/view?usp=drive_link' },
    { label: s3, url: 'https://drive.google.com/file/d/1cJAWr6Z_-2YlrIIbrmRdVvsDBpz3iL42/view?usp=drive_link' },
    { label: s4, url: 'https://drive.google.com/file/d/1vrTBepr2HN0pDd0uPT3v2L8_k1Pb4SKw/view?usp=drive_link' },
    { label: s5, url: 'https://drive.google.com/file/d/1HdHn-_SNf-LVCILVwo17AKVf1kZt169J/view?usp=drive_link' },
  ];

  const visibleItems = showAll ? items : isNarrow ? items.slice(0, 1) : items.slice(0, 3);

  useEffect(() => {
    const handleResize = () => setIsNarrow(window.innerWidth <= 1164);
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const container = containerRef.current;
    if (!container) return;

    const card = container.firstChild;
    if (!card) return;

    const cardWidth = card.offsetWidth + 16;
    const totalWidth = cardWidth * visibleItems.length;
    let scrolling = false;

    if (totalWidth <= container.offsetWidth) return;

    const handleWheel = (e) => {
      if (!container.contains(e.target)) return;
      e.preventDefault();
      if (scrolling) return;

      scrolling = true;

      if (e.deltaY > 0 && currentIndex.current < visibleItems.length - 1) {
        currentIndex.current += 1;
      } else if (e.deltaY < 0 && currentIndex.current > 0) {
        currentIndex.current -= 1;
      }

      const scrollTo = cardWidth * currentIndex.current;
      container.scrollTo({ left: scrollTo, behavior: 'smooth' });

      setTimeout(() => {
        scrolling = false;
      }, 400);
    };

    container.addEventListener('wheel', handleWheel, { passive: false });
    return () => container.removeEventListener('wheel', handleWheel);
  }, [visibleItems.length]);

  return (
    <section className='Work-section'>
      <div className='Work-heading'>
        <h1>OUR VIDEOS</h1>
      </div>

      <div className='Work-container2' ref={containerRef}>
        {visibleItems.map((item, index) => (
          <div key={index} className='snap-wrapper'>
            
            <VideoCard2 img={item.label} href={item.url} />
          </div>
        ))}
      <div className='Work-button-wrapper Work-button-wrapper2'>
        <button
          onClick={() => {
            setShowAll(prev => !prev);
            currentIndex.current = 0;
            if (containerRef.current) {
              containerRef.current.scrollTo({ left: 0, behavior: 'smooth' });
            }
          }}
          className='Work-toggle-button'
         
        >
          {showAll ? 'View Less<<' : 'View More>>'}
        </button>
      </div>
      </div>

    </section>
  );
}

export default Vidoes;

import React, { useState } from 'react';
import "./Work.css"
// import "./Video.css"
import WorkCard from './WorkCard'
import s1 from '../Pictures/Food Thumbnail.png';
import s2 from '../Pictures/Beauty.png';
import s3 from '../Pictures/MakeUp.png';
import s4 from '../Pictures/Nails.png';
import s5 from '../Pictures/BOOK VIDEO-Cover.jpg';
// import s6 from '../Pictures/Untitled-1-Recovered.png'
// import s7 from '../Pictures/Untitled-1.png'

function Videos() {
      const [showAll, setShowAll] = useState(false);

const items = [
    { label: s1, url: 'https://drive.google.com/file/d/1ck-3jRSOZ28m6tXwQu_PWbvbMHdrvapi/view?usp=drive_link' },
    { label: s2, url: 'https://drive.google.com/file/d/1K1kecDrOTPhUAB7opmFTBA1QjWODOTB9/view?usp=drive_link' },
    { label: s5, url: 'https://drive.google.com/file/d/1cJAWr6Z_-2YlrIIbrmRdVvsDBpz3iL42/view?usp=drive_link' },
    { label: s4, url: 'https://drive.google.com/file/d/1vrTBepr2HN0pDd0uPT3v2L8_k1Pb4SKw/view?usp=drive_link' },
    { label: s3, url: 'https://drive.google.com/file/d/1HdHn-_SNf-LVCILVwo17AKVf1kZt169J/view?usp=drive_link' },
  ];
    const visibleItems = showAll ? items : items.slice(0, 3);
  return (
      <>
      <section className='Work-section'>
        <div className='Work-heading'>
          <h1>MY WORK</h1>
        </div>
        {/* <div className='Work-heading2'>
          <h1>LONG VIDEOS</h1>
        </div> */}
        <div className="container">
        <div className='Work-container'>
          {visibleItems.map((item, index) => (
          <WorkCard key={index} img={item.label} href={item.url}/>
        ))}
        </div>
          <div className='Work-button-wrapper'>
        <button onClick={() => setShowAll(prev => !prev)} className='Work-toggle-button'>
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>
      </div>
      </section>
    </>
  )
}

export default Videos





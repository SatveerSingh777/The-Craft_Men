import React, { useState } from 'react';
import './Work.css';
import WorkCard from './WorkCard';

import s1 from '../Pictures/Benyar watch 2.png';
import s2 from '../Pictures/Serum in insta ratio.png';
import s3 from '../Pictures/Travel with maditate.png';
import s4 from '../Pictures/Visa Agency 2.png';
import s5 from '../Pictures/Wine.png';
import s6 from '../Pictures/The Immigration Lounge III.png';
import s7 from '../Pictures/pizza 2.png';
import s8 from '../Pictures/your thoughts in insta ratio.png';
import s9 from '../Pictures/Children Astronaut book cover II.png';
import s10 from '../Pictures/Rayat1.png';
import s11 from '../Pictures/Porscha.png';
import s12 from '../Pictures/Wedding card.png';
import s13 from '../Pictures/Save the date.png';
import s14 from '../Pictures/RSVP.png';
import s15 from '../Pictures/ThankYou Card.png';
import s16 from '../Pictures/airpods2.png';
import s17 from '../Pictures/Schengen iii.png';
import s18 from '../Pictures/Study Visa uk.png';
import s19 from '../Pictures/Study abroad g.png';
import s20 from '../Pictures/Aims consultancy.png';
import s21 from '../Pictures/Alpine Immigration.png';
import s22 from '../Pictures/trinity immi.png';
import s23 from '../Pictures/Hoodie.png';
import s24 from '../Pictures/you burger.png';
import s25 from '../Pictures/Burger 2.png';


const workImages = [
  s4, s6, s17,s18,s19,s10,s20,s21,s22,s23,s24,s25,s8,s16, s3, s2, s7, s5, s1, s9, s11, s12, s13, s14,s15 
];

function Work() {
  const [showAll, setShowAll] = useState(false);

  const visibleImages = showAll ? workImages : workImages.slice(0, 5);

  return (
    <section className='Work-section'>
      <div className='Work-heading'>
        <h1>OUR DESIGNS</h1>
      </div>

      <div className='Work-container'>
        {visibleImages.map((img, index) => (
          <WorkCard key={index} img={img} />
        ))}
      </div>
      <div className='Work-button-wrapper'>
        <button onClick={() => setShowAll(prev => !prev)} className='Work-toggle-button'>
          {showAll ? 'View Less' : 'View More'}
        </button>
      </div>

    </section>
  );
}

export default Work;


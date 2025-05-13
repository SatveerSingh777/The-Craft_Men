import React from 'react'
import "./Work.css"
import WorkCard from './WorkCard'
import s1 from '../Pictures/Benyar watch 2.png'
import s2 from '../Pictures/Serum in insta ratio.png'
import s3 from '../Pictures/Travel with maditate.png'
import s4 from '../Pictures/Visa Agency 2.png'
import s5 from '../Pictures/Wine.png'
import s6 from '../Pictures/airpods2.png'
import s7 from '../Pictures/pizza 2.png'
import s8 from '../Pictures/your thoughts in insta ratio.png'

function Work() {
  return (
    <>
      <section className='Work-section'>
        <div className='Work-heading'>
          <h1>OUR WORK</h1>
        </div>
        <div className='Work-container'>
          <WorkCard img={s1}/>
          <WorkCard img={s2}/>
          <WorkCard img={s3}/>
          <WorkCard img={s4}/>
          <WorkCard img={s5}/>
          <WorkCard img={s6}/>
          <WorkCard img={s7}/>
          <WorkCard img={s8}/>
        </div>
      </section>
    </>
  )
}

export default Work

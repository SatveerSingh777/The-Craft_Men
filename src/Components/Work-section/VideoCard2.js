import React from 'react'
import './Work.css'

function VideoCard2(props) {

    const openImage =() =>{
        window.open(props.href , '_blank')
    }

  return (


    <div>
    <div className="Work-card">
        <div className="Work-img">
            <img onClick={openImage} src={props.img} alt="" />
        
        </div>
    </div>
</div>
  )
}

export default VideoCard2

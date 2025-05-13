import React from 'react'

function WorkCard(props) {

    const openImage = () => {
        window.open(props.img, "_blank");
      };

    return (
        <div>
            <div className="Work-card">
                <div className="Work-img">
                    <img src={props.img} alt="" />
                <button onClick={openImage}>View</button>
                </div>
            </div>
        </div>
    )
}

export default WorkCard

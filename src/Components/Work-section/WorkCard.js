import React from 'react'

function WorkCard(props) {

    const openImage = () => {
        window.open(props.img, "_blank");
      };

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

export default WorkCard

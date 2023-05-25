import React from 'react'
import './FlipImage.css'

const FlipImage = ({imgf,imgb}) => {
  return (
    <div>
            <div class="flip-box">
        <div class="flip-box-inner">
            <div class="flip-box-front">
                <img src={imgf} width={"100%"} alt="" />
            <h2></h2>
            </div>
            <div class="flip-box-back">
                <img src={imgb} width={"100%"} alt="" />

            <h2></h2>
            </div>
        </div>
        </div>
        
    </div>
  )
}

export default FlipImage

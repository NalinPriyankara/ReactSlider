import React, {useState} from 'react'
import './Slider.css'
//import BtnSlider from './BtnSlider'
import dataSlider from './dataSlider'

export default function Slider() {
  return (
    <div className="container-slider">
        {dataSlider.map((obj, index) => {
            return (
                <div className="slider">
                    <img src={process.env.PUBLIC_URL + `/Imgs/img${index + 1}.jpg`} />
                </div>
            )
        })}
    </div>
  )
}

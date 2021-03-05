import React from 'react'
import { } from "./cards.css";
import image from "../IMG/HTML.png";
import image1 from "../IMG/CSS.png";
import image2 from "../IMG/JAVA.png";


export default function card() {
  return (
    <div className="cards-list">


      <div className="card 1">
        <div className="card_image"> <img src={image} /> </div>
        <div className="card_title title-white">
          <p>Quiz</p>
        </div>
      </div>

      <div className="card 1">
        <div className="card_image"> <img src={image1} /> </div>
        <div className="card_title title-white">
          <p>Quiz</p>
        </div>
      </div>

      <div className="card 1">
        <div className="card_image"> <img src={image2} /> </div>
        <div className="card_title title-white">
          <p>Quiz</p>
        </div>
      </div>
    </div>

  )
}

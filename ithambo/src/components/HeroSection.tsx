import React from 'react'
import "./HeroSection.css";
import {
    IonGrid,
    IonRow,
    IonCol,
    IonButton
}
from "@ionic/react";

const HeroSection: React.FC = () => {
  return (
            <div className= "hero">
                <div className= "hero-block">
                    <h1 className= "h1">iThambo Store</h1>
                    <a href= "#" className= "anchor-button">View Catalog</a>
                </div>
            </div>
  )
}

export default HeroSection
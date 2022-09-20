import React from "react";
import "./NewsLetter.css";
import {
    IonItem,
    IonLabel,
    IonInput
} from "@ionic/react";

const NewsLetter: React.FC = () => {
    return(
        <div className= "news-container">
            <label htmlFor= "email" className= "heading-title">Stay tuned for new items — and sales.</label>
            <input id="email" placeholder="Enter your email" name="email" type="email"></input>
        </div>
    )
}

export default NewsLetter;
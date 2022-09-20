import React from "react";
import "./Text.css";
import {
    IonContent
} from "@ionic/react";

const Text: React.FC = () => {
    return(
        <div>
            <p className= "heading-title">We've finally updated our store. Order three new items — 
            and some of our classics.</p>
            <hr/>
        </div>
    )
}

export default Text;
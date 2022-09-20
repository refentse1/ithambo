import React from "react";
import { IonContent, IonHeader, IonPage, IonTitle, IonToolbar, IonCard, IonCardHeader, IonCardSubtitle, IonCardTitle, IonCardContent, IonItem, IonIcon, IonLabel, IonButton } from '@ionic/react';
import { pin, wifi, wine, warning, walk } from 'ionicons/icons';
import "./ProductCard.css";

const ProductCard: React.FC = () => {
    return(
        <div>

        <IonCard>
            <div className= "product-img">
            <div className= "card-price">5 450 ZAR</div>
                <img src= "https://images.pexels.com/photos/90946/pexels-photo-90946.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"/>
            </div>
            <IonCardHeader>
                
                <IonCardTitle>Nikkon Camera</IonCardTitle>
            </IonCardHeader>
        </IonCard>
  
        </div>
    )
}

export default ProductCard;
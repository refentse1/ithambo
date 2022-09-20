import React from "react";
import ProductCard from "./ProductCard";
import {
    IonGrid,
    IonRow,
    IonCol
} from "@ionic/react";

const ProductShowcase: React.FC = () => {
    return(
        <div>
            <IonGrid>
                <IonRow>
                    <IonCol  >
                        <ProductCard/>
                    </IonCol>

                    <IonCol>
                        <ProductCard/>
                    </IonCol>

                    <IonCol>
                        <ProductCard/>
                    </IonCol>

                    <IonCol>
                        <ProductCard/>
                    </IonCol>
                </IonRow>
            </IonGrid>
            <button className= "click-btn">View All Products</button>
        </div>
    )
}

export default ProductShowcase;
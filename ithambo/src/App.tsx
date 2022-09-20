import { Redirect, Route } from 'react-router-dom';
import "./App.css";
import { IonApp, IonRouterOutlet, setupIonicReact, IonContent} from '@ionic/react';
import { IonReactRouter } from '@ionic/react-router';
import Home from './pages/Home';
import Menu from "./components/Menu";
import HeroSection from "./components/HeroSection";
import Text from "./components/Text";
import ProductCard from "./components/ProductCard";
import ProductShowcase from "./components/ProductShowcase";
import NewsLetter from "./components/NewsLetter";


/* Core CSS required for Ionic components to work properly */
import '@ionic/react/css/core.css';

/* Basic CSS for apps built with Ionic */
import '@ionic/react/css/normalize.css';
import '@ionic/react/css/structure.css';
import '@ionic/react/css/typography.css';

/* Optional CSS utils that can be commented out */
import '@ionic/react/css/padding.css';
import '@ionic/react/css/float-elements.css';
import '@ionic/react/css/text-alignment.css';
import '@ionic/react/css/text-transformation.css';
import '@ionic/react/css/flex-utils.css';
import '@ionic/react/css/display.css';

/* Theme variables */
import './theme/variables.css';

setupIonicReact();

const App: React.FC = () => (
  <IonApp>
    <IonContent class= "ion-padding">
      <HeroSection/>
      <Text/>
      <ProductShowcase/>
      <NewsLetter/>
    </IonContent>
  </IonApp>
);

export default App;

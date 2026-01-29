import { useEffect } from 'react'; // <--- 1. Ajouter l'import de useEffect
import ReactGA from 'react-ga4';   //<--- 2. Ajouter l'import de GA4
import { RouterProvider, createBrowserRouter } from 'react-router-dom';

import { Accueil } from './components/Accueil';
import { Curtain } from './components/Curtain';
import { Dessins } from './components/Drawing';
import { Vie } from './components/Vie';
import {Compteur} from './components/Compteur' ;

const router = createBrowserRouter([
    {
        path:"/curtain",
        element: <Accueil/>
      },
      {
        path:"/compteur",
        element: <Compteur/>
      },
      {
        path:"/life",
        element: <Vie/>
      },
      {
        path:"/draw",
        element: <Dessins/>
      },
      {
        path:"/",
        element: <Curtain/>
      }
])

export function App() {

    // <--- 3. Bloc de code pour la balkise
    useEffect(() => {
        // On donne l'ID Google Analytics réel
        ReactGA.initialize("G-8YCV1Q1VHQ"); 
        
        // Optionnel : Envoyer un événement "pageview" initial
        ReactGA.send({ hitType: "pageview", page: window.location.pathname });
    }, []);
    // Fin du bloc --->

    return (
        <RouterProvider router={router} />
    )
}
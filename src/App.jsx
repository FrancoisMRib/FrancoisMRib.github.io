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
    return (
        <RouterProvider router={router} />
    )
}
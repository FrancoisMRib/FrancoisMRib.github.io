import { Link } from "react-router-dom";
import ReactGA from "react-ga4"; // <--- 1. AJOUT DE L'IMPORT
import Fond from '/docs/assets/fond-etoile.jpeg';
import './Header.css';

export function Header() {

    // <--- 2. AJOUT DE LA FONCTION DE TRACKING
    const handleCVClick = () => {
        ReactGA.event({
            category: "Navigation",
            action: "Clic Header",
            label: "Mon CV" // Pour savoir que c'est ce bouton spécifique
        });
    };

    return (
        <div className="Header">
                <img src={Fond} alt="" className="total"/>
                <div className="HeaderContain">
                    {/* <a href="/" className="écrits">Accueil</a>
                    <a href="/gite">Découvrir le gîte</a>
                    <a href="/region">Découvrir la région</a>
                    <a href="/reservations">Réservations</a>
                    <a href="/contact">Contact</a> */}

                        {/* <--- 3. AJOUT DU onClick SUR LE LIEN */}
                  <Link 
                      to={`/curtain`} 
                      className="écrits" 
                      onClick={handleCVClick}
                  >
                      Mon CV
                  </Link>

                  {/* <Link to={`/curtain`} className="écrits">Mon CV</Link> */}
                  <Link to={`/`} className="écrits">Revenir à la page d'entrée</Link>
                  <Link to={`/compteur`} className="écrits">Mes Projets</Link>
                  {/* <Link to={`/curtain`} className="écrits">Accueil</Link> */}
                  <Link to={`/life`} className="écrits">Ma Vie</Link>
              
                </div>

            
        </div>

    );
}
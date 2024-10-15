import { Link } from "react-router-dom";
import './Header.css';

export function Header() {
    return (
        <div className="Header">
        
                <div className="HeaderContain">
                    {/* <a href="/" className="écrits">Accueil</a>
                    <a href="/gite">Découvrir le gîte</a>
                    <a href="/region">Découvrir la région</a>
                    <a href="/reservations">Réservations</a>
                    <a href="/contact">Contact</a> */}
                  <Link to={`/curtain`} className="écrits">Accueil</Link>
                  <Link to={`/`} className="écrits">Revenir à la page d'entrée</Link>
                  <Link to={`/compteur`} className="écrits">Amusez-vous à compter</Link>
                  <Link to={`/curtain`} className="écrits">Restez sur l'accueil</Link>
                  <Link to={`/life`} className="écrits">Ma Vie</Link>
              
                </div>

            
        </div>

    );
}
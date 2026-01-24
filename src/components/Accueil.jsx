import { Header } from "./Header"
import Seriousface from '/src/assets/Photo CV round.jpg';
import Curriculum from '/src/assets/CV_18-1-2026.png';
import './Accueil.css';

export function Accueil() {
    return (
        <div>
            <Header/>
            Bonjour ! Voici mon CV pour que puissiez apprendre à me connaître : 
            <img src={Curriculum} alt="" className="cev"/>
        </div>
    )
}
import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
//import Gauche from '';
import Gauche from '/src/assets/Grand_rideau_texte_portfolio2.jpg';
import Droit from '/src/assets/Petit_rideau_portfolio-removebg-preview.png';
import './Curtain.css';

export function Curtain() {
  const [position, setPosition] = useState(0);
  const [isOpen, setIsOpen] = useState(false); // Pour contrôler l'ouverture du rideau

  const handleDrag = (event, info) => {
    // Limiter le rideau pour ne pas le laisser dépasser les bornes
    if (info.point.x >= -window.innerWidth && info.point.x <= 0) {
      setPosition(info.point.x);
    }
  };

  const handleDragEnd = (event, info) => {
    // Si le rideau est tiré à plus de 50% vers la droite, il s'ouvre complètement
    if (info.point.x > -window.innerWidth / 2) {
      setPosition(0);
      setIsOpen(false); // Le rideau est toujours fermé
    } else {
      setPosition(-window.innerWidth);
      setIsOpen(true); // Le rideau est ouvert
    }
  };

  return (
    <div style={{ overflow: 'hidden', position: 'relative', height: '100vh', width: '100vw' }}>
      {/* Page d'accueil */}
      <div style={{ position: 'absolute', top: 0, left: 0, right: 150, bottom: 0 }}>
        <h1>Bonjour, je m'appelle François Ribere</h1>
        <h2>Titulaire d'un diplôme de niveau 6 de Concepteur-Développeur d'Applications</h2>
        <h2>En recherche d'une alternance dans le domaine de la transformation digitale</h2>
        <p>Cliquez sur l'une des catégories ci-dessous pour en savoir plus sur moi</p>
        <div className="">
            {/* <button className='categ'>Mes compétences</button>
            <button className='categ'>Mes formations</button>
            <button className='categ'>Mes projets</button>
            <button className='categ'>Ma vie</button> */}
            <Link to={`/curtain`} className="categ">Accueil</Link>
            <Link to={`/compteur`} className="categ">Compteur</Link>
            <Link to={`/compteur`} className="categ">Mes projets</Link>
            <Link to={`/life`} className="categ">Ma vie</Link>

        </div>
      </div>

      {/* Petit rideau à droite */}
      <motion.div
        // animate={{ width: isOpen ? '0px' : '100px' }} // Se rétracte lorsque le grand rideau est ouvert
        // transition={{ duration: 0.5 }} // Animation douce
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '250px',
          backgroundImage: `url(${Droit})`,
          backgroundSize: 'cover', // L'image couvre toute la surface
          backgroundPosition: 'center',
          zIndex: 15, // Devant le grand rideau
        }}
      >
        {/* On peut styliser le petit rideau ici */}
      </motion.div>

      {/* Grand rideau */}
      <motion.div
        drag="x"
        dragConstraints={{ left: -window.innerWidth, right: 0 }}
        dragElastic={0.1}
        onDrag={handleDrag}
        onDragEnd={handleDragEnd}
        initial={{ x: 0 }} // Le rideau commence à gauche
        animate={{ x: position }}
        style={{
          position: 'absolute',
          top: 0,
          right: 0,
          bottom: 0,
          width: '100vw',
          backgroundImage: `url(${Gauche})`,// Remplacer par le chemin de votre image
          // backgroundImage: `url('src/assets/Grand_rideau_texte_portfolio2.jpg')`,
          backgroundSize: 'cover', // L'image couvre toute la surface
          backgroundPosition: 'center',
          cursor: 'grab',
          zIndex: 10,
        }}
      >
        {/* Bout du rideau pour interaction */}
        {/* <div
          style={{
            position: 'absolute',
            left: 0, // Le bout du rideau est maintenant à gauche
            top: '50%',
            width: '50px',
            height: '100px',
            backgroundColor: '#f00',
            transform: 'translateY(-50%)',
            cursor: 'grab',
          }}
        > */}
          {/* Ici, on peut styliser le "bout" que l'utilisateur tirera */}
        {/* </div> */}
      </motion.div>
    </div>
  );
}

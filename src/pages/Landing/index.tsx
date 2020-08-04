import React from 'react';
import { Link } from 'react-router-dom';


import logoImg from '../../assets/logo.svg';
import LandingImg from '../../assets/landing.svg';

import studyIcon from '../../assets/icons/study.svg';
import giveClassesIcon from '../../assets/icons/give-classes.svg';
import purpleHeartIcon from '../../assets/icons/purple-heart.svg';

import './styles.css'

export default function Landing(){
  return(
    <div id="page-landing">
      <div id="page-landing-content">
        <div className="logo-container">
          <img src={logoImg} alt="Proffy"/>
          <h2>Sua plataforma de estudos online.</h2>
        </div>
        <img src={LandingImg} alt="Plataforma de estudos" className="hero-image" />

        <div className="buttons-container" >
          <Link to="/study" className="study">
          <img src={studyIcon} alt=""/>
          Estudar
          </Link>
        

          <Link to="/give-classes" className="give-classes">
          <img src={giveClassesIcon} alt="dar aulas"/>
          Dar aulas
          </Link>
        </div>

        <span className="total-connections">
          Total de 200 conexões. <img src={purpleHeartIcon} alt="Coração Roxo"/>
        </span>
      </div>
    </div>
  );
};


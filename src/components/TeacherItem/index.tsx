import React from 'react';

import whatsappIcon from '../../assets/icons/whatsapp.svg';

import './styles.css';

export default function TeacherItem(){
  return(
    <article className="teacher-item">
      <header>
        <img src="https://avatars2.githubusercontent.com/u/66399640?s=460&u=4a8870a51985dcca1e9cc5584e1edabc6fbb9800&v=4"
         alt="Wagner Barboza"
        />
        <div>
          <strong>Wagner Barboza</strong>
          <span>React</span>
        </div>
      </header>
      <p>
        Professor especializado em técnicas avançadas de mágia negra relacionada a tecnologia reactoexplosiva.
        <br/><br/>
        Nossa aula é voltada para técnicas altamente aprimoradas em criações de layouts de sites e aplicativos para celular e Apple Watchers.
      </p>
      <footer>
        <p>
          Preço/Hora
          <strong>R$ 200,00</strong>
        </p>
        <button type="button" >
          <img src={whatsappIcon} alt="WhatsApp"/>
          Entrar em contato
        </button>
      </footer>
    </article>
  )
}
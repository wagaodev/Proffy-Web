import React from 'react';
import PageHeader from '../../components/PageHeader';


import './styles.css'

export default function TeacherForm(){
  return(
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <div className="input-block">
            <label htmlFor="name">Nome completo</label>
            <input type="text" id="name"></input>
          </div>

          <div className="input-block">
            <label htmlFor="avatar">Avatar</label>
            <input type="text" id="avatar"></input>
          </div>

          <div className="input-block">
            <label htmlFor="whatsapp">WhatsApp</label>
            <input type="text" id="whatsapp"></input>
          </div>

        </fieldset>
      </main>


    </div>
  );
};
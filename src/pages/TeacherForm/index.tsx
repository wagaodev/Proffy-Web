import React, { useState } from 'react';

// Icons
import warningIcon from '../../assets/icons/warning.svg';
// Components
import PageHeader from '../../components/PageHeader';
import Input from '../../components/Input';
import Textarea from '../../components/Textarea';
import Select from '../../components/Select';

// style
import './styles.css'

export default function TeacherForm(){

  const [scheduleItems, setScheduleItems] = useState([
    { week_day: 0, from: '8:00 AM', to: '4:00 PM'},
    { week_day: 2, from: '10:00 AM', to: '6:00 PM'},
  ]);

  // 1:06:51

  function addNewScheduleItem(){
    scheduleItems.push({
      week_day: '',
      from: '',
      to: ''
    })
  };

  return(
    <div id="page-teacher-form" className="container">
      <PageHeader
        title="Que incrível que você quer dar aulas." 
        description="O primeiro passo é preencher esse formulário de inscrição"
      />

      <main>
        <fieldset>
          <legend>Seus dados</legend>

          <Input name="name" label="Nome completo" />
          <Input name="avatar" label="Avatar" />
          <Input name="whatsapp" label="Seu WhatsApp" />
          <Textarea name="bio" label="Biografia" />

        </fieldset>

        <fieldset>
          <legend>Sobre a aula</legend>

          <Select 
          name="subject"
          label="Matéria" 
          options={[
            { value: 'Artes', label: 'Artes'},
            { value: 'Biologia', label: 'Biologia'},
            { value: 'Ciências', label: 'Ciências'},
            { value: 'Educação física', label: 'Educação física'},
            { value: 'Física', label: 'Física'},
            { value: 'Geografia', label: 'Geografia'},
            { value: 'História', label: 'História'},
            { value: 'Matemática', label: 'Matemática'},
            { value: 'Português', label: 'Português'},
            { value: 'Química', label: 'Química'},
          ]}
          />
          <Input name="cost" label="Custo da sua hora por aula" />

        </fieldset>



        <fieldset>
          <legend>Horários disponíveis
            <button 
              onClick={addNewScheduleItem}
              type="button">
              + Novo horário
            </button>
          </legend>
          
          {scheduleItems.map(scheduleItems => {
            return (
              <div key={scheduleItems.week_day} className="schedule-item">
                <Select 
                  name="week_day"
                  label="Dia da semana " 
                  options={[
                    { value: '0', label: 'Domingo'},
                    { value: '1', label: 'Segunda-Feira'},
                    { value: '2', label: 'Terça-Feira'},
                    { value: '3', label: 'Quarta-Feira'},
                    { value: '4', label: 'Quinta-Feira'},
                    { value: '5', label: 'Sexta-Feira'},
                    { value: '6', label: 'Sábado'},
                  ]}
                />
                <Input name="from" label="Das" type="time" />
                <Input name="to" label="Até" type="time" />
              </div>
            );
          })}
          
        </fieldset>

        <footer>
          <p>
            <img src={warningIcon} alt="Aviso importante"/>
            Importante! <br/>
            Preencha todos os dados
          </p>
          <button type="button" >
            Salvar Cadastro
          </button>
        </footer>
      </main>


    </div>
  );
};
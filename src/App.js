import React, { useState} from 'react';
import Card from './Card';
import meditationImg from './assets/img/meditation.svg';
import programmingImg from './assets/img/programming.svg';
import timeManagementImg from './assets/img/time_managment.svg';

const App = () => {
  const tutorialData = [
    {
      title: 'Dedica moltes hores',
      description: "Un minim de 30 hores a la setmana. Si no tens prou, haurás de dedicar-li més hores. Al principi sembla imposible, pero notarás una millora ràpidament.",
      bgColor: '#4da2aa',
      image: meditationImg,
    },
    {
      title: 'Programa projects propis',
      description: "Més val 10 hores treballant en projectes propis, que 10 hores mirant tutorials. La motivació i la implicació en el projecte ajudará a accelerar el teu aprenentatge.",
      bgColor: '#d3d4d9',
      image: programmingImg,
    },
    {
      title: 'Procura descansar',
      description: "Descansar bé i desconnectar són vitals. D'aquesta manera reduirás l'estrès i l'ansietat. Milloraràs la teva concentració i consolidaràs el teu aprenentatge",
      bgColor: '#ffd167',
      image: timeManagementImg,
    }
  ];
  const [step, setStep] = useState(0);
  const currentCardData = tutorialData[step];
  const nextStep = () => {
    setStep((prevStep) => prevStep + 1);
  }
  const prevStep = () => {
    setStep((prevStep) => Math.max(prevStep - 1, 0));
  }

  return (
    <div className="App">
      <Card 
          title ={currentCardData.title}
          description={currentCardData.description}
          bgColor={currentCardData.bgColor}
          image={currentCardData.image}
          nextStep={nextStep}
          prevStep={prevStep}
          currentStep = {step}
          totalStep = {tutorialData.length}
       />
    </div>
  );
}

export default App;

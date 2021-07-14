import logo from './logo.svg';
import React, {useState} from 'react';
import './App.css';

function App() {

  const [affichage, setAffichage] = useState("hey");
  const [operande, setOperande] = useState("");
  const [operateur, setOperateur] = useState("+");

  function handleChange(chaine){
    console.log(affichage);
    setAffichage(affichage + " " + chaine);
    console.log(affichage);
  }
  return (
    <>
      <h3>POUR MON PROGRAMME HELLO WORLD J'AI DÉCIDE DE FAIRE UNE CALCULATRICE BASIQUE</h3>

      <section>
        <div className="result-block"> <span>{affichage}</span> </div>
        <div className="num-block">
          <div className="items">
            <div className="big" onClick={() => setOperande("")}>Clear</div>
            <div className="small">C</div>
            <div className="small"> ÷ </div>
          </div>

          <div className="items">
            <div className="small" onClick={() => handleChange("7")}>7</div>
            <div className="small">8</div>
            <div className="small">9</div>
            <div className="small">×</div>
          </div>

          <div className="items">
            <div className="small">4</div>
            <div className="small">5</div>
            <div className="small">6</div>
            <div className="small">-</div>
          </div>

          <div className="items">
            <div className="small">1</div>
            <div className="small">2</div>
            <div className="small">3</div>
            <div className="small">+</div>
          </div>

          <div className="items">
            <div className="small">0</div>
            <div className="small">.</div>
            <div className="big">=</div>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default App;

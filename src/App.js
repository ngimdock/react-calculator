import React, {useState} from 'react';
import './App.css';

function App() {

  const [result, setresult] = useState("");

  const handleClick = (event) => {
    console.clear();
    console.log(event.target);
    setresult(result.concat(event.target.name));
  }

  const handleDelete = () => {
    setresult(result.slice(0, result.length -1));
  };

  const calculate = ()  => {
    try{
      // setresult(eval(result).toString());
      console.log("hey");
    }catch(error){
      setresult("Error")
    }
  };

  return (
    <>
      <h3>POUR MON PROGRAMME HELLO WORLD J'AI DÉCIDE DE FAIRE UNE CALCULATRICE BASIQUE</h3>

      <section>
        <form > 
          <input type="text" value={result} />
        </form>

        <div className="num-block">
          <div className="items">
            <button  className="small" onClick={handleDelete}>C</button>
            <button name="/" className="small" onClick={handleClick}> ÷ </button>
            <button  className="big" onClick={() =>  setresult("")}>Clear</button>
          </div>

          <div className="items">
            <button name="7" className="small" onClick={ (event) =>  handleClick(event)}>7</button>
            <button name="8" className="small" onClick={handleClick}>8</button>
            <button name="9" className="small" onClick={handleClick}>9</button>
            <button name=" × " className="small" onClick={handleClick}>×</button>
          </div>

          <div className="items">
            <button name="4" className="small" onClick={handleClick}>4</button>
            <button name="5" className="small" onClick={handleClick}>5</button>
            <button name="6" className="small" onClick={handleClick}>6</button>
            <button name=" - " className="small" onClick={handleClick}>-</button>
          </div>

          <div className="items">
            <button name="1" className="small" onClick={handleClick}>1</button>
            <button name="2" className="small" onClick={handleClick}>2</button>
            <button name="3" className="small" onClick={handleClick}>3</button>
            <button name=" + " className="small" onClick={handleClick}>+</button>
          </div>

          <div className="items">
            <button name="0" className="small" onClick={handleClick}>0</button>
            <button name="." className="small" onClick={handleClick}>.</button>
            <button  className="big" onClick={calculate}>=</button>
          </div>
        </div>
      </section>

      
    </>
  );
}

export default App;

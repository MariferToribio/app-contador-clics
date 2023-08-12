import './App.css';
import Boton from './componentes/Boton'; 
import Contador from './componentes/Contador';
import freeCodeCampLogo from './imagenes/freecodecamp-logo.png';//Importar imagen al archivo
import { useState } from 'react';

function App() {
  //***Hook useState()
  const [numClics, setNumClics] = useState(0);
  /*
  numClics - Estado actual 
  setNumClics - Funcion para actualizar el estado
  useState(0) - 0 es el valor inicial 
  */  

  //***Funciones para actualizar estado
  //Incrementar contador
  const manejarClic = () => {
    setNumClics(numClics + 1);
  };

  //Reiniciar contador
  const reiniciarContador = () => {
    setNumClics(0);
  };

  return (
    <div className="App">
      <div className="freecodecamp-logo-contenedor">
        <img 
          className="freecodecamp-logo" 
          src={freeCodeCampLogo}
          alt="FreeCodeCamp logo"
        />
      </div>

      <div className="contenedor-principal">
        <Contador numClics={numClics} />
        <Boton
          texto='Clic'
          esBotonDeClic={true}
          manejarClic={manejarClic} />
        <Boton
          texto='Reiniciar'
          esBotonDeClic={false}
          manejarClic={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
import React from 'react';
import '../stylesheets/Contador.css'

//Numero de clic como props
function Contador({ numClics }) {
  return (
    <div className='contador'>
      {numClics}
    </div>
  );
}

export default Contador;
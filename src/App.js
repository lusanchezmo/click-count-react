
import './App.css';
import Boton from './components/Boton';
import Contador from './components/Contador';
import { useState } from 'react';

function App() {

  const [numClicks, setNumClicks] = useState(0);

  const manejarClick = () => {
    setNumClicks(numClicks+1);
  };

  const reiniciarContador = () => {
    setNumClicks(0);
  };

  return (
    <div className="App">
      <div className='principal-container'>
        <Contador numClicks={numClicks}/>
        <Boton 
          texto='Click'
          esBotondeClick={true}
          manejarClick={manejarClick} />
        <Boton 
          texto='Reiniciar'
          esBotondeClick={false}
          manejarClick={reiniciarContador} />
      </div>
    </div>
  );
}

export default App;
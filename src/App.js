import './App.css';
import Tarjeta from './components/mod3.jsx';

function App() {
  return (
    <div className="App">
      <div className='contenedor-tarjetas'>
       <h1>trabajo final grupal del modulo 3: desarrollo frontend con react</h1>
      <Tarjeta
       lugar='san salvador de jujuy'
       latitud='-24.187011'
       longitud='-65.299173'
       temeperatura=''
       velocidad-viento=''
       />
      <Tarjeta
       lugar='salta'
       latitud='-24.781371'
       longitud='-65.448246'
       temeperatura=''
       velocidad-viento=''
       />
       <Tarjeta
       lugar='san miguel de tucuman'
       latitud='-26.830552'
       longitud='-65.203830'
       temeperatura=''
       velocidad-viento=''
       />
       <Tarjeta
       lugar='san fernando del valle de catamarca'
       latitud='-28.468844'
       longitud='-65.779389'
       temeperatura=''
       velocidad-viento=''
       />
       <Tarjeta
       lugar='la rioja'
       latitud='-29.412968'
       longitud='-66.855970'
       temeperatura=''
       velocidad-viento=''
       />
       <Tarjeta
       lugar='santiago del estero'
       latitud='-27.783890'
       longitud='64.264227'
       temeperatura=''
       velocidad-viento=''
       />


      </div>
    
    </div>
  );
}

export default App;

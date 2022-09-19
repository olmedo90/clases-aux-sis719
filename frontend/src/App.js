import './App.css';
import Emcabezado from './components/Header';
import { Footer, Sis719 } from './components/Footer'
function App() {
  const nombre = 'Edson Olmedo Copa';
  const titulo = 'Auxiliatura de Seminario de Sistemas';
 

  return (
    <div className="App">
      <Emcabezado
        titulos={titulo}
        nombre={nombre}
      />
      <div>
        
      </div>
      <Footer
        nombre={nombre}
        titulos={titulo}

      />
      <Sis719 />
    </div>
  );
}

export default App;

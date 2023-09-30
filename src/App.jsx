import { useState, useEffect } from 'react';
import {LoadingScreen} from './components/LoadingScreen'


function App() {
  // Cargar useState para manejar estado de la pantalla de carga
  const [loadingFinished, setLoadingFinished] = useState(false);


  return (
    <main>
      {loadingFinished ? (
        // Contenido principal
        <h1>Hola</h1>
      ) : (
        <LoadingScreen onFinished={() => setLoadingFinished(true)} />
      )}
    </main>
    
  )
}

export default App;

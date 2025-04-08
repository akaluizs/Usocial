// client/src/App.js
import { useEffect, useState } from 'react';
import axios from 'axios';

function App() {
  const [mensaje, setMensaje] = useState('');

  useEffect(() => {
    axios.get('http://localhost:3000/')
      .then(res => setMensaje(res.data))
      .catch(err => console.error(err));
  }, []);

  return (
    <div>
      <h1>{mensaje}</h1>
    </div>
  );
}

export default App;

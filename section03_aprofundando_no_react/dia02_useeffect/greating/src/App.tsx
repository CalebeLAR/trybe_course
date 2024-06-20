import Greeting from './components/Greeting';
import { useState } from 'react';
import './App.css';

function App() {
  const [counter, setCounter] = useState(0);

  return (
    <div className="App">
      <Greeting name="Maria" />
      <Greeting name="Miguel" />
      <button onClick={() => setCounter(counter + 1)}>+1</button>
      <h3>{counter}</h3>
    </div>
  );
}

export default App;

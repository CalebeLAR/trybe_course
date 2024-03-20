import Greeting from './components/Greeting';
import LuckyNumbers from './components/LuckyNumbers';

import './App.css';

function App() {
  return (
    <>
      <Greeting person={{ firstName: 'Chapolin', lastName: 'Colorado' }} />
      <LuckyNumbers />
    </>
  );
}

export default App;

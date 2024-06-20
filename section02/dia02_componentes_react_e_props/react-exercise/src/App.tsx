import Greeting from './components/Greeting';
import LuckyNumbers from './components/LuckyNumbers';

import './App.css';
import PastResults from './components/PastResults';

function App() {
  return (
    <>
      <Greeting person={{ firstName: 'Chapolin', lastName: 'Colorado' }} />
      <LuckyNumbers />
      <PastResults />
    </>
  );
}

export default App;

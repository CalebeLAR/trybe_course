// import Button from './components/Button';
// import Image from './components/Image';

import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  function handleChange() {
    alert('Você digitou algo!');
  }

  function handleClick1() {
    alert('Click botão 1');
  }

  function handleClick2() {
    alert('Click botão 2');
  }

  return (
    <>
      <Input onChange={ handleChange } />
      <br/>
      <Button>{'I\'m a first button'}</Button>
      <Button onClick={ handleClick1 }>{'I\'m a Button1'}</Button>
      <Button onClick={ handleClick2 }>{'I\'m a Button2'}</Button>
    </>
  );
}

export default App;

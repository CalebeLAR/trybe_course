// import Button from './components/Button';
// import Image from './components/Image';
import './App.css';
import Button from './components/Button';
import Input from './components/Input';

function App() {
  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    if (event) {
      alert(event.target.value);
    }
  }

  function handleClick1() {
    alert('Click botão 1');
  }

  function handleClick2() {
    alert('Click botão 2');
  }

  function handleClick(text: string) {
    alert(text);
  }

  return (
    <>
      <Input onChange={ handleChange } />
      <br />
      <Input onChange={ (event) => handleChange(event) } />
      <br />
      <input onChange={ ({ target }) => console.log(target.value) } />
      <br />
      <br />
      <br />
      <Button>{'I\'m a button'}</Button>
      <Button onClick={ () => handleClick('text') }>{'I\'m a button'}</Button>
      <Button onClick={ handleClick1 }>{'I\'m a button with handleClick1'}</Button>
      <Button onClick={ handleClick2 }>{'I\'m a button with handleClick2'}</Button>
      <br />
    </>
  );
}

export default App;

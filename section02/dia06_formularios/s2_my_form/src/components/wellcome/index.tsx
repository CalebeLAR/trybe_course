import { useState } from 'react';
import './wellcome.css';

export default function Wellcome() {
  const [name, setName] = useState('');

  return (
    <form className="wellcome-form">
      <label>
        Nome:
        <input value={ name } onChange={ ({ target }) => setName(target.value) } />
      </label>
      <h1>
        Olá,
        {name}
        !
      </h1>
      <button onClick={ () => setName('') }>Apagar!</button>
    </form>
  );
}

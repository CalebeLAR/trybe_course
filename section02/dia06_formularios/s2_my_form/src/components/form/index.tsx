/* eslint-disable no-alert */
import { useState } from 'react';
import './form.css';

function Form() {
  const [name, setName] = useState('');
  const [email, setEmail] = useState('');
  const [schooling, setSchooling] = useState('Médio');
  const [resume, setResume] = useState('');
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  function resetForm() {
    setName('');
    setEmail('');
    setSchooling('Médio');
    setResume('');
    setTerms(false);
    setError(false);
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      alert(`
      Nome: ${name}\n
      email: ${email}\n
      Escolaridade: ${schooling}\n
      Experiências: ${resume}
      `);
      resetForm();
    } else {
      setError(true);
    }
  }

  return (
    <form className="form" onSubmit={ (event) => handleSubmit(event) }>
      <label>
        Nome
        <input
          required
          value={ name }
          onChange={ ({ target }) => setName(target.value) }
        />
      </label>
      <label>
        E-mail
        <input
          required
          value={ email }
          onChange={ ({ target }) => setEmail(target.value) }
        />
      </label>
      <label>
        Escolaridade
        <select
          value={ schooling }
          onChange={ ({ target }) => setSchooling(target.value) }
        >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>

        </select>
      </label>
      <label>
        Resumo das experiências
        <textarea
          value={ resume }
          onChange={ ({ target }) => setResume(target.value) }
        />
      </label>
      <label>
        Aceito os termos e condições
        <input
          type="checkbox"
          checked={ terms }
          onChange={ () => setTerms((prevTerms) => !prevTerms) }
        />

      </label>
      {error && (
        <h4>
          Você precisa aceitar os termos e condições para poder enviar o
          currículo
        </h4>
      )}
      <button>Enviar</button>
    </form>
  );
}

export default Form;

/* eslint-disable no-alert */
import { useState } from 'react';
import './form.css';

function Form() {
  const [terms, setTerms] = useState(false);
  const [error, setError] = useState(false);

  const [formInfo, setFormInfo] = useState({
    name: '',
    email: '',
    schooling: 'Médio',
    resume: '',
  });

  function handleChange(
    event: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>,
  ) {
    const { name, value } = event.target;
    setFormInfo({
      ...formInfo,
      [name]: value,

    });
  }

  function resetForm() {
    setFormInfo({
      name: '',
      email: '',
      schooling: 'Médio',
      resume: '',
    });
  }

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    if (terms) {
      resetForm();
      setTerms(false);
      setError(false);
      alert(`
        Nome: ${formInfo.name}\n
        Email: ${formInfo.email}\n
        Escolaridade: ${formInfo.schooling}\n
        Experiências: ${formInfo.resume}
        `);
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
          value={ formInfo.name }
          name="name"
          onChange={ handleChange }
        />
      </label>
      <label>
        E-mail
        <input
          required
          name="email"
          value={ formInfo.email }
          onChange={ handleChange }
        />
      </label>
      <label>
        Escolaridade
        <select
          name="schooling"
          value={ formInfo.schooling }
          onChange={ handleChange }
        >
          <option value="Médio">Médio</option>
          <option value="Superior">Superior</option>
          <option value="Pós-graduação">Pós-graduação</option>

        </select>
      </label>
      <label>
        Resumo das experiências
        <textarea
          value={ formInfo.resume }
          name="resume"
          onChange={ handleChange }
        />
      </label>
      <label>
        Aceito os termos e condições
        <input
          type="checkbox"
          name="resume"
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

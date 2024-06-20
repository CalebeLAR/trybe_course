import { useState } from 'react';
import Button from '../button';

type FormProps = {
  submitFunction: (title: string, pages: number) => void,
};

function Form({ submitFunction }: FormProps) {
  const [formData, setFormData] = useState({ title: '', pages: 0 });
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  function handleChange(event: React.ChangeEvent<HTMLInputElement>) {
    setFormData((prevData) => (
      {
        ...prevData,
        [event.target.name]: event.target.value,
      }
    ));
  }

  function resetForm() {
    setFormData({ title: '', pages: 0 });
  }

  function isFormValid() {
    const errors = [];
    if (formData.title === '') {
      errors.push('O campo Título é obrigatório');
    }
    if (formData.pages <= 0) {
      errors.push('O campo Paginas precisa der maior que zero');
    }

    setErrorMessages(errors);
    return errors.length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isFormValid()) {
      submitFunction(formData.title, formData.pages);
      resetForm();
      setErrorMessages([]);
    }
  }
  return (
    <form onSubmit={ handleSubmit } className="books-form">
      <input
        type="text"
        name="title"
        placeholder="Título"
        value={ formData.title }
        onChange={ handleChange }
      />
      <input
        type="number"
        name="pages"
        placeholder="Quantidade de Páginas"
        value={ formData.pages }
        onChange={ handleChange }
      />
      {errorMessages.length > 0 && (
        <div className="form-message">
          {errorMessages.map((message) => <p key={ message }>{message}</p>)}
        </div>
      )}
      <Button>
        Adicionar
      </Button>
    </form>
  );
}

export default Form;

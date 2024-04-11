/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Button from './components/button';
import Title from './components/title';
import Book from './components/book';
import booksList from './data';
import { BookType } from './types';
import './App.css';

export default function App() {
  const [books, setBooks] = useState<BookType[]>(booksList);
  const [bookTitle, setBookTitle] = useState('');
  const [bookPages, setBookPages] = useState(0);
  const [errorMessages, setErrorMessages] = useState<string[]>([]);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  }
  function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookPages(Number(event.target.value));
  }
  function updateState() {
    const newBook = {
      title: bookTitle,
      pages: bookPages,
      isRead: false,
      isFavorite: false,
    };

    setBooks([...books, newBook]);
  }

  function resetState() {
    setBookTitle('');
    setBookPages(0);
  }

  function isFormValid() {
    const errors = [];
    if (bookTitle === '') {
      errors.push('O campo Título é obrigatório');
    }
    if (bookPages <= 0) {
      errors.push('O campo Paginas precisa der maior que zero');
    }

    setErrorMessages(errors);
    return errors.length === 0;
  }

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (isFormValid()) {
      updateState();
      resetState();
      setErrorMessages([]);
    }
  }

  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          Meus livros:
          {' '}
          <s>Livros emprestados</s>
        </Title>

        {books.map((book) => (
          <Book key={ book.title } book={ book } />
        ))}
        <form onSubmit={ handleSubmit } className="books-form">
          <input
            type="text"
            placeholder="Título"
            value={ bookTitle }
            onChange={ handleNameChange }
          />
          <input
            type="number"
            placeholder="Quantidade de Páginas"
            value={ bookPages }
            onChange={ handlePagesChange }
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
        <Footer />
      </div>
    </div>
  );
}

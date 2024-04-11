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
  const [showFormMessage, setShowFormMessage] = useState(false);

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

  function handleSubmit(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    if (bookTitle !== '' && bookPages > 0) {
      updateState();
      resetState();
      setShowFormMessage(false);
    } else {
      setShowFormMessage(true);
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
          {showFormMessage && (
            <div className="form-message">
              <p>Todos os campos são obrigatórios</p>
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

/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Button from './components/button';
import Carousel from './components/carrocel';
import Title from './components/title';
import Book from './components/book';
import booksList from './data';
import './App.css';
import { BookType } from './types';

export default function App() {
  // segment03
  const [counter, setCounter] = useState(0);
  function handleClick() {
    setCounter(counter + 1);
  }

  // segment06
  const [books, setBooks] = useState<BookType[]>(booksList);
  const [bookTitle, setBookTitle] = useState('');
  const [bookPages, setBookPages] = useState(0);

  function handleNameChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookTitle(event.target.value);
  }
  function handlePagesChange(event: React.ChangeEvent<HTMLInputElement>) {
    setBookPages(Number(event.target.value));
  }
  function handleAddClick() {
    const newBook = {
      title: bookTitle,
      pages: bookPages,
      isRead: false,
      isFavorite: false,
    };

    setBooks([...books, newBook]);
    setBookTitle('');
    setBookPages(0);
  }
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Button onClick={ handleClick }>
          {counter}
        </Button>
        <Carousel />
        <Title>
          Meus livros:
          {' '}
          <s>Livros emprestados</s>
        </Title>

        {books.map((book) => (
          <Book key={ book.title } book={ book } />
        ))}
        <div className="books-form">
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

          <Button
            onClick={ handleAddClick }
          >
            Adicionar
          </Button>

        </div>
        <Footer />
      </div>
    </div>
  );
}

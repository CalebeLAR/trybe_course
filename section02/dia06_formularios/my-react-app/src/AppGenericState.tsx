/* eslint-disable arrow-parens */
/* eslint-disable react/jsx-no-bind */
import { useState } from 'react';
import Footer from './components/footer';
import Header from './components/header';
import Title from './components/title';
import Book from './components/book';
import Form from './components/form';
import booksList from './data';
import { BookType } from './types';
import './App.css';

export default function App() {
  const [books, setBooks] = useState<BookType[]>(booksList);

  function updateState(title: string, pages: number) {
    const newBook = {
      title,
      pages,
      isRead: false,
      isFavorite: false,
    };

    setBooks([...books, newBook]);
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
        <Form submitFunction={ updateState } />
        <Footer />
      </div>
    </div>
  );
}

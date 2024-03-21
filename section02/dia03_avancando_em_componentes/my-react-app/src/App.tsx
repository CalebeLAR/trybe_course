import Header from './components/header';
import Footer from './components/footer';
import Book from './components/book';
import Title from './components/title';

import './App.css';
import books, { title } from './data';

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          Meus livros:
          {' '}
          <s>Livros emprestados</s>
        </Title>
        <ul className="books-list">
          {books.map((book) => (
            <Book key={ book.title } book={ book } />
          ))}
        </ul>
        <Title>{title}</Title>
      </div>
      <Footer />
    </div>
  );
}

export default App;

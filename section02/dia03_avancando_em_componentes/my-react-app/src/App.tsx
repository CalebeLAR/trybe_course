import Header from './components/header';
import Footer from './components/footer';
import Book from './components/book';
import Title from './components/title';

import './App.css';

const booksList = [
  {
    title: 'The Godfather',
    pages: 433,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'The Little Prince',
    pages: 92,
    isRead: true,
    isFavorite: true,
  },
  {
    title: 'Clean Code',
    pages: 425,
    isRead: false,
    isFavorite: false,
  },
  {
    title: 'Dom Casmurro',
    pages: 192,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'Vidas Secas',
    pages: 176,
    isRead: true,
    isFavorite: false,
  },
  {
    title: 'Turma da Mônica',
    pages: 52,
    isRead: false,
    isFavorite: false,
  },
];

function App() {
  return (
    <div className="app">
      <Header />
      <div className="container">
        <Title>
          Meus livros: <s>Livros emprestados</s>
        </Title>
        <ul className="books-list">
          {booksList.map((book) => (
            <Book key={book.title} book={book} />
          ))}
        </ul>
      </div>
      <Footer />
    </div>
  );
}

export default App;

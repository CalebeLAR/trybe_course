import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Book';
import Title from './components/Title';

const books = [
  {
    title: 'The GrandPhater',
    pages: 433,
    isRecord: true,
    isFavorite: false,
  },
  {
    title: 'The GrandPhater 2',
    pages: 433,
    isRecord: true,
    isFavorite: false,
  },
  {
    title: 'Journey Through the Stars',
    pages: 289,
    isRecord: false,
    isFavorite: true,
  },
  {
    title: 'Mysteries of the Ancient World',
    pages: 501,
    isRecord: true,
    isFavorite: true,
  },
  {
    title: 'The Silent Language of Plants',
    pages: 324,
    isRecord: false,
    isFavorite: false,
  },
];
function App() {
  return (
    <div>
      <Header />
      <Title>
        <s>Livros Emprestados</s>
      </Title>
      <p>Meus livros: </p>
      <ul>
        {books.map((book) => (
          <Book key={ book.title } book={ book } />
        ))}
      </ul>
      <Footer />
    </div>
  );
}

export default App;

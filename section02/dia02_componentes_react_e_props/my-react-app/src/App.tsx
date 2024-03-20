import Header from './components/Header';
import Footer from './components/Footer';
import Book from './components/Book';

const book1 = {
  title: 'The GrandPhater',
  pages: 433,
  isRecord: true,
  isFavorite: false,
};

const book2 = {
  title: 'Journey Through the Stars',
  pages: 289,
  isRecord: false,
  isFavorite: true,
};

const book3 = {
  title: 'Mysteries of the Ancient World',
  pages: 501,
  isRecord: true,
  isFavorite: true,
};

const book4 = {
  title: 'The Silent Language of Plants',
  pages: 324,
  isRecord: false,
  isFavorite: false,
};

function App() {
  return (
    <div>
      <Header />
      <p>Meus livros: </p>
      <ul>
        <Book book={ book1 } />
        <Book book={ book2 } />
        <Book book={ book3 } />
        <Book book={ book4 } />
      </ul>
      <Footer />
    </div>
  );
}

export default App;

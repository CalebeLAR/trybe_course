type BookProps = {
  book: {
    title: string;
    pages: number;
    isRecord: boolean;
    isFavorite: boolean;
  };
};

function Book({ book }: BookProps) {
  return (
    <li>
      {/* rederiza condicionalmente se isRecord for true */}
      <span>{book.isRecord ? '✅' : '⌛'}</span>

      {`${book.title} | pages: ${book.pages}`}

      {/* rederiza condicionalmente se isFavorite for true */}
      {book.isFavorite && <span>⭐</span>}
    </li>
  );
}

export default Book;

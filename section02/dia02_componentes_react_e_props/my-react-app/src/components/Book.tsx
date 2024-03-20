type BookProps = {
  book: {
    title: string;
    pages: number;
    isRecord: boolean;
    isFavorite: boolean;
  };
};

function Book({ book }: BookProps) {
  return <li>{`${book.title} | pages: ${book.pages}`}</li>;
}

export default Book;

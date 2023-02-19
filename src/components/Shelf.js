import Book from "./Book";
import EmptyState from "./EmptyState";
import PropTypes from "prop-types";

function Shelf({ books, category, updateBookShelf }) {
  const filteredBooks = books.filter((book) => book.shelf === category.value);

  return (
    <div className="mb-10">
      <h2 className="mb-4 mt-4 text-2xl font-bold leading-7 text-gray-900 sm:truncate sm:text-3xl sm:tracking-tight">
        {category.displayName}
      </h2>
      <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
        {filteredBooks.length ? (
          filteredBooks.map((book) => (
            <Book key={book.id} book={book} updateBookShelf={updateBookShelf} />
          ))
        ) : (
          <EmptyState message={"No books found"} />
        )}
      </ul>
    </div>
  );
}

Shelf.propTypes = {
  books: PropTypes.array.isRequired,
  category: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default Shelf;

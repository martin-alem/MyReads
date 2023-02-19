import Book from "./Book";
import EmptyState from "./EmptyState";
import SearchInput from "./SearchInput";
import { useOutletContext, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";

function BookShelves() {
  const { books, updateBookShelf, searchBookShelf } = useOutletContext();
  return (
    <>
      <Link to="/">
        <ArrowLeftIcon className="w-10 h-10" />
      </Link>
      <div className="mb-10">
        <SearchInput searchBookShelf={searchBookShelf} />
      </div>
      {books.length ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <Book key={book.id} book={book} updateBookShelf={updateBookShelf} />
          ))}
        </ul>
      ) : (
        <div className="flex justify-center">
          <EmptyState action={() => {}} message={"No books founds"} />
        </div>
      )}
    </>
  );
}

export default BookShelves;

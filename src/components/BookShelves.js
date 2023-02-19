import Book from "./Book";
import EmptyState from "./EmptyState";
import SearchInput from "./SearchInput";
import { useOutletContext, Link } from "react-router-dom";
import { ArrowLeftIcon } from "@heroicons/react/20/solid";
import { useState } from "react";
import { search } from "../utils/BookAPI";

function BookShelves() {
  const { updateBookShelf } = useOutletContext();
  const [books, setBooks] = useState([]);

  const searchBookShelf = async (query, maxResults) => {
    try {
      if (!query) {
        setBooks([]);
        return;
      }
      const response = await search(query, maxResults);
      setBooks(response);
    } catch (error) {
      console.error(error);
    }
  };
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
          <EmptyState message={"No books founds"} />
        </div>
      )}
    </>
  );
}

export default BookShelves;

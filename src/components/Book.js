import { useEffect, useState } from "react";
import { get } from "../utils/BookAPI";
import DropDown from "./DropDown";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

function Book({ book, updateBookShelf }) {
  const [shelf, setShelf] = useState(book.shelf);

  const getBook = async (bookId) => {
    try {
      const response = await get(bookId);
      setShelf(response.shelf);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBook(book.id);
  }, [book.id]);

  return (
    <li
      key={book.id}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
    >
      <div className="w-full p-2 flex justify-end">
        <DropDown shelf={shelf} updateBookShelf={updateBookShelf} book={book} />
      </div>
      <Link to={`/book/${book.id}`} className="flex flex-1 flex-col p-8">
        <img
          className="mx-auto h-32 w-32 flex-shrink-0"
          src={book?.imageLinks?.thumbnail || ""}
          alt={book?.title || "Untitled"}
        />
        <h3 className="mt-6 text-sm font-medium text-gray-900 underline">
          {book?.title || "Untitled"}
        </h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500 capitalize">
            {book?.publisher || "Unpublished"}
          </dd>
        </dl>
      </Link>
    </li>
  );
}

Book.propTypes = {
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};
export default Book;

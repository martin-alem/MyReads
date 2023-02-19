import Book from "./Book";
import EmptyState from "./EmptyState";
import SearchInput from "./SearchInput";
import { useOutletContext } from "react-router-dom";

function BookShelves() {
  const { books } = useOutletContext();
  return (
    <>
      <div className="mb-10">
        <SearchInput />
      </div>
      {books.length ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <Book key={book.id} book={book} />
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

import Book from "./Book";
import EmptyState from "./EmptyState";
function BookShelves({ books }) {
  return (
    <>
      {books.length ? (
        <ul className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {books.map((book) => (
            <Book book={book} />
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

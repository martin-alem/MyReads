/* eslint-disable react-hooks/exhaustive-deps */
import { useEffect } from "react";
import EmptyState from "./EmptyState";
import Shelf from "./Shelf";
import { useOutletContext, Link } from "react-router-dom";
import { PlusIcon } from "@heroicons/react/20/solid";

const shelves = [
  { displayName: "Read", value: "read" },
  { displayName: "Want to read", value: "wantToRead" },
  { displayName: "Currently reading", value: "currentlyReading" },
];
function MyBookShelves() {
  const { books, updateBookShelf, getBooks } = useOutletContext();

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      {shelves.length ? (
        <div className="divide-y-4 divide-gray-400">
          {shelves.map((shelf) => (
            <Shelf
              key={shelf.value}
              books={books}
              category={shelf}
              updateBookShelf={updateBookShelf}
            />
          ))}
        </div>
      ) : (
        <EmptyState message={"No shelves found"} />
      )}
      <div className="fixed right-14 bottom-14 z-50">
        <Link
          to="bookshelves"
          className="bg-gray-500 hover:bg-gray-700 text-white font-bold py-4 px-4 rounded-full"
        >
          <PlusIcon className="inline rounded-full" />
        </Link>
      </div>
    </>
  );
}

export default MyBookShelves;

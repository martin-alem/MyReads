import EmptyState from "./EmptyState";
import Shelf from "./Shelf";

const shelves = [
  { displayName: "Read", value: "read" },
  { displayName: "Want to read", value: "wantToRead" },
  { displayName: "Currently reading", value: "currentlyReading" },
];
function MyBookShelf({ books }) {
  return (
    <>
      {shelves.length ? (
        shelves.map((shelf) => (
          <Shelf key={shelf.value} books={books} category={shelf} />
        ))
      ) : (
        <EmptyState message={"No shelves found"} />
      )}
    </>
  );
}

export default MyBookShelf;

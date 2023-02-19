import EmptyState from "./EmptyState";
import Shelf from "./Shelf";
import { useOutletContext } from "react-router-dom";

const shelves = [
  { displayName: "Read", value: "read" },
  { displayName: "Want to read", value: "wantToRead" },
  { displayName: "Currently reading", value: "currentlyReading" },
];
function MyBookShelves() {
  const { books } = useOutletContext();
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

export default MyBookShelves;

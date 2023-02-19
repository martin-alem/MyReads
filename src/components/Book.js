import DropDown from "./DropDown";

function Book({ book }) {
  return (
    <li
      key={book.id}
      className="col-span-1 flex flex-col divide-y divide-gray-200 rounded-lg bg-white text-center shadow"
    >
      <div className="w-full p-2 flex justify-end">
        <DropDown shelf={book.shelf} />
      </div>
      <div className="flex flex-1 flex-col p-8">
        <img
          className="mx-auto h-32 w-32 flex-shrink-0"
          src={book.imageLinks.thumbnail}
          alt={book.title}
        />
        <h3 className="mt-6 text-sm font-medium text-gray-900">{book.title}</h3>
        <dl className="mt-1 flex flex-grow flex-col justify-between">
          <dt className="sr-only">Title</dt>
          <dd className="text-sm text-gray-500 capitalize">{book.publisher}</dd>
        </dl>
      </div>
    </li>
  );
}

export default Book;

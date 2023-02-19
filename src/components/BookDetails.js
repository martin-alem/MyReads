import { Link, useParams } from "react-router-dom";
import { ArrowLeftIcon, LinkIcon } from "@heroicons/react/20/solid";
import { get } from "../utils/BookAPI";
import { useEffect, useState } from "react";

function BookDetails() {
  const { bookId } = useParams();
  const [book, setBook] = useState(null);

  const getBook = async (bookId) => {
    try {
      const response = await get(bookId);
      setBook(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    if (!bookId) return;
    getBook(bookId);
  }, [bookId]);

  return (
    <>
      <Link to="/">
        <ArrowLeftIcon className="w-10 h-10" />
      </Link>
      <div className="mt-10">
        <img
          className="inline-block h-14 w-14 rounded-md"
          src={
            book && book.imageLinks.thumbnail ? book.imageLinks.thumbnail : null
          }
          alt={book && book.title ? book.title : "No Title"}
        />
        <p className="mt-1 max-w-2xl text-sm text-gray-500">
          {book && book.title ? book.title : "No Title"}
        </p>
      </div>
      <div className="mt-5 border-t border-gray-200">
        <dl className="sm:divide-y sm:divide-gray-200">
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Title</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">
              {book && book.title ? book.title : "No Title"}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Authors</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">
              {book && book.authors ? book.authors.join() : "No authors"}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Publisher</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">
              {book && book.publisher ? book.publisher : "No publisher"}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Print Type</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0 capitalize">
              {book && book.printType ? book.printType : "No print type"}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Description</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              {book && book.description ? book.description : "No description"}
            </dd>
          </div>
          <div className="py-4 sm:grid sm:grid-cols-3 sm:gap-4 sm:py-5">
            <dt className="text-sm font-medium text-gray-500">Links</dt>
            <dd className="mt-1 text-sm text-gray-900 sm:col-span-2 sm:mt-0">
              <ul className="divide-y divide-gray-200 rounded-md border border-gray-200">
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <LinkIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      More information
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href={book && book.infoLink ? book.infoLink : "/"}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Go
                    </a>
                  </div>
                </li>
                <li className="flex items-center justify-between py-3 pl-3 pr-4 text-sm">
                  <div className="flex w-0 flex-1 items-center">
                    <LinkIcon
                      className="h-5 w-5 flex-shrink-0 text-gray-400"
                      aria-hidden="true"
                    />
                    <span className="ml-2 w-0 flex-1 truncate">
                      Google books preview
                    </span>
                  </div>
                  <div className="ml-4 flex-shrink-0">
                    <a
                      href={book && book.previewLink ? book.previewLink : "/"}
                      target="_blank"
                      rel="noreferrer"
                      className="font-medium text-blue-600 hover:text-blue-500"
                    >
                      Go
                    </a>
                  </div>
                </li>
              </ul>
            </dd>
          </div>
        </dl>
      </div>
    </>
  );
}

export default BookDetails;

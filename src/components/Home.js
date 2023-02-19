import { useState, useEffect } from "react";
import { getAll, update, search } from "./../utils/BookAPI";
import { Outlet } from "react-router-dom";

function Home() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    try {
      const response = await getAll();
      setBooks(response);
    } catch (error) {
      console.error(error);
    }
  };

  const updateBookShelf = async (newShelf, book) => {
    try {
      await update(book, newShelf);
      const newBooks = books.map((b) => {
        if (b.id === book.id) {
          b.shelf = newShelf;
        }
        return b;
      });
      setBooks(newBooks);
    } catch (error) {
      console.error(error);
    }
  };

  const searchBookShelf = async (query, maxResults) => {
    try {
      if (!query) {
        await getBooks();
        return;
      }
      const response = await search(query, maxResults);
      setBooks(response);
    } catch (error) {
      console.error(error);
    }
  };

  useEffect(() => {
    getBooks();
  }, []);
  return (
    <>
      <div className="min-h-full">
        <header className="bg-gray-800 shadow">
          <div className="mx-auto max-w-7xl py-6 px-4 sm:px-6 lg:px-8">
            <h1 className="text-3xl font-bold tracking-tight text-white">
              My Reads
            </h1>
          </div>
        </header>
        <main>
          <div className="mx-auto max-w-7xl py-6 sm:px-6 lg:px-8">
            <div className="px-4 sm:px-0">
              <Outlet
                context={{ books, updateBookShelf, searchBookShelf, getBooks }}
              />
            </div>
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;

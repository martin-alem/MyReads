import { useState, useEffect } from "react";
import { getAll } from "./../utils/BookAPI";
import BookShelves from "./BookShelves";
function Home() {
  const [books, setBooks] = useState([]);

  const getBooks = async () => {
    const response = await getAll();
    console.log(response);
  };

  useEffect(() => {
    // getBooks();
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
            {/* Replace with your content */}
            <div className="px-4 py-6 sm:px-0">
              <BookShelves books={[]} />
            </div>
            {/* /End replace */}
          </div>
        </main>
      </div>
    </>
  );
}

export default Home;

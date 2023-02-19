import Home from "./Home";
import { Routes, Route } from "react-router-dom";
import MyBookShelves from "./MyBookShelves";
import BookShelves from "./BookShelves";
import NotFound from "./NotFound";
import BookDetails from "./BookDetails";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route index element={<MyBookShelves />} />
        <Route path="bookshelves" element={<BookShelves />} />
        <Route path="book/:bookId" element={<BookDetails />} />
      </Route>
      <Route path="*" element={<NotFound />} />
    </Routes>
  );
}

export default App;

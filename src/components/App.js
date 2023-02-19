import Home from "./Home";
import { Router, Routes, Route } from "react-router-dom";
import MyBookShelves from "./MyBookShelves";
import BookShelves from "./BookShelves";

function App() {
  return (
    <Routes>
      <Route exact path="/" element={<Home />}>
        <Route index element={<MyBookShelves />} />
        <Route path="bookshelves" element={<BookShelves />} />
      </Route>
    </Routes>
  );
}

export default App;

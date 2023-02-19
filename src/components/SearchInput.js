/* eslint-disable react-hooks/exhaustive-deps */
import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
import { useCallback, useEffect, useState } from "react";
import PropTypes from "prop-types";
import debounce from "../utils/debounce";

function SearchInput({ searchBookShelf }) {
  const [query, setQuery] = useState("");

  const handleSearch = useCallback(
    debounce((value) => {
      searchBookShelf(value);
    }, 500),
    []
  );

  useEffect(() => {
    handleSearch(query);
  }, [query]);

  const handleChangeInput = (event) => {
    setQuery(event.target.value);
  };
  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      ></label>
      <div className="relative mt-1 flex items-center">
        <input
          onChange={handleChangeInput}
          type="text"
          name="search"
          id="search"
          value={query}
          className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-gray-800 focus:ring-gray-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <MagnifyingGlassIcon />
        </div>
      </div>
    </div>
  );
}

SearchInput.propTypes = {
  searchBookShelf: PropTypes.func.isRequired,
};

export default SearchInput;

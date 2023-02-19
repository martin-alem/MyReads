import { MagnifyingGlassIcon } from "@heroicons/react/20/solid";
function SearchInput() {
  return (
    <div>
      <label
        htmlFor="search"
        className="block text-sm font-medium text-gray-700"
      ></label>
      <div className="relative mt-1 flex items-center">
        <input
          type="text"
          name="search"
          id="search"
          className="block w-full rounded-md border-gray-300 pr-12 shadow-sm focus:border-gray-800 focus:ring-gray-500 sm:text-sm"
        />
        <div className="absolute inset-y-0 right-0 flex py-1.5 pr-1.5">
          <MagnifyingGlassIcon />
        </div>
      </div>
    </div>
  );
}

export default SearchInput;

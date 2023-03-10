import { Fragment } from "react";
import { Menu, Transition } from "@headlessui/react";
import { EllipsisVerticalIcon } from "@heroicons/react/20/solid";
import PropTypes from "prop-types";

function classNames(...classes) {
  return classes.filter(Boolean).join(" ");
}

function DropDown({ shelf, book, updateBookShelf }) {
  return (
    <Menu as="div" className="relative inline-block text-left">
      <div>
        <Menu.Button className="flex items-center rounded-full bg-gray-100 text-gray-400 hover:text-gray-600 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-offset-2 focus:ring-offset-gray-100">
          <span className="sr-only">Open options</span>
          <EllipsisVerticalIcon className="h-5 w-5" aria-hidden="true" />
        </Menu.Button>
      </div>

      <Transition
        as={Fragment}
        enter="transition ease-out duration-100"
        enterFrom="transform opacity-0 scale-95"
        enterTo="transform opacity-100 scale-100"
        leave="transition ease-in duration-75"
        leaveFrom="transform opacity-100 scale-100"
        leaveTo="transform opacity-0 scale-95"
      >
        <Menu.Items className="absolute right-0 z-10 mt-2 w-56 origin-top-right rounded-md bg-white shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
          <div className="py-1">
            <Menu.Item>
              {() => (
                <button
                  onClick={() => updateBookShelf("wantToRead", book)}
                  className={classNames(
                    shelf === "wantToRead"
                      ? "bg-gray-600 text-white"
                      : "text-gray-700",
                    "px-4 py-2 text-sm w-full flex justify-start"
                  )}
                >
                  Want to read
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button
                  onClick={() => updateBookShelf("currentlyReading", book)}
                  className={classNames(
                    shelf === "currentlyReading"
                      ? "bg-gray-600 text-white w-full"
                      : "text-gray-700",
                    "px-4 py-2 text-sm w-full flex justify-start"
                  )}
                >
                  Currently Reading
                </button>
              )}
            </Menu.Item>
            <Menu.Item>
              {() => (
                <button
                  onClick={() => updateBookShelf("read", book)}
                  className={classNames(
                    shelf === "read"
                      ? "bg-gray-600 text-white w-full"
                      : "text-gray-700",
                    "px-4 py-2 text-sm w-full flex justify-start"
                  )}
                >
                  Read
                </button>
              )}
            </Menu.Item>
          </div>
        </Menu.Items>
      </Transition>
    </Menu>
  );
}

DropDown.protoTypes = {
  shelf: PropTypes.object.isRequired,
  book: PropTypes.object.isRequired,
  updateBookShelf: PropTypes.func.isRequired,
};

export default DropDown;

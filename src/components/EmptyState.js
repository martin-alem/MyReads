import PropTypes from "prop-types";

function EmptyState({ action = null, message }) {
  return (
    <button
      type="button"
      className="relative block w-full rounded-lg border-2 border-dashed border-gray-300 p-12 text-center hover:border-gray-400 focus:outline-none focus:ring-2 focus:ring-indigo-500 focus:ring-offset-2"
    >
      {action && (
        <svg
          className="mx-auto h-12 w-12 text-gray-400"
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          viewBox="0 0 24 24"
          strokeWidth="1.5"
          stroke="currentColor"
        >
          <path
            strokeLinecap="round"
            strokeLinejoin="round"
            d="M12 9v6m3-3H9m12 0a9 9 0 11-18 0 9 9 0 0118 0z"
          />
        </svg>
      )}

      <span className="mt-2 block text-sm font-medium text-gray-900">
        {message}
      </span>
    </button>
  );
}

EmptyState.propTypes = {
  action: PropTypes.func,
  message: PropTypes.string.isRequired,
};

export default EmptyState;

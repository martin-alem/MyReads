function debounce(func, delay) {
  let timer;

  return function executedFunc(...args) {
    const later = () => {
      clearTimeout(timer);
      func(...args);
    };

    clearTimeout(timer);
    timer = setTimeout(later, delay);
  };
}

export default debounce;

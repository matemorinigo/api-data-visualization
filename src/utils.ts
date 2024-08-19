export function debouncePromise(func, delay) {
  let timeoutId;
  let pendingPromise = null;

  return function(...args) {
    if (timeoutId) {
      clearTimeout(timeoutId);
    }

    return new Promise((resolve, reject) => {
      timeoutId = setTimeout(() => {
        pendingPromise = func.apply(this, args);
        pendingPromise
                .then(resolve)
                .catch(reject);
      }, delay);
    });
  };
}

export function removeDuplicatesById(array) {
  const seen = new Set();
  return array.filter(item => {
    const duplicate = seen.has(item.id);
    seen.add(item.id);
    return !duplicate;
  });
}



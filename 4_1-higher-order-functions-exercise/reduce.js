var wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function reduce(reducerFn, initialValue, array) {
  if (length(array) === 0) return initialValue;
  const newInitialValue = reduceFn(initialValue, head(array));
  return reduce(reducerFn, newInitialValue, tail(array));
}

reduce(sum, 0, wholes);

// a predicate function for filter
function isEven(n) {
  return n % 2 === 0;
}

// a operational function for map
function doubled(n) {
  return n * 2;
}

// a reducer function
function sum(a, b) {
  return a + b;
}

// Return the first item in an array
function head(array) {
  return array[0];
}

// Return the rest of an array after the first item
function tail(array) {
  return array.slice(1);
}

// Concatenate two arrays into a new single array
function concat(array1, array2) {
  return array1.concat(array2);
}

// Return the number of items in an array
function length(array) {
  return array.length;
}

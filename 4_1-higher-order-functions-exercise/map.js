var wholes = [0, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10];

function map(operationalFn, array) {
  if (length(array) === 0) return [];
  const firstItem = head(array);
  const doubledFirst = [operationalFn(firstItem)];
  return concat(doubledFirst, map(doubled, tail(array)));
}

map(doubled, wholes);

// a predicate function for filter
function isEven(n) {
  return n % 2 === 0;
}

// a operational function for map
function doubled(n) {
  return n * 2;
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

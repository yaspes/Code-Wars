function find_average(array) {
  let total = 0;
  array.forEach(val => total += val);
  return total / array.length;
} 
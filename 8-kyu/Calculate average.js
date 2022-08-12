/*
Write a function which calculates the average of the numbers in a given list.

Note: Empty arrays should return 0.
*/

const find_average = array => {
  if (!array.length) return 0;
  return array.reduce((result, current) => result + current, 0) / array.length;
};

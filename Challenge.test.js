const findPairs = require('./Challenge');

test('[1,9,5,0,20,-4,12,16,7], 12', () => {
  expect(findPairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 12)).toEqual(["+ 12,0", "+ 16,-4", "+ 7,5"]);
});

describe('findPairs', () => {
  test('should handle empty array', () => {
      console.log = jest.fn();
      findPairs([], 10);
      expect(console.log).toHaveBeenCalledWith('No pairs can be found in an array with less than 2 elements.');
  });

  test('should handle array with one element', () => {
      console.log = jest.fn();
      findPairs([5], 10);
      expect(console.log).toHaveBeenCalledWith('No pairs can be found in an array with less than 2 elements.');
  });

  test('should handle non-array input', () => {
      console.log = jest.fn();
      findPairs('not an array', 10);
      expect(console.log).toHaveBeenCalledWith('Invalid input. Please provide an array of numbers and a target number.');
  });

  test('should handle non-number target', () => {
      console.log = jest.fn();
      findPairs([1, 2, 3], 'not a number');
      expect(console.log).toHaveBeenCalledWith('Invalid input. Please provide an array of numbers and a target number.');
  });

  test('should handle non-number elements in array', () => {
      console.log = jest.fn();
      findPairs([1, 2, 'not a number'], 10);
      expect(console.log).toHaveBeenCalledWith('Invalid element found in array. All elements should be numbers.');
  });

  test('should handle no pairs found', () => {
      console.log = jest.fn();
      findPairs([1, 2, 3], 10);
      expect(console.log).toHaveBeenCalledWith('No pairs found that sum up to the target.');
  });
});
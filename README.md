
# Pair Sum Finder

This JavaScript program finds pairs of integers in an array that sum up to a given target value.

## Functionality

The main function, `findPairs(numbers, target)`, takes an array of numbers and a target number as input. It finds all pairs of numbers in the array that sum up to the target number and prints them to the console.

The function handles several edge cases:

- If the input array is empty or contains only one element, the function returns early and prints a message to the console.
- If the input array or target is not a number, the function returns early and prints a message to the console.
- If the input array contains non-integer values, the function returns early and prints a message to the console.

## Usage

Here's an example of how to use the function:

```javascript
findPairs([1, 9, 5, 0, 20, -4, 12, 16, 7], 12);
```

This will print the following pairs to the console:

```
+ 12,0
+ 5,7
+ 16,-4
```

## Testing

The program includes Jest test cases that cover the edge cases for the `findPairs` function. To run the tests, use the following command:

```
npm test
```
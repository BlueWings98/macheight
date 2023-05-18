function findPairs(numbers, target) {
    // Check if numbers is an array and target is a number
    if (!Array.isArray(numbers) || typeof target !== 'number') {
        console.log('Invalid input. Please provide an array of numbers and a target number.');
        return;
    }

    // Check if numbers array has less than 2 elements
    if (numbers.length < 2) {
        console.log('No pairs can be found in an array with less than 2 elements.');
        return;
    }

    let map = {};
    let result = [];
    let resultsArray = [];

    for (let i = 0; i < numbers.length; i++) {
        // Check if the current element is a number
        if (typeof numbers[i] !== 'number') {
            console.log('Invalid element found in array. All elements should be numbers.');
            return;
        }

        let complement = target - numbers[i];

        if (map[complement] !== undefined) {
            result.push([numbers[i], complement]);
        }

        map[numbers[i]] = i;
    }

    // If no pairs were found, print a message and return
    if (result.length === 0) {
        console.log('No pairs found that sum up to the target.');
        return;
    }

    for (let pair of result) {
        resultsArray.push("+ " + pair[0] + "," + pair[1]);
    }
    return resultsArray;
}

module.exports = findPairs;
//This solution has a time complexity of O(n) and a space complexity of O(n)
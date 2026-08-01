// question no: 05
// write a js program to find the secound largest number in an array

function findSecondLargest(arr) {
    let largest = -Infinity;
    let secondLargest = -Infinity;

    for (let i = 0; i < arr.length; i++) {
        if (arr[i] > largest) {
            secondLargest = largest;
            largest = arr[i];
        } else if (arr[i] > secondLargest && arr[i] !== largest) {
            secondLargest = arr[i];
        }
    }

    return secondLargest;
}

// Example usage:
const numbers = [10, 15, 8, 12, 3, 7];
const secondLargestNumber = findSecondLargest(numbers);
console.log("The second largest number is:", secondLargestNumber);
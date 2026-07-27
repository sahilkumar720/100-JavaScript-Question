// Question no: 01
// Write a function that takes an array of numbers and a number as arguments. The function should return the index of the number in the array if it exists, or -1 if it does not exist.



function searchNumber(arr, num) {
    for (let i = 0; i < arr.length; i++){
        if (num === arr[i]) {
            return i;
        } 
    }
    return -1;
}

let arr = [4, 8, 11, 14, 6, 2, 7, 5];

let outputNum = searchNumber(arr, 5);
console.log(outputNum);
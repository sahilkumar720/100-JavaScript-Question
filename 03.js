// Question no: 02
// write a function that takes an array of numbers and a number as arguments. The fuction should return the number of positive numbers in the array.




function findNegativeNumber(arr) {
 let count = 0;
    for (let i = 0; i < arr.length; i++){
       
        if (arr[i] >= 0) {
            count = count + 1;
        }
       
    }
    
    return count;
}


let arr = [4, -8, 11, -14, 6, -2, 7, -5];
let result = findNegativeNumber(arr);
console.log(result);
/*1. Find the Largest Element
Given an integer array, find the largest element without using built-in sorting methods.

Example:

Input: {10, 25, 7, 45, 18} Output: 45*/


// let arr=[10, 25, 7, 45, 18]
// let largest=arr[0]
// for(let i=1;i<=arr.length-1;i++){
//     if(arr[i]>largest)
//         largest=arr[i]
// }
// console.log(largest)




/* 
2. Find the Smallest Element
Find the smallest element in an integer array.

Example:

Input: {12, 5, 18, 3, 9} Output: 3 */


let arr=[12, 5, 18, 3, 9]
let smallest=arr[0]
for(let i=1;i<=arr.length-1;i++){
    if(arr[i]<smallest)
        smallest=arr[i]
}
console.log(smallest)


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


// let arr=[12, 5, 18, 3, 9]
// let smallest=arr[0]
// for(let i=1;i<=arr.length-1;i++){
//     if(arr[i]<smallest)
//         smallest=arr[i]
// }
// console.log(smallest)



/* 3. Calculate Sum and Average
Find the sum and average of all elements in an array.

Example:

Input: {10, 20, 30, 40, 50}

Sum: 150 Average: 30.0 */


// let arr=[10, 20, 30, 40, 50]
// let sum=0;
// for(let i of arr){
//     sum+=i
// }
// console.log(`sum:${sum}`)
// console.log(`Avg:${sum/arr.length}`)



/* 4. Count Even and Odd Numbers
Count how many even and odd numbers are present in an array.

Example:

Input: {10, 15, 22, 7, 8, 13}

Even: 3 Odd: 3 */

let arr=[10, 15, 22, 7, 8, 13]
let even=0;
let odd=0;
for(let i of arr){
    if(i%2==0){
        even+=1
    }
    else{
        odd+=1
    }
}
console.log(`even:${even}`)
console.log(`odd:${odd}`)
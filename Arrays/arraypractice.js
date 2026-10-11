
// 🟢 EASY LEVEL

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

// let arr=[10, 15, 22, 7, 8, 13]
// let even=0;
// let odd=0;
// for(let i of arr){
//     if(i%2==0){
//         even+=1
//     }
//     else{
//         odd+=1
//     }
// }
// console.log(`even:${even}`)
// console.log(`odd:${odd}`)





/* 5. Search an Element
Given an array and a target value, check whether the target exists in the array. If it exists, print its index.

Example:

Input: {10, 20, 30, 40, 50} Target: 30

Output: Element found at index 2 */


// let arr=[10, 20, 30, 40, 50]
// let target=30
// for(let i=0;i<=arr.length-1;i++){
//     if(arr[i]==target)
//         console.log(` Element found at index ${i}`)
// }





// 🟡 MEDIUM LEVEL

/* 6. Reverse an Array
Reverse the elements of an array without creating another array.

Example:

Input: {10, 20, 30, 40, 50} Output: {50, 40, 30, 20, 10}

 */


// let arr=[10, 20, 30, 40, 50]
// let first=0
// let last= arr.length - 1
// while(first<last){
//     let temp=arr[first]
//     arr[first]=arr[last]
//     arr[last]=temp


//     first++
//     last--
// }
// console.log(arr)





/* 7. Find the Second Largest Element
Find the second largest distinct element in an array without using sorting.

Example:

Input: {10, 25, 7, 45, 25, 18} Output: 25 */


// let arr = [10, 25, 7, 45, 25, 18];

// let large = arr[0];
// let seclarge = -Infinity;

// for (let i = 1; i < arr.length; i++) {
// if (arr[i] > large) {
// seclarge = large;
// large = arr[i];
// }
// else if (arr[i] > seclarge && arr[i] < large) {
// seclarge = arr[i];
// }
// }

// console.log(seclarge);




/* 8. Count Frequency of Each Element
Find how many times each element occurs in an array.

Example:

Input: {10, 20, 10, 30, 20, 10}

Output: 10 → 3 20 → 2 30 → 1 */


// let arr=[10, 20, 10, 30, 20, 10]
// let obj={}
// for(let i of arr){
//     obj[i]=(obj[i]||0)+1
// }
// console.log(obj)
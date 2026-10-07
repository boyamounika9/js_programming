
//1.find the largest element in array
// let arr=[10,25,7,45,18]
// let large=arr[0]

// for(let i of arr){
//     if(i>large){
//         large=i
//     }

// }
// console.log(large)



//2.find the smallest element in array

// let arr1=[10,25,7,45,18]
// let small=arr1[0]

// for(let i of arr1){
//     if(i<small){
//         small=i
//     }  
// }
// console.log(small)


//calculate sum and average

// let arr=[10,20,30,40,50]
// let sum=0
// for (let i of arr){
//     sum+=i
// }
// console.log(`sum: ${sum}`)
// console.log(`Avg: ${sum/arr.length}`)




//find the idd and even count

// let arr=[10,15,22,7,8,13]
// let odd=0;
// let even=0;

// for(let i of arr){
//     if(i%2==0){
//         even+=1
//     }
//     else{
//         odd+=1
//     }
// }
// console.log(`Evencount:${even}`)
// console.log(`Oddcount:${odd}`)



//search an element if target value present return index elese return -1
// function elementexist(value, arr) {

//     for (let i = 0; i <= arr.length-1; i++) {
//         if (value == arr[i]) {
//             return i
//         }
//     }
//     return -1
// }
// console.log(elementexist(90, [10, 20, 30, 40, 50]))




//Reverse a array without new array
// function reverseArray(arr) {
//     let start = 0;
//     let end = arr.length - 1;

//     while (start < end) {
//         // swap
//         let temp = arr[start];
//         arr[start] = arr[end];
//         arr[end] = temp;

//         start++;
//         end--;
//     }

//     return arr;
// }

// console.log(reverseArray([10, 20, 30, 40, 50]));


// Find the Second Largest Element
// function Secondlarge(arr) {

//     let large = arr[0];
//     let seclarge = -Infinity;

//     for (let i = 1; i < arr.length; i++) {

//         if (arr[i] > large) {
//             seclarge = large;
//             large = arr[i];
//         }
//         else if (arr[i] > seclarge && arr[i] != large) {
//             seclarge = arr[i];
//         }
//     }

//     console.log(seclarge);
// }

// Secondlarge([10, 25, 7, 45, 25, 18]);



//Count Frequency of Each Element
// let arr=[10, 20, 10, 30, 20, 10]
// let obj={}
// for(let i of arr){
//     obj[i]=(obj[i]||0)+1
// }
// console.log(obj)



// Print Duplicate Elements

// let arr=[10, 20, 30, 20, 40, 10, 50]
// let obj={}
// for(let i of arr){
//     obj[i]=(obj[i]||0)+1

//     if(obj[i]>1){
//         console.log(i)
//     }
// }

//Remove Duplicate Elements
let arr=[10, 20, 10, 30, 20, 40]
let obj={}
for(let i of arr){
    obj[i]=(obj[i]||0)+1
}
console.log(Object.keys(obj))

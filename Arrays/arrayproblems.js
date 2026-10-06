
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
function elementexist(value, arr) {

    for (let i = 0; i <= arr.length; i++) {
        if (value == arr[i]) {
            return i
        }
    }
    return -1
}
console.log(elementexist(90, [10, 20, 30, 40, 50]))

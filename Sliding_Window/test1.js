// 1. find the sum of every consecutive window of size K let arr=[2,4,6,8,10]
//let K=3;out:12,18,24


// function sum_of_k_elements(arr,k){
//     let sum=0;
//     for(let i=0;i<k;i++){
//         sum+=arr[i]
//     }
//     console.log(sum)
//     for(let i=k;i<arr.length;i++){
//         sum=sum+arr[i]-arr[i-k]
//         console.log(sum)
//     }
// }
// sum_of_k_elements([2,4,6,8,10],3)






//find the maximum sum of k consicutive elements let arr=[2,1,5,1,3,2];let k=3;output:9 the maximum sum comes from [5,1,3]

// function sum_of_k_max(arr,k){
//     let large=0;
//     let sum=0;

//     for(let i=0;i<k;i++){
//         sum+=arr[i]
//         if(sum>large){
//             large=sum

//         }
//     }

//     for(let i=k;i<arr.length;i++){
//         sum=sum+arr[i]-arr[i-k]
//         if(sum>large){
//             large=sum
//         }

//     }
//     console.log(large)

// }
// sum_of_k_max([2,1,5,1,3,2],3)





//find the minimum sum of k consicutive elements let arr=[4, 2, 1, 7, 3, 2];let k=7;output:9 


// function sum_of_k_min(arr, k) {
//     let min = Infinity;
//     let sum = 0;

//     for (let i = 0; i < k; i++) {
//         sum += arr[i]
//     }
//     min = sum

//     for (let i = k; i < arr.length; i++) {
//         sum = sum + arr[i] - arr[i - k]
//         if (sum < min) {
//             min = sum

//         }

//     }
//     console.log(min)

// }
// sum_of_k_min([4, 2, 1, 7, 3, 2], 3)

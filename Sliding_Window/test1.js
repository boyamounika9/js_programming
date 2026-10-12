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
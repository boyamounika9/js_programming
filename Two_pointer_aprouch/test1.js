// ====== 1. write js program to find duplicate elements in a given array ==========

// let array =[1,2,3,4,1,2]
// let obj={}
// for(let i of array){
//     obj[i]=(obj[i]||0)+1
//     if(obj[i]>1)
//         console.log(i)
// }

//============================
// let duplicate=[]
// for(let i=0;i<=array.length-1;i++){
//     for(let j=i+1;j<=array.length-1;j++){
//         if(array[i]==array[j]){
//             if(!duplicate.includes(array[i]))
//             duplicate.push(array[i])
//         }
//     }

// }
// console.log(duplicate)


// ========== TWO SUM =========================
let target=14
let array=[1,2,4,6,13,7]
for(let i=0;i<=array.length-1;i++){
    for(let j=i+1;j<=array.length-1;j++){
        if(array[i]+array[j]==target){
           console.log(array[i],array[j])
        }
    }

}

// ============= remove duplicate ==================

// let array = [1, 2, 3, 1, 2]
// let duplicate = []
// for (let i = 0; i <= array.length - 1; i++) {

//     if (!duplicate.includes(array[i])) {
//         duplicate.push(array[i])
//     }

// }
// console.log(duplicate)



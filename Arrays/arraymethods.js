let arr=[{name:"mounika",age:21},{name:"manasa",age:20},{name:"mounika",age:22}]

//it gives the first ele which satisfies the condition
let firstres=arr.find((ele)=>{
    if(ele.name==="mounika"){
        return ele
    }
})
console.log(firstres)


//it gives the last ele which satisfies the condition

// let lastres=arr.findLast((ele)=>{
//     if(ele.name==="mounika"){
//         return ele
//     }
// })
// console.log(lastres)


// let res=arr.find((ele)=>{
//     if(ele.name==="mallika"){
//         return ele
//     }
// })
// console.log(res)



let arr1=[1,2,3,4,5],arr2=[6,7,8,9],arr3=['a','b','c','d','e']

//concat is used to merge two or more arrs into single array
let res=arr1.concat(arr2,arr3)
console.log(res)


//slice is used to return the some part of array into a new array
console.log(arr3.slice(0,3))

//join is used to convert array into string and it accepts separator
console.log(arr3.join(" "))
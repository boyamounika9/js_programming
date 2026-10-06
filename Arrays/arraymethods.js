// let arr = [{ name: "mounika", age: 21 }, { name: "manasa", age: 20 }, { name: "mounika", age: 22 }]

//it gives the first ele which satisfies the condition
// let firstres = arr.find((ele) => {
//     if (ele.name === "mounika") {
//         return ele
//     }
// })
// console.log(firstres)


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



// let arr1 = [1, 2, 3, 4, 5], arr2 = [6, 7, 8, 9], arr3 = ['a', 'b', 'c', 'd', 'e']

//concat is used to merge two or more arrs into single array
// let res = arr1.concat(arr2, arr3)
// console.log(res)


//slice is used to return the some part of array into a new array
// console.log(arr3.slice(0, 3))

//join is used to convert array into string and it accepts separator
// console.log(arr3.join(" "))


//flat method is used to convert the nested array in a single level array
// let nestarr = [1, [2, [3, [4, [5, [6]]]]]]
// console.log(nestarr.flat(Infinity))


//flatMap method is used to traverse the entire array and it maps the array as well as it flat the array
// let student = [{ name: "rahul", skills: ["javascript", "react"] },
//                 { name: "priya", skills: ["java", "python"] },
//                 { name: "arun", skills: ["html", "css"] }

//             ];
            
// let result=student.flatMap(ele=>ele.skills)
// console.log(result)



//foreach -- it dont return any value

// let arr=[1,2,3,4,5]
// let res=arr.forEach((ele)=>ele*2)
// console.log(res)


//map-- it returns the array of transformed elements with the same length od original array
// let res=arr.map((ele)=>ele*2)
// console.log(res)


//filter 

// let res=arr.filter((ele)=>ele>=4)
// console.log(res)


//reduce
// let res=arr.reduce((acc,ele)=>acc+ele)
// console.log(res)


//reduceRight
// let res=arr.reduceRight((acc,ele)=>acc+ele)
// console.log(res)



//some method -it returns true when even one element satisfies the condition
// let res=arr.some((ele)=>ele>4)
// console.log(res)

//every method -it returns true when all the elements satisfies the condition
// let res=arr.every((ele)=>ele>0)
// console.log(res)



//sort,reverse,tosorted,torversed
// let arr=[7,8,5,3,9,2,1]
// arr.sort((a,b)=>a-b)
// let sortyedarr=arr.toSorted((a,b)=>a-b)
// let reversedarr=arr.toReversed()
// arr.reverse()
// console.log(arr)
// console.log(sortyedarr)
// console.log(reversedarr)


//at(),tostring()
let arr=["a","b","c","d"]
console.log(arr[1])
console.log(arr.at(-1))
console.log(arr.toString())
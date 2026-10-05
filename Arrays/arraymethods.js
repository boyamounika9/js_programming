let arr=[{name:"mounika",age:21},{name:"manasa",age:20},{name:"mounika",age:22}]

//it gives the first ele which satisfies the condition
let firstres=arr.find((ele)=>{
    if(ele.name==="mounika"){
        return ele
    }
})
console.log(firstres)


//it gives the last ele which satisfies the condition

let lastres=arr.findLast((ele)=>{
    if(ele.name==="mounika"){
        return ele
    }
})
console.log(lastres)


let res=arr.find((ele)=>{
    if(ele.name==="mallika"){
        return ele
    }
})
console.log(res)
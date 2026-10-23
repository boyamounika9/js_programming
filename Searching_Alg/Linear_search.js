function linear(arr,target){
    for(let i=0;i<arr.length;i++){
        if(arr[i]===target){
            return i
        }
    }
    return -1
}
console.log(linear([7,1,8,1,5,6],1))
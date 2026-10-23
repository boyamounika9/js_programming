function binarysearch(arr,target){
    let left=0;
    let right=arr.length-1
    while(left<=right){

        let mid=Math.floor((left+right)/2)
        if(target==arr[mid]){
            return mid
        }

        if(target>arr[mid]){
            left =mid+1
        }
        else{
            right=mid-1
        }
    }
    return -1

}
console.log(binarysearch([1,2,3,4,5,6],3))
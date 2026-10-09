// function demo(n) {
//     if (n == 1) {
//         console.log(n)
//         return

//     }
//     console.log(n)
//     demo(n - 1)
// }
// demo(5)


//from 1 to 100 using recursion
// function demo(n) {
//     if (n == 100) {
//         console.log(n)
//         return

//     }
//     console.log(n)
//     demo(n +1)
// }
// demo(1)


//============= 1. print sum of 1 to 5 numbers ====================


// function sum(n){
//     if(n==1){
//         return 1
//     }
//     return n+ sum(n-1)
    

// }
// console.log(sum(5))


//===================2.Reverse a string===============
function reverse(str) {
    if (str === "") {
        return "";
    }

    return reverse(str.slice(1)) + str[0];
}

console.log(reverse("hello"));
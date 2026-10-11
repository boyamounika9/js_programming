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
// function reverse(str) {
//     if (str === "") {
//         return "";
//     }

//     return reverse(str.slice(1)) + str[0];
// }

// console.log(reverse("hello"));


//====================3.chech if a string is palindrome or not========================

// function isPalindrome(str) {
//     if (str.length <= 1) {
//         return true;
//     }

//     if (str[0] !== str[str.length - 1]) {
//         return false;
//     }

//     return isPalindrome(str.slice(1, -1));
// }

// console.log(isPalindrome("madam")); // true
// console.log(isPalindrome("hello")); // false
// console.log(isPalindrome("level")); // true
// console.log(isPalindrome("leveol")); // true



//===========factorial=============\

// function fact(n){
//     if(n==0)
//     {
//         return 1
//     }

//     return n* fact(n-1)

// }
// console.log(fact(5))


//Maximum num in array

// function maxNum(arr, i = 0) {
//     if (i === arr.length - 1) {
//         return arr[i];
//     }

//     let max = maxNum(arr, i + 1);

//     return arr[i] > max ? arr[i] : max;
// }

// console.log(maxNum([10, 25, 5, 40, 15]));



//occcurence


// function countDigit(n, digit) {
//     if (n === 0) {
//         return 0;
//     }

//     if (n % 10 === digit) {
//         return 1 + countDigit(Math.floor(n / 10), digit);
//     }

//     return countDigit(Math.floor(n / 10), digit);
// }

// console.log(countDigit(1223334, 3)); // 3


//first occurence

function firstocc(n, digit) {
    if (n === 0) {
        return -1;
    }

    let result = firstocc(Math.floor(n / 10), digit);

    if (result !== -1) {
        return result + 1;
    }

    if (n % 10 === digit) {
        return 0;
    }

    return -1;
}

console.log(firstocc(1234, 3)); // 2


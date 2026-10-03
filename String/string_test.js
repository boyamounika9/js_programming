//frequency of each charecter

// let str='mounikamounika'
// let obj={}
// for(let i of str){
//     obj[i]=(obj[i]||0)+1
// }
// console.log(obj)





//longest word in a sentence

// let sen="i love programming"
// let sentence=sen.split(" ")
// let digitlength=0

// for(let i of sentence){
//     let count=0
//     for(let j of i){
//         count++
//     }
//     if(digitlength<count){
//         digitlength=count
//     }
// }

// for(let k of sentence){
//     if(k.length == digitlength){
//         console.log(k)
//     }
    
// }





//removing spaces from a string

// let string="hello world js"
// let list=string.split(" ")
// let newstring=""
// for(let i of list){
//     newstring+=i
// }
// console.log(newstring)





//check if a string contains only digits

// function digitornot(string){
// for (let i of string) {

//     if (
//         (i.charCodeAt(0) >= 65 && i.charCodeAt(0) <= 90) ||
//         (i.charCodeAt(0) >= 97 && i.charCodeAt(0) <= 122)
//     ) {
//         return ` it contains a charecter called ${i} `
//     }
// }
// return "only digits"
// }

// console.log(digitornot("123a5"))




//find the duplicate charecters

// let string="programming"
// let obj={}
// for(let i of string){
//     obj[i]=(obj[i]||0)+1
// }
// for(let j in obj){
//     if(obj[j]>1){
//         console.log(j)
//     }
// }




// let str="Hello World"
// let newstr=""
// for(let i of str){
//     if(i.charCodeAt(0) >=65 && i.charCodeAt(0)<=90){
//         newstr+=String.fromCharCode(i.charCodeAt(0)+32)
//     }
//     else{
//         newstr+=String.fromCharCode(i.charCodeAt(0)-32)
//     }
// }
// console.log(newstr)






let str = "abcabcbb";

let longest = "";
let current = "";

for (let ch of str) {
    if (current.includes(ch)) {
        current = current.substring(current.indexOf(ch) + 1);
    }

    current += ch;

    if (current.length > longest.length) {
        longest = current;
    }
}

console.log(longest);
console.log(longest.length);





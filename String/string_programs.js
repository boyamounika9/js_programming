//1. length of the string without inbuilt methods

// let str="Mounika"
// let count=0;
// for(let i of str){
//     count++
// }
// console.log(count)

//2.Reverse a string
// let str = "hello";
// let rev = "";

// for (let i = str.length - 1; i >= 0; i--) {
//     rev += str[i];
// }

// console.log(rev);

//3. Palindrome or not
// let str="mom"
// let copy=str;
// let Reverse=""
// for(let i=str.length-1;i>=0;i--){
//     Reverse+=str[i]
// }
// console.log((Reverse===copy)? "yes":"no")

//4.count vowels and consonants

// let string="mounika"
// let vowelscount=0;
// let consonantscount=0;
// for(let i of string){
//     if(i==='A'||i==='E'||i==='I'||i==='O'||i==='U' ||i==='a' ||i==='e' ||i==='i' ||i==='o' ||i==='u'){
//         vowelscount+=1
//     }
//     else{
//         consonantscount++
//     }
// }
// console.log(`vowels count is ${vowelscount}`)
// console.log(` consonants count is ${ consonantscount}`)


//5.Frequency of each charecter

// let str="aabbcccddecfg"
// let obj={}
// for(let char of str){
//     obj[char]=(obj[char] || 0)+1
// }
// console.log(obj)

//6.Remove duplicate charecters
// let str="programming"
// let obj={}
// for(let char of str){
//     obj[char]=(obj[char]||0)+1
// }
// console.log(Object.keys(obj).join(""))

//7.Find the first no-repeating charecter
// function fNonRep(str){
//   let obj = {}, letter = '';
//   for(let char of str){
//     obj[char] = (obj[char] || 0) + 1;
//   }

//   for(let char of str){
//     if(obj[char] < 2){
//       console.log(char);
//       break;
//     }
//   }
// }

// fNonRep('abacdee');
// fNonRep('jeevanj');

// 8.first repeating charecter

// function fRepChar(str){
//   let obj = {}, letter = '';
//   for(let char of str){
//     obj[char] = (obj[char] || 0) + 1;

//     if(obj[char] > 1){
//       letter = char;
//       break;
//     }
//   }
//   console.log(letter);
// }
// fRepChar('abcdbea');

//9.Anagram ("listen" =="silent")


// let string1 = "listen";
// let string2 = "silent";

// let obj1 = {};
// let obj2 = {};

// for (let i of string1) {
//     obj1[i] = (obj1[i] || 0) + 1;
// }

// for (let i of string2) {
//     obj2[i] = (obj2[i] || 0) + 1;
// }

// let isAnagram = true;

// for (let i in obj1) {
//     if (obj2[i] !== obj1[i]) {
//         isAnagram = false;
//         break;
//     }
// }

// if (isAnagram && string1.length === string2.length) {
//     console.log("yes");
// } else {
//     console.log("no");
// }

//10.count the number of words in a string

// let str="i love my self"
// let list=str.split(" ")
// let count=0
// for(let i of list){
//     count+=1
// }
// console.log(count)


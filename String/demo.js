// write a js program to find length of string

// let str = 'String'
// console.log(str.length);

// write to find a length of string without using length method

// let str = 'sathya bhaaai'
// let count = 0;
// for(let char of str){
//   count++;
// }
// console.log(count);

// another way

// let i = 0;
// while(str[i]){
//   i++
// }
// console.log(i);


//- 02 --------------- js program to reverse a string without inbuild methods --------------------------------


// function reverseString(str){
//   let res = "";
//   for(let i=str.length-1; i >=0 ; i--){
//     res += str[i]
//   }
//   console.log(res);
// }

// reverseString("abcd")

// another method (method chaining) in single line
// let str = "abcd";
// console.log(str.split('').reverse().join(''));



//- 03 -------------------- write a js program to check a given string is a palindrome or not ---------------------------


// function palindrome(str){
//   rev = '';
//   for(let char of str){
//     rev = char + rev
//   }
//   return str === rev
// }

// console.log(palindrome('MoM'));
// console.log(palindrome('Mom'));
// console.log(palindrome('Red'));


// function palindrome(str) {
//   rev = '';
//   for(let i = str.length-1 ; i >= 0; i --){
//     rev += str[i]
//   }
//   return str === rev
// }

// console.log(palindrome('MoM'));
// console.log(palindrome('Mom'));
// console.log(palindrome('Red'));

// optimised program
// function palindrome(str) {
//   let i = 0,j=str.length-1;
//   while(i<=j){
//     if(str[i] != str[j]){
//       return false
//     }
//     i++, j--
//   }
//   return true;
// }

// console.log(palindrome('madam'));
// console.log(palindrome('Teacher'));
// console.log(palindrome('sundari'));


//- 04 ------------------- write a js program to count how many ovels are present ----------------------------


// function ovels(str){
//   let count=0,i=0,vowels="aeiouAEIOU";
//   for(let char of str){
//     if(vowels.includes(char)){
//       count++
//     }
//   }
//   console.log(count);
// }
// ovels("AeoU");


//-- 4.1 ------------------- write a js program to count how many consonents are present ---------------------------


// function ovels(str) {
//   let count = 0, i = 0, vowels = "aeiouAEIOU";
//   for (let char of str) {
//     if (! vowels.includes(char)) {
//       count++
//     }
//   }
//   console.log(count);
// }
// ovels("AeoU");


//-------------------- js program to frequency of a digits in string ----------------------------


// function freqChar(str){
//   let obj = {};
//   let i = 0;
//   while(i<str.length){
//     let char = str[i];
//     obj[char] = ( obj[char] || 0) + 1;
//     i++
//   }
//   console.log(obj);
// }
// freqChar("String");
// freqChar("Jeevan")

//-- 05 -------------------- write a js program to find frequency of a digits in a number --------------------------

// function freqNum(num){
//   let obj = {}
//   let copy = num;
//   while( copy > 0){
//     let last = copy % 10;
//     obj[last] = (obj[last] || 0) + 1;
//     copy = Math.floor(copy / 10);
//   }
//   console.log(obj)
// }

// freqNum(1223334444);
// freqNum(1441)

//- 06 -------------------- Remove duplicates in a string ---------------------------


// function duplicateChar(str){
//   let newStr = "";
//   let i = 0;
//   while(i<str.length){
//     let char = str[i];
//     if(!newStr.includes(char)){
//       newStr += char
//     }
//     i++
//   }
//   console.log(newStr);
// }
// duplicateChar("Jeevan");
// duplicateChar('programming');


//-- 07 -------------------- find the first non-repeating character --------------------------

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


//-- 08 ------------------- find the first repeating character ---------------------------

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

//- 09 ------------------- Anagram ----------------------------



//- 10 --------------------- count number of words in string --------------------------
// function countWords(str){
//   let words = [];
//   let word = '';

//   for(let char of str){
//     if(char === " "){
//       if(word !== ""){
//         words.push(word)
//         word = ""
//       }
//     }
//     else {
//       word += char;
//     }
//   }
//   if(word !== ""){
//     words.push(word);
//     word = ""
//   }
//   console.log(words.length)
// }
// countWords('  I love  JavaScript and MERN')
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

// let ang = "silentmt"
// function anagram(str) {
//     if (str.length != ang.length)
//         return "not a anagram"
//     for (let i of str) {
//         if (ang.includes(i)) {
//             continue
//         }
//         else {

//             return "not a anagram"
//         }
//     }
//     return "anagram"
// }
// console.log(anagram("listen"))

//10.

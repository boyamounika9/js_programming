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






//===============================================================================================
//===============================================================================================




// 1. find the length of a string without length method.
// let string="mounika"
// let length=0;
// for(let i of string){
//     length=length+1
// }
// console.log(length)

//===============================================

//2. Reverse a string
// let string="mounika"
// let Reverse=""
// for(let i=string.length-1;i>=0;i--){
//     Reverse+=string[i]
// }
// console.log(Reverse)

//===============================================


// 3. Check if a string is a palindrome
// let string="mom"
// let Reverse=""
// for(let i=string.length-1;i>=0;i--){
//     Reverse+=string[i]
// }
// if(string===Reverse){
//     console.log("Palindrome")
// }
// else{
//     console.log("not a palindrome")
// }

//===============================================



//4.Count vowels and consonants
// let str="mounika"
// let concount=0;
// let vowcount=0;
// let vowels="aeiouAEIOU"
// for(let i of str){
//     if(vowels.includes(i)){
//         vowcount+=1
//     }
//     else{
//         concount+=1
//     }
// }
// console.log(`vowel count: ${vowcount}`)
// console.log(`consonants count: ${concount}`)

//===============================================


//5.Count the frequency of each character
// let str="jeevankumar"
// let obj={}
// for(let i of str){
//     obj[i]=(obj[i]||0)+1
// }
// console.log(obj);


//===============================================

//6.Remove duplicate characters ."programming" → "progamin"
// let str="programming"
// let newstr=""
// for(let i of str){
//     if(!newstr.includes(i)){
//         newstr+=i
//     }
// }
// console.log(newstr)


//===============================================

//7.Find the first non-repeating character."aabbcdde" → "c"
// function firstnonrepeating(str){
//     let letter={}

//     for(let i of str){
//         letter[i]=(letter[i]||0)+1
//     }

//     for(let i in letter){
//         if(letter[i]==1)
//             return i
//     }
    
// }

// console.log(firstnonrepeating("aabbcdde"))

//===============================================


//8.Find the first repeating character. "abcdbea" → "b"
// function firstnonrepeating(str){
//     let obj={}

//     for(let i of str){
//        obj[i]=(obj[i]||0)+1

//        if(obj[i]>1)
//         return i
//     }

// }

// console.log(firstnonrepeating("abcdbea"))

//===============================================


//9.Check whether two strings are anagrams. "listen", "silent" → true
// function isanagrams(str1,str2){
//     let obj1={}
//     let obj2={}
//     for(let i of str1){
//         obj1[i]=(obj1[i]||0)+1
//     }
//     for(let i of str2){
//         obj2[i]=(obj2[i]||0)+1
//     }

//     let Anagram=true
//     for(let i in obj1){
//         if(obj1[i] !== obj2[i]){
//             Anagram=false
//             break
//         }
//     }

//     if(Anagram && str1.length === str2.length)
//     {
//         return "Anagram"
//     }
//     else{
//         return " not Anagram"

//     }

// }
// console.log(isanagrams("aabb", "abbb"))


//===============================================


//10. Count the number of words in a string // "JavaScript is awesome" → 3

// let str="i love my self"
// let count=1
// for(let i of str){
//     if(i==" ")
//         count+=1
// }
// console.log(count);
//( or )

// let list=str.split(" ")
// let count=list.length
// console.log(count)


//===============================================


//11. Reverse the words in a sentence // "I love JavaScript" // → "JavaScript love I"
// let str= "I love JavaScript"
// let rev=""
// let list=str.split(" ")
// for(let i=list.length-1;i>=0;i--){
//     rev+=list[i]+" "
// }
// console.log(rev)


//===============================================


//12.Find the longest word in a sentence // "I love programming" → "programming"
// let str = "I love programming";

// let words = str.split(" ");
// let longest = "";

// for (let word of words) {
//     if (word.length > longest.length) {
//         longest = word;
//     }
// }

// console.log(longest);


//13.Capitalize the first letter of every word // "hello world" → "Hello World"
// let str = "hello world";
// let result = "";

// for (let i = 0; i < str.length; i++) {

//     if (i === 0 || str[i - 1] === " ") {
//         result += String.fromCharCode(str.charCodeAt(i) - 32);
//     } else {
//         result += str[i];
//     }
// }

// console.log(result);



//14.Check if a string contains only digits // "12345" → true // "123a5" → false
// function isstringcontainsonlydigits(str){
//     for(let i of str){
//         if(i.charCodeAt(0)>=65 && i.charCodeAt(0)<=90 || i.charCodeAt(0)>=97 && i.charCodeAt(0)<=122  ){
//             return false
//         }
//     }
//    return true
// }
// console.log(isstringcontainsonlydigits("123a45"))


//15.Find the most frequent character // "javascript" → "a"

// let str="javascript"
// let obj={}
// let greterfre=0
// let greterchar=""
// for(let i of str){
//     obj[i]=(obj[i]||0)+1

//       if(obj[i]>greterfre){
//         greterchar=i;
//         greterfre=obj[i]
//     }
// }

// console.log(`${greterchar} :${greterfre}`)


//16.Remove spaces from a string // "hello world js" → "helloworldjs"
// let str = "hello world js";
// let newstr = "";

// for (let i of str) {
//     if (i !== " ") {
//         newstr += i;
//     }
// }

// console.log(newstr);

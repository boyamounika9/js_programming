let str1="abcdefa"
let str2='abcdef'
let str3=`abcdef`

//accesing
console.log(str1[0])
console.log(str1.charAt(0))
console.log(str1.at(-1))

//it gives the index of first occurence of given number
console.log(str1.indexOf("a"))

//it gives the index of last occurence of given number
console.log(str1.lastIndexOf("a"))


//it checks whether the charecter is present or not
console.log(str1.includes("a"))


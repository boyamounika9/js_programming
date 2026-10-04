let str1="abcdefa"
let str2='abcdef'
let str3=`abcdef`

//accesing (we can access in ways)
console.log(str1[0])
console.log(str1.charAt(0))
console.log(str1.at(-1))

//it gives the index of first occurence of given number
console.log(str1.indexOf("a"))


//it gives the index of last occurence of given number
console.log(str1.lastIndexOf("a"))


//it checks whether the charecter is present or not
console.log(str1.includes("a"))


//it checks whether the string strats with given charects or not
console.log(str1.startsWith("ab"));


//it checks whether the string ends with given charects or not
console.log(str1.endsWith("fa"))


//it is used to take the part of the string
console.log(str1.slice(0,4))
console.log(str1.slice(-3,-2))
console.log(str1.slice((str1.length)/2, (str1.length)/2+1))

/*
length
chatAt()
at()
indexOf()
lastIndexOf()
substring()
slice()
toUppercase()
toLowercase()
replace()
replaceAll()
concate()
repeate()
trim()
trimEnd()
trimStart()
padEnd()
padStart()
localCompare()
charCodeAt()
string.fromcharCode()
tostring()
split()
startswith()
endswith()
includes()
*/





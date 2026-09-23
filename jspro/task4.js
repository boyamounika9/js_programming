

// // amstrong number

// function amstrong(n){
//     let len=countofdigits(n);
//     let original=n;
//     let sum=0;
//     while(n>0){
//         sum+=(n%10)**len
//         n=Math.floor(n/10)
//     }
//     return original===sum
// }

// let result=amstrong(153);
// console.log(result)



// function countofdigits(n){
//     let count=0;
//     while(n>0){
//         count++
//         n=Math.floor(n/10)
//     }
//     return count
// }



// // 18 .wtjsp to pring all amst num from 1 to 1000
// for(let i=1;i<=1000;i++){

// function amstrong(n){
//     let len=countofdigits(n);
//     let original=n;
//     let sum=0;
//     while(n>0){
//         sum+=(n%10)**len
//         n=Math.floor(n/10)
//     }
//     return original===sum
// }

// let result=amstrong(i);
// if(result)
// {
//     console.log(i)
// }

// function countofdigits(n){
//     let count=0;
//     while(n>0){
//         count++
//         n=Math.floor(n/10)
//     }
//     return count
// }
// }


// // 19. wjsp to check whether the given number is prime or not

// // let n=10
// // let factcount=0;
// // let i=1;
// // while (i<=n){
// //     if(n%i==0){
// //         factcount++
// //     }
// //     i+=1;

// // }
// // if(factcount===2){
// //     console.log("prime number")
// // }
// // else{
// //     console.log("not a prime number")
// // }


// // 20. wjsp to print all prime numbers up to 100


// for(let j=1;j<=100;j++){

//     let n=j
// let factcount=0;
// let i=1;
// while (i<=n){
//     if(n%i==0){
//         factcount++
//     }
//     i+=1;

// }
// if(factcount===2){
//     console.log(j)
// }

// }



// // 21. wjspro to print fibinacci series up to n terms 

// let n=5

// let a = 0;
// let b = 1;
// let j = 0;

// while (i < n) {
//     console.log(a);

//     let c = a + b;
//     a = b;
//     b = c;

//     j++;
// }

// // 22 .perfect number
// // let number=6;
// // let sum=0
// // let i=1;
// // while(i<number){
// //     if(number%i==0){
// //         sum+=i
// //     }
// //     i++;
// // }

// // if(number===sum){
// //     console.log("it is a perfect number")
// // }
// // else{
// //     console.log("not a perfect number")
// // }


// // 23 .perfect numbers from 1 to 100

// for (let j=1;j<=1000;j++){
// let number=j;
// let sum=0
// let i=1;
// while(i<number){
//     if(number%i==0){
//         sum+=i
//     }
//     i++;
// }

// if(j===sum){
//     console.log(j)
// }


// }

// // 24. prinmt all factors

// function fact(n){

// for(i=1;i<=n;i++){
//     if(n%i==0){
//         console.log(i)
//     }
// }
// }

// fact(12)

// // 25. number of factors to the given nimber

// function numfact(n) {
//     let count = 0;
//     for (i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             count++
//         }
//     }
//     console.log(count)
// }

// numfact(12)

// // 26. sum of factors of a given number

// function sumfact(n) {
//     let sum = 0;
//     for (i = 1; i <= n; i++) {
//         if (n % i == 0) {
//             sum+=i
//         }
//     }
//     console.log(sum)
// }

// sumfact(12)


// // 27. HCF/GCD of two numbers


// function GCD(a, b) {
//     let arr1 = [];
//     let arr2 = [];

//     for (i = 1; i <= a; i++) {
//         if (a % i == 0) {
//             arr1.push(i)
//         }
//     }

//     for (j = 1; j <= b; j++) {
//         if (b % j == 0) {
//             arr2.push(j)
//         }
//     }


//     let common = arr1.filter((ele)=>{
//         if(arr2.includes(ele)){
//             return ele
//         }
//     })
//     console.log(common[common.length-1])

// }

// GCD(12,18)


//=======================


// function gcd(a, b) {
//     let gcd = 1;

//     for (let i = 1; i <= a && i <= b; i++) {
//         if (a % i === 0 && b % i === 0) {
//             gcd = i;
//         }
//     }

//     return gcd;
// }

// console.log(gcd(12, 18));

//=======================



// let a1=12;
// let b1=18;

// while(b1!==0){
//     let rem =a1%b1;
//     a1=b1;
//     b1=rem;
// }
// console.log(a1)


//=======================

// // 28. LCM of two numbers

// function LCM(a, b) {
//     let max;

//     if (a > b) {
//         max = a;
//     } else {
//         max = b;
//     }

//     while (true) {
//         if (max % a == 0 && max % b == 0) {
//             console.log(max);
//             break;
//         }

//         max++;
//     }
// }

// LCM(12, 18);

//=======================


// let a=12;
// let b=18;
// let lcm=a;
// while (lcm%b!==0){
//     lcm+=a
// }
// console.log(lcm)


//=======================

// // 29. larges digit in given number

// function large(n){
//     let larger=0;

//    while(n!=0){
//     let digit=n%10
//     if(digit>larger){
//         larger=digit
//     }
//     n=Math.floor(n/10)
//    }

//    console.log(larger)
// }
// large(3489546)


// // 30. smallest digit present in the give number

// function small(n){
//     let smaller=9;

//    while(n!=0){
//     let digit=n%10
//     if(digit<smaller){
//         smaller=digit
//     }
//     n=Math.floor(n/10)
//    }

//    console.log(smaller)
// }
// small(13489546)


// // 31 . sum of even numbers present in given number

// function evensum(n){
//     let evendigitsum=0;

//    while(n!=0){
//     let digit=n%10
//     if(digit%2==0){
//         evendigitsum+=digit
//     }
//     n=Math.floor(n/10)
//    }

//    console.log(evendigitsum)
// }
// evensum(1348)

// // 32 . sum of odd numbers present in given number

// function oddsum(n){
//     let odddigitsum=0;

//    while(n!=0){
//     let digit=n%10
//     if(digit%2!=0){
//         odddigitsum+=digit
//     }
//     n=Math.floor(n/10)
//    }

//    console.log(odddigitsum)
// }
// oddsum(1348)


//occurance of number

// let number=273452
// let digits=2
// count=0

// while(number!=0){
//     let digit=number%10;
//     if(digit==digits){
//         count++
//     }

//     number=Math.floor(number/10)



// }
// console.log(count)


//frequency of number



function frequency(n){
    let obj={}
    while(n>0){
        let digit=n%10
        obj[digit]=(obj[digit] || 0)+1

        n=Math.floor(n/10)
    }
    console.log(obj)
}

frequency(77677645327908)

//35
// function dupli(n){
// let obj = {}
// while (n > 0) {
//     let digit = n % 10
//     obj[digit] = (obj[digit] || 0) + 1

//     n = Math.floor(n / 10)
// }


// let res=[]
// for (let key in obj) {
//     if (obj[key] > 1){
//          res.push(key)
//     }
       
// }
//  if(res.length>0){
//     console.log(res)
//    }
//    else{
//     console.log(null)
//    }

// }
// dupli(1234)


//36

// let number=10067
// let arr=[]
// while(number!=0){
//     let digit=number%10
//     if(digit!=0){
//         arr.push(digit)
//     }
//     number=Math.floor(number/10)
// }
// console.log(arr.reverse().join(""))


//37. 
// let number =6723476
// let obj={}
// while(number!=0){
//     let digit =number%10
//     obj[digit]=(obj[digit] || 0) + 1
//     number=Math.floor(number/10)
// }
// console.log(Object.keys(obj).join(""))

// let result = "";

// for (let i = 0; i <= 9; i++) {
//     if (obj[i]) {
//         result = result + i;
//     }
// }

// console.log(result);

//38

// let number = 1479;

// let ascending = true;

// let previous = number % 10;
// number = Math.floor(number / 10);

// while (number != 0) {
//     let current = number % 10;

//     if (current >= previous) {
//         ascending = false;
//         break;
//     }

//     previous = current;
//     number = Math.floor(number / 10);
// }

// if (ascending) {
//     console.log("Ascending order");
// } else {
//     console.log("Not ascending order");
// }



//39

// let number = 988976433235;

// let ascending = true;

// let previous = number % 10;
// number = Math.floor(number / 10);

// while (number != 0) {
//     let current = number % 10;

//     if (current <= previous) {
//         ascending = false;
//         break;
//     }

//     previous = current;
//     number = Math.floor(number / 10);
// }

// if (ascending) {
//     console.log("decending order");
// } else {
//     console.log("Not decending order");
// }


//40
// let num=145
// let copy=num;
// let sum=0;
// while(num!=0){
//     let digit=num%10
//     let fact=1;
//     for(let i=1;i<=digit;i++){

//             fact=fact*i      
//     }
//      sum+=fact
//     num=Math.floor(num/10)
// }
// if(sum==copy){
//     console.log("yes")
// }


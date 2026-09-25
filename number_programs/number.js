//Write a JS program to print 1-100 numbers using loops
// for(let i=1;i<=100;i++){
//     console.log(i)
// }

//Write a JS program to print the sum of numbers from 1-10 using loops
// let sum=0;
//  for(let i=1;i<=100;i++){
//     sum+=i
// }
// console.log(sum)

// Write a JS program to check a given number even or odd.

// function evenodd(n){
//     if(n%2==0){
//         console.log("even")
//     }
//     else console.log("odd")
// }
// evenodd(3)

// Write a JS program to print first n even numbers .

// function neven(n){
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             console.log(i)
//         }
//     }
// }
// neven(10)

// Write a JS program to print first n odd numbers.

// function neven(n){
//     for(let i=1;i<=n;i++){
//         if(i%2!=0){
//             console.log(i)
//         }
//     }
// }
// neven(10)


// Write a JS program to print sum of the first n even numbers

// function neven(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         if(i%2==0){
//             sum+=i
//         }
//     }
//     console.log(sum)
// }
// neven(10)

// Write a JS program to print sum of the first n odd numbers

// function neven(n){
//     let sum=0;
//     for(let i=1;i<=n;i++){
//         if(i%2!=0){
//             sum+=i
//         }
//     }
//     console.log(sum)
// }
// neven(10)

// Write the JS program to count the no of digits present in a given number

// let num=1234
// let count=0;
// while(num!=0){
//     let digit=num%10;
//     count++
//     num=Math.floor(num/10)
// }
// console.log(count)

// Write a JS program to check how many even and odd digits present in a given number

// Write a JS program to print sum of each digit in a given number.

// let num=1234
// let sum=0
// while(num!=0){
//     let digit=num%10;
//     sum+=digit
//     num=Math.floor(num/10)
// }
// console.log(sum)


// Write a JS program to reverse a number.
// let n=1234;
// let reverse=0
// while(n!=0){
//     let digit=n%10;
//     reverse=reverse*10+digit
//     n=Math.floor(n/10)
// }
// console.log(reverse)

// Write a JS program to find largest of two numbers

// let a=17;
// let b=15;
// if( a>b) {
//     console.log(a+ "is grester")
// }
// else{
//     console.log(b+ "is grester")
// }

// Write a JS program to find largest of three numbers

// let a=30;
// let b=85;
// let c=20;
// if(a>b&&a>c){
//     console.log(a)
// }
// else if(b>a&&b>c){
//     console.log(b)

// }
// else console.log(c)

// Write a JS program to check weather a number is positive , negative or zero

// let n=0;
// if(n>0){
//     console.log("positive")
// }
// else if(n<0){
//     console.log("negative")
// }
// else console.log("Zero");


// Write a JS program to print factorial of a number.

// let num=5
// let fact=1;
// for(let i=1;i<=num;i++){
//     fact*=i
// }
// console.log(fact)

// Write a JS program to check whether a given number is a palindrome or not. • 121-true , 134-false

// let n=121;
// let copy=n;
// let reverse=0
// while(n!=0){
//     let digit=n%10;
//     reverse=reverse*10+digit
//     n=Math.floor(n/10)
// }
// if(reverse==copy)
//     console.log("palindrome")
// else console.log("not a palindrome")

// Write a JS program to check whether a given number is an Armstrong number or not. • a number that equals the sum of its own digits, where each digit is raised to the power of the total number of digits • 153------13 + 53 + 3**3===153

// let num=153;
// let copy1=num;
// let copy2=num;
// let sum=0;
// let count=0;
// while(num>0){
//     let last=num%10;
//     count+=1;
//     num=Math.floor(num/10)
// }
// while(copy1!=0){
//      let digit=copy1%10;
//      sum+=digit**count
//     copy1=Math.floor(copy1/10)
// }
// if(copy2===sum){
//     console.log(" Armstrong number ")
// }
// else console.log("not  Armstrong number ");


// Write a JS program to print all Armstrong numbers from 1 to 1000.

// function ams(n) {

//     for (let i = 1; i <= n; i++) {

//         let copy1 = i;
//         let copy2 = i;

//         let sum = 0;
//         let count = 0;

//         // Count digits
//         while (copy1 > 0) {
//             let last = copy1 % 10;
//             count += 1;
//             copy1 = Math.floor(copy1 / 10);
//         }

//         // Calculate Armstrong sum
//         copy1 = i;

//         while (copy1 != 0) {
//             let digit = copy1 % 10;
//             sum += digit ** count;
//             copy1 = Math.floor(copy1 / 10);
//         }

//         if (copy2 === sum) {
//             console.log(copy2);
//         }
//     }
// }

// ams(1000);

// Write a JS program to check whether a given number is a prime number or not.

// let num=7;
// let factcount=0;
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         factcount+=1
//     }
// }
// if(factcount===2)
//     console.log("prime")

// Write a JS program to print all prime numbers from 1 to 100.

// function prime(n) {
//     for(let i=1;i<=n;i++){
//     let factcount = 0;
//     for (let j = 1; j <= i; j++) {
//         if (i % j == 0) {
//             factcount += 1
//         }
//     }
//     if (factcount === 2)
//         console.log(i)

//     }
// }
// prime(100)

// Write a JS program to print the Fibonacci series up to n terms.

// let n=5;
// let a = 0;
// let b = 1;
// let j = 0;

// while (j < n) {
//     console.log(a);

//     let c = a + b;
//     a = b;
//     b = c;

//     j++;
// }

// Write a JS program to check whether a given number is a perfect number or not. • a positive whole number that equals the sum of its proper positive divisors, excluding the number itself • 6-------1+2+3===6

// let num=6;
// let sum=0;
// for(let i=1;i<num;i++){
//     if(num%i==0)
//         sum+=i
// }
// if(sum==num)
//     console.log("perfect")

// Write a JS program to print all perfect numbers from 1 to 1000.

// let num=1000
// for(let j=1;j<=num;j++){
// let sum=0;
// for(let i=1;i<j;i++){
//     if(j%i==0)
//         sum+=i
// }
// if(sum==j)
//     console.log(j)

// }

// Write a JS program to print all factors of a given number.

// let num=10;
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         console.log(i)
//     }
// }

// Write a JS program to count the number of factors of a given number.

// let num=10;
// count=0;
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         count++
//     }
// }
// console.log(count)

// Write a JS program to find the sum of all factors of a given number.

// let num=10;
// sum=0;
// for(let i=1;i<=num;i++){
//     if(num%i==0){
//         sum+=i
//     }
// }
// console.log(sum)

// Write a JS program to find the GCD/HCF of two numbers.

// let a1=12;
// let b1=18;

// while(b1!==0){
//     let rem =a1%b1;
//     a1=b1;
//     b1=rem;
// }
// console.log(a1)

// Write a JS program to find the LCM of two numbers.


// let a=12;
// let b=18;
// let lcm=a;
// while (lcm%b!==0){
//     lcm+=a
// }
// console.log(lcm)

// Write a JS program to find the largest digit present in a given number.

// let number=654
// let large=0;
// while(number!=0){
//     let digit=number%10
//     if(large<digit){
//         large=digit
//     }
//     number=Math.floor(number/10)
// }
// console.log(large)

// Write a JS program to find the smallest digit present in a given number.

// let number=654
// let large=9;
// while(number!=0){
//     let digit=number%10
//     if(large>digit){
//         large=digit
//     }
//     number=Math.floor(number/10)
// }
// console.log(large)
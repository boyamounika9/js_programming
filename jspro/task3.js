//palindrom programme

// let n=121;
// let dummy=n;
// let rev=0;
// while(n>0){
//     let digit=n%10;
//     rev=rev*10+digit;
//     n=Math.floor(n/10);
// }
// if(dummy===rev){
//  console.log(true);
// }
// else{
//    console.log(false);
// }


//wajsp to find first n 3 digit palindrom numbers.

// function firstPalindrom(n){
//     let rev=0;
//     let dummy=n;
//     while(n>0){
//         rev=rev*10+n%10;
//         n=Math.floor(n/10)
//     }
//      return rev===dummy;
// }
// let values=[]
// let i=100;
// let num=5;
// while(values.length<num){
//     if(firstPalindrom(i)){
//         values.push(i);
//     }
//     i++;
// }
// console.log(values);
// firstPalindrom();


//wajsp to get a factorial of a number

// function findFactorial(n){
//      let fact=1;
//      for(let i=n;i>=1;i--){
//          fact*=i;
//      }
//     console.log(fact);
// }
// findFactorial(4);


//7*1=7
// 7*2=14
// 7*3=21
// 7*4=28
// 7*5=35
// 7*6=42
// 7*7=49
// 7*8=56
// 7*9=63
// 7*10=70

// function table(n) {
//     let res = 1;

//     for (let i = 1; i <= 10; i++) {
//         res = n * i;
//         console.log(n + "*" + i + "=" + res);
//     }
// }
// table(7);



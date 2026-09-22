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




//amstrong number

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



//18 .wtjsp to pring all amst num from 1 to 1000
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


//19. wjsp to check whether the given number is prime or not

// let n=10
// let factcount=0;
// let i=1;
// while (i<=n){
//     if(n%i==0){
//         factcount++
//     }
//     i+=1;
   
// }
// if(factcount===2){
//     console.log("prime number")
// }
// else{
//     console.log("not a prime number")
// }


//20. wjsp to print all prime numbers up to 100


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



//21. wjspro to print fibinacci series up to n terms 

// let n=5

// let a = 0;
// let b = 1;
// let i = 0;

// while (i < n) {
//     console.log(a);

//     let c = a + b;
//     a = b;
//     b = c;

//     i++;
// }

//perfect number
let number=6;
let sum=0
let i=1;
while(i<number){
    if(number%i==0){
        sum+=i
    }
    i++;
}

if(number===sum){
    console.log("it is a perfect number")
}
else{
    console.log("not a perfect number")
}


//perfect numbers from 1 to 100

for (let j=1;j<=1000;j++){
let number=j;
let sum=0
let i=1;
while(i<number){
    if(number%i==0){
        sum+=i
    }
    i++;
}

if(j===sum){
    console.log(j)
}


}

//24. all factors

function factors(n){

    

}
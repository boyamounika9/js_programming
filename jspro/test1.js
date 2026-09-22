//write a js program to ckeck how many digits are presdent in a give number 

// let num=892;
// count=0;

// while(num!=0){
//     let digit=num%10;
//     num=Math.floor(num/10)
//     count+=1
// }
// console.log(count)

//write a js program to print each digit from a given number


// let num2=892;
// while(num2!=0){
//     let digit=num2%10;
//     console.log(digit)
//     num2=Math.floor(num2/10)  
// }


//write a js program to reverse a number wtout using inbuilt method"

// let num3=892;
// let reverse=0
// while(num3!=0){
//     let digit=num3%10;
//     reverse=reverse*10+digit
//     num3=Math.floor(num3/10)  
// }

// console.log(reverse)


//write a js program to sum of all digits in a given number


// let num4=825;
// let sum=0
// while(num4!=0){
//     let digit=num4%10;
//     sum+=digit
//     num4=Math.floor(num4/10)  
// }

// console.log(sum)

//write a js program to count how many even digits and hoe many odd digits  in a given number

// let num5=825;
// let even=0, odd= 0;
// while(num5!=0){
//     let digit=num5%10;
//     if (digit%2==0){ even+=1}
       
//     else {odd+=1}
  
//     num5=Math.floor(num5/10) 
    
   
// }

// console.log(`even digits: ${even}`)
// console.log(`odd digits: ${odd}`)


//wjsp to find sum of the sqare of the each digits of a given number 

// let num6=145;
// let sum=0
// while(num6!=0){
//     let digit=num6%10;
//     sum+=digit**2
//     num6=Math.floor(num6/10)  
// }

// console.log(sum)


//wjsp to count how many zeros present in a given number

// let num7=8090020;
// count=0;

// while(num7!=0){
//     let digit=num7%10;
//     if(digit==0){
//         count+=1
//     }
//     num7=Math.floor(num7/10)
   
// }
// console.log(count)


//how many 9s present from 1 to 100

let count = 0;

for (let i = 1; i <= 100; i++) {
    let num = i;

    while (num != 0) {
        let digit = num % 10;

        if (digit == 9) {
            count++;
        }

        num = Math.floor(num / 10);
    }
}

console.log(count);

// wap of a even number 

function isEvenodd(n){
if(n % 2==0){
    console.log(`${n} is a even number`);

}
else{
    console.log(`${n} is a odd number`);
    
}
}
isEvenodd(2);

// wap to rint sqaure of a given number 

function square(n){
   return n**2
}
console.log(square(10));


// first n even numbers 

function evennumbers(n){
    let arr=[]
    let num=1;
    let sum=0;
     while(arr.length<n){
        if(num %2==0){
            arr.push(num)
            sum+=num
        }
        num++;
     }
     console.log(arr);
     console.log(sum);
     
     
}
evennumbers(5);

// sum of n even number .

function sumOfNEven(n){
    let sum=0
    let count=0
    let i=1
    while(count<n){
        if(i%2===0){
            sum+=i
            count++
        }
        i++;
    }
    // console.log(i); why its giving 11
    
    console.log(sum);
    
}sumOfNEven(5)

// without using modulous can we print even numbers 



// find the biggest number from two numbers 

function biggest(a,b,c){
   if(a>b && a>c){
    console.log("a is biggest");
    
   }
   else if ( b > c){
    console.log("b is greatter");
    
   }
   else{
    console.log("c is greatter");
}
}
// biggest(10,20,30);
biggest(10,30,20);


// find the 2nd largest number   (home work )
// function seclargest(a,b,c){

//     (a>b || b>c)? 

// }seclargest(20,10,30)


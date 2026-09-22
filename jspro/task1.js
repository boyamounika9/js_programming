//write a js program to ckeck how many digits are presdent in a give number 

let num=89;

count=0;

while(num!=0){
    digit=num%10;
    count+=1
    num=Math.trunc(num/10)
}
console.log(count)
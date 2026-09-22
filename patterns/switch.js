let arr=[10,20];
let [x,y]=[...arr];
console.log(`value of x is :${x} , value of y is:${y}`);
    [y,x] = [x,y];
console.log(`value of x is :${x} , value of y is:${y}`);

let arr = [10, 25, 15, 40, 30];

let largest = 0;
let secondLargest = 0;

arr.forEach((num) => {
    if (num > largest) {
        secondLargest = largest;
        largest = num;
    } else if (num > secondLargest && num !== largest) {
        secondLargest = num;
    }
});

console.log("Largest:", largest);
console.log("Second Largest:", secondLargest);
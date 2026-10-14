let m1=new Map()

//to add elements
m1.set(1,"mouni")
m1.set(2,"jeevan")

//to get elements

console.log(m1.get(2))

//to delete elements

m1.delete(1)

//to check where the ele is present or not
console.log(m1.has(1))

//to find the size

console.log(m1.size)

//to clear entire map
m1.clear()

console.log(m1)


//find the longest substring length

// function longest_substring_length(str){
//     let left=0;
//     let maxlength=0;
//     let set=new Set();
//     for(let right=0;right<str.length;right++){
//         while(set.has(str[right])){
//             set.delete(str[left])
//             left++
//         }
//         set.add(str[right])

//         let length=right-left+1
//         maxlength=Math.max(maxlength,length)
//     }

//     console.log(maxlength)
// }
// longest_substring_length("abcabcbb")



//find the longest substring

function longest_substring_length(str){
    let left=0;
    let start=0;
    let maxlength=0;
    let set=new Set();
    for(let right=0;right<str.length;right++){
        while(set.has(str[right])){
            set.delete(str[left])
            left++
        }
        set.add(str[right])
        let length=right-left+1

        if(length>maxlength){
            maxlength=length
            start=left
        }
    }

   return str.slice(start,start+maxlength)
}
console.log(longest_substring_length("abcabcbb"))
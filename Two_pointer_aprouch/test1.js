// ====== 1. write js program to find duplicate elements in a given array ==========

// let array =[1,2,3,4,1,2]
// let obj={}
// for(let i of array){
//     obj[i]=(obj[i]||0)+1
//     if(obj[i]>1)
//         console.log(i)
// }

//============================
// let duplicate=[]
// for(let i=0;i<=array.length-1;i++){
//     for(let j=i+1;j<=array.length-1;j++){
//         if(array[i]==array[j]){
//             if(!duplicate.includes(array[i]))
//             duplicate.push(array[i])
//         }
//     }

// }
// console.log(duplicate)


// ========== TWO SUM =========================
// let target=14
// let array=[1,2,4,6,13,7]
// for(let i=0;i<=array.length-1;i++){
//     for(let j=i+1;j<=array.length-1;j++){
//         if(array[i]+array[j]==target){
//            console.log(array[i],array[j])
//         }
//     }

// }

// ============= remove duplicate ==================

// let array = [1, 2, 3, 1, 2]
// let duplicate = []
// for (let i = 0; i <= array.length - 1; i++) {

//     if (!duplicate.includes(array[i])) {
//         duplicate.push(array[i])
//     }

// }
// console.log(duplicate)

//=================== Passsword Validation =====================
function chechstring(str){
    if(str.length<8){
        return "lenght should be 8 char"
    }
    let obj={ up:false, low:false,digit:false, spe:false}
   for(let i of str){
        if((i.charCodeAt(0)>=65 && i.charCodeAt(0)<=90) ){
            obj.up=true
        }
        else if((i.charCodeAt(0)>=92  && i.charCodeAt(0)<=122)){
            obj.low=true
        }
        else if(i<Infinity && i>-Infinity){
            obj.digit=true
        }
        else{
            obj.spe=true
        }
    }

  for(let i in obj){
    if(obj[i]==false){
        return `${i} needed`
    }
  }

  return "succes"
   
}
console.log(chechstring("abhgBvghv"))
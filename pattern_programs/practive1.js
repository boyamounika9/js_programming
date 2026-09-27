//  * 
//  * * 
//  * * * 
//  * * * * 
//  * * * * * 

// let n=5;
// for(let i=1;i<=n;i++){
//     let row=" ";
//     for(let j=1;j<=i;j++){
//         row+="* "
//     }
//     console.log(row)
// }



//  * * * * * 
//   * * * * 
//    * * * 
//     * * 
//      * 
// let n=5;
// for(let i=1;i<=n;i++){
//     let row=" ";
//     for(let j=1;j<=n;j++){
//         if(j>=i){
//             row+="* "
//         }
//         else
//             row+=" " // no extra space(onle one space)
//     }
//     console.log(row)
// }



//  * * * * * 
//    * * * * 
//      * * * 
//        * * 
//          *

// let n=5;
// for(let i=1;i<=n;i++){
//     let row=" ";
//     for(let j=1;j<=n;j++){
//         if(j>=i){
//             row+="* "
//         }
//         else
//             row+="  " //  extra space(two space)
//     }
//     console.log(row)
// }



//  * * * * * 
//  * * * * 
//  * * * 
//  * * 
//  * 
// let n=5;
// for(let i=n;i>=1;i--){
//     let row=" "
//     for(let j=1;j<=i;j++){
//         row+="* "
//     }

//     console.log(row)
// }

// let n=5;
// for(let i=1; i<=n; i++){
//     let row = "";
//     for(let j=1; j<=n; j++){
//     i==1 || i==Math.ceil(n/2) || j==1 || j==n ? row += "* " : row +="  "
//     }
//     console.log(row);
// }

// let n=5;
// for(let i=1;i<=n;i++){
//     let row=""
//     for(let j=1;j<=n;j++){
//         if(i==1 || i==n || j==1 || j==n || i==Math.ceil(n/2))
//             row+="* "
//         else
//             row+="  "
//     }
//     console.log(row)
// }


// let n=5;
// for(let i=1; i<=n; i++){
//     let row = "";
//     for(let j=1; j<=n; j++){
//     i==1 || i==n || j==1 ? row += "* " : row +="  "
//     }
//     console.log(row);
// }

let n = 5;
for(let i = 1 ; i<= 2*n-1;i++){
    let row = "";
    for(let j = 1;j <= 2*n-1;j++){
        (i==1  || i==2*n-1 || j==1 || j==2*n-1 || i+j==n+1 || j-i == n-1 || i-j==n-1 || i+j == 3*n-1)? row+="* ": row+="  ";
    }
    console.log(row);
}

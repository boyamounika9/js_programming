 n=5;
 for(let i=1;i<=n;i++){
    let row="";
        for(let j=1;j<=n;j++){
            ((i>=j && i+j<=n+1) || (j>=i && i+j>=n+1))? row+="* " : row+="  "
        }

    
    console.log(row);
    
}
// *       * 
// * *   * * 
// * * * * * 
// * *   * * 
// *       * 
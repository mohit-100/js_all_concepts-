const n = 5;
const  patterns = (n) =>{

 
    for(let i = 0 ; i < n ; i++){
        let row = "" ;
        for(let j =0 ; j < n ; j++){
             if(i >= j   && i +j <= n+1){
              row += '*';
            } else{row += ' ';}
    }
       console.log(row)
}
}

patterns(n);
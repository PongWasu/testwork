function rub(str, chr){
    let str1= str.split("");
    let str2= chr.split("");
    
    for(let i=0; i<str1.length; i++){
        for(let a=0; a<str2.length; a++){
            if(str1[i]==str2[a]){
                str1.splice(i,1);
            }
        }
        
    }
    console.log(str1.join(""));

}
rub ("This is Thailand", "ai");
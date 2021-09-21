function rub(str, chr){
    let str1= str;
    let str2= chr;
    let str3="";
    
    for(let i=0; i<str2.length; i++){
        for(let a=0; a<str1.length; a++){
            if(str1[a]!=str2[i]){
            str3 = str3+str1.charAt(a);
            }
        }
        str1 = str3;
        str3 ="";
    }
    console.log(str1);

}
rub ("This is Thailand", "ai");

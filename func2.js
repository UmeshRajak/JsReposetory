function countvowel(str){

    let count=0;

    for(const chr of str)
    {
        
        if(chr=="a"|| chr=="e"|| chr=="i" || chr=="o" || chr=="u")
        {
            count++;
        }
   
    }
    return(count);
}
 
console.log(countvowel("rajaabhimaniaeiou"));
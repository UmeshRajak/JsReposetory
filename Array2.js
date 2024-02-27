const myarr=[0,1,2,3,4,5];
const myHeros=["Shaktiman", "Naagraj"];
const myarr2= new Array(1,2,3,4);
const newarr= myarr.join();
const newnum =[];
loop:for (const i of myarr) {
     if(i>2)continue loop;{
        newnum.push(i)    
    }   
}
//console.log(newnum); 
const newnum1 =[];
loop:for (const i of myarr) {
    if(i>2)break loop;{
       newnum1.push(i)    
   }   
}
//console.log(newnum1);
const newnum2 =[];
for (const i of myarr) {
    if(i>2) {
        newnum2.push(i)
        
            break; 
        
                   //there is loop break and value not print 
       
   }   
}
//console.log(newnum2);

const newnum3 =[];
for (const i of myarr) {
    if(i>2){
       newnum3.push(i)    
   }   
}
//console.log(newnum3); 

//myarr.pop();        
//myarr.unshift(9);
//myarr.shift();

// console.log(myarr.includes(9));
 //console.log(myarr.indexOf(3));
// console.log(newarr);
// console.log(typeof(newarr));

const mynewarr1 =myarr.slice(1,3);// start with index 1 and go to index 2 but left 3
//console.log(mynewarr1);
//console.log("A =",myarr);

const mynewarr2 =myarr.splice(1,3);// start with index 1 and go to index 2 but left 3
//console.log(mynewarr2);
//console.log("B =",myarr);
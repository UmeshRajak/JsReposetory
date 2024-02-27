//for of
//array of string - [" ", " ", " "]
//array of object - [{},{},{}]

const arr = [100, 200, 300, 400]

 for (const num of arr) {

//     console.log(num);
}
//==================================================================================//
const greetings = "Hello World";
const counter = 0;
for (const greet of greetings) {

    if(greet == " " ) continue; 
    //console.log(`${greet}`) 
    
    //counter=counter+1;
}

//===================================================================================//
const map = new Map()
map.set("IN","INDIA")
map.set("USA","UNITED STATE OF UMERICA")
map.set("FR","FRANCE")
map.set("in","india")
map.set("IN","INDIA")
//console.log(map);  

//==================================================================================//
let val1="";
for (const i of map) {
    val1=i;
    //console.log(val1);
}
//console.log(val1);//not work out side it is work only inside//

//====================================================================================//
let val2="";
for (const i=0; i<map.lenth; i++) { //this for loop not workin on map
    val2=i;
    //console.log(val2);
}
//====================================================================================//
//key destructure
for (const [key,value] of map) {
    //console.log(key,"-",value);
    //console.log(key);
}

for (const [key,value] in map) {  //for in "not work on map"//
    //console.log(key,"-",value);
   // console.log(key);  
}


//for, for of not work with object={} so we use for in




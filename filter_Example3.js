let arr =[10,20,30,40,50,60,70,80,90,100];

const newnum4= arr.map( (item)=>{
    return(item * 2);

} )
//console.log(newnum4);
//====================================================================================//
//Map making Array with new keyword it make key value pair not single value array sor it does not work..
// let map1 = new Map([arr.keys]);
// for (const i of map1) {
//    // const val1=i;
//     console.log(i);
// }

//=====================================================================================//
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

let newIterable = map.entries(map);
for (const i of newIterable) {
    val1=i;
   // console.log(val1);
}

let newArray = Array.from(map)
for (const i of newArray) {
    
   console.log(i);
}
//falsy values : false,0,-0, Bigint, on, "", null, undefind, NaN
//truthy values : "0", "false", " ", [], {}, function(){}


let user = [];
if (user.length == 0) {
    console.log("Array is Empty");
}

const emptyobject = {

}
if (Object.keys(emptyobject).length == 0) {
    console.log("object is empty")
}

//Nullish coalescing operator(??):null undefined

let val1;
//val1 = 5 ?? 10;
//val1 = undefined ?? 10;
val1 = null ?? 10 ?? 20
console.log(val1);


//turnary operator//
const iceTeaprice = 100;
iceTeaprice >= 90 ? console.log("ok"):console.log("not ok");


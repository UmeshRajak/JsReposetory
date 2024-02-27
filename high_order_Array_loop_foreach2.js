const arr = ["apple", "orange", "mango", "banana", "fruty"];

arr.forEach(function (item) {
    //console.log(item);
})

arr.forEach( (item)=>{
    //console.log(item);
} )

function printme(item){
        //console.log(item);
}
arr.forEach(printme);

arr.forEach( (item, index) => {
//console.log(item, index);
//console.log(item.toString());
})

for (let i = 0; i < arr.length; i++) {
    const element = arr[i];
    console.log(element);
}
 

//===========================================================================================//


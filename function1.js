// function calccart(...num){
// return num;
// }

// console.log(calccart(100,200,300,400,500))

const obj={
    name:"umesh",
    number:876
}
func1({
    name:"ram",
    number:345
})

function func1(anyobject){
   
    if(!anyobject){
        console.log("object not define")
    }
    //console.log(anyobject.name);//directb pass obj in function 
    return(anyobject);
}
//console.log(func1());// obj not define and function object not in scope
 const object_key=Object.keys(func1(obj));
 const object_value=Object.values(func1(obj));
 const object_entries=Object.entries(func1(obj));

//console.log(func1(obj));
//console.log(object_entries);
//console.log(object_key);

 const {name:myname}=func1;
// console.log(myname);





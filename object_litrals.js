//by constructor make singleton  object.create
//by litrals make object leterals

const jsUser={
    101 : "umesh"
}

const mysymbol = Symbol("something");

const jsUser1={
    name:"uemsh",
    "fullname":"uemsh kumar",
    age:18,
    email:"uemshrjk2@gmail.com",
    islogin:false,
    lastlogindays:["monday","tuesday"],

    [mysymbol]:"something", // right way to define symbol in object 
    //mysymbol:Symbol("something")//wrong way to define symbole in object result shows in strings
}

// const tinderuser ={};
// tinderuser.id =1;
// tinderuser.name='umesh';
// tinderuser.islogin=false;

// console.log(tinderuser);
                                // or

const obj1 ={ 
    1: "a",
    2:"b"
}
const obj2={
    3:"c",
    4:"d"
 }
const obj3=Object.assign({},obj1,obj2);
 //const obj3={...obj1(obj1[1]),...obj2}
console.log(obj3);
// console.log(jsUser1.age);//access by dot but if object element define in string than access like [""]
// console.log(jsUser1["email"]);
// console.log(jsUser1["fullname"]);
//console.log(typeof mysymbol);
//console.log(jsUser1[mysymbol]);
//console.log(jsUser1.mysymbol);
//console.log(jsUser1);


// Object.freeze(jsUser)
// jsUser[101]="ram";
// console.log(jsUser);


jsUser1.greeting = function(){
    console.log("hello umesh");
}
console.log(jsUser1.greeting())

jsUser1.greeting2 = function(){
    console.log(`hello user: ${this.email}`);
}
console.log(jsUser1.greeting2())












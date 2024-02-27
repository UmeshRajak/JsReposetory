function myfunc1(){
    console.log("hi");
}

function myfunc2(){
    console.log("hello");
}


function myfunc(val1,val2,callback){

    console.log(val1+val2);
    callback();
}

myfunc(11,22,myfunc1);
myfunc(13,22,myfunc2);
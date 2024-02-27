const mynum=[100,200,300,400,500];


const newnums = mynum.filter(  (item)=>{

    return item;
})

//console.log(newnums);

const newnums2 = mynum.filter(  (item)=>{

    return item>300;
})

//console.log(newnums2);


const newnum3 = [];
mynum.forEach( (item)=>{
    if(item>200){
        newnum3.push(item);
    }
} )
//console.log(newnum3);







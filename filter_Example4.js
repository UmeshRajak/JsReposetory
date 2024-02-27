let arr =[10,20,30,40,50,60,70,80,90,100];

const some = arr.filter(  (item)=>{
    return item>10 && item<30;
})
//console.log(some.toString());
//==================================================================//

const something= arr.map( (item)=>{
        return item;

} )

console.log(something);
//========================================================================//

const somenew = arr.map( (item)=>item*10  )
                    .map( (item)=>item + 1)
                    .filter((item)=>item>501)

console.log(somenew);



//not work===========================//
// const something = arr.map([arr]);
// for (const iterator of something) {
//     return iterator;
    
// }
// console.log(something);
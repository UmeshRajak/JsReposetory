const arr =[1,2,3,4]

const something = arr.reduce( (acc, carvalue)=>{

    console.log(`Accumulator=${acc} and Current Value =${carvalue}`);

    return acc + carvalue;
},0 )

console.log(something);



const shopingcart = [
    {
        course : "js",
        price : 1000
    },
    {
        course : "c",
        price : 1000
    },{
        course : "c++",
        price : 1000
    },{
        course : "java",
        price : 1000
    }]

    const somethingnew= shopingcart.reduce( (acc,curval) => {
        return acc + curval.price;

    },0 )

    console.log(somethingnew);

let marks = [60,70,80,90,100,89];
let sum=0;

for(let val of marks)
{
    sum+=val;
}
let avg = sum/marks.length;
//alert(avg);


let obj={
    name: "umesh",
    class: 10,
    sec:"b",
}

let obj1=[100,150,200,300,350,230,500,600]
let i=0;
for(let val of obj1)
{
    //console.log(`${i}`,`${val*90/100}`,i++)

}

let items=[100,150,200,300,350,230,500,600]
for(let k = 0; k<items.length; k++)
{
    //items[k] -= items[k]/10;
    items[k] += items[k]/10;
    
}
//console.log(`offer value of this product is ${items[0]} " " ${items[1]}" "${items[2]}" "${items[3]}`);



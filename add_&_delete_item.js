let fooditem =["patato","tamato","apple","chili","carrot"];
fooditem.push("onion","chips");
console.log(fooditem);

let deleteitem=fooditem.pop();
console.log(deleteitem);
console.log(fooditem.toString());


let marval_heros=["batman","superman","thor"]

let supehero=["shaktiman","bhaktiman","andmaan","nikobar"]

console.log(marval_heros.concat(supehero));

marval_heros.unshift("antman");
console.log(marval_heros);

let new_marval=marval_heros.shift();

console.log(new_marval);

console.log(marval_heros.slice(1,3));// inde o to 2 nikal dega 
fooditem.splice(2,0,"ram");//add ram in index 2 and 0 means no item delete.

console.log(fooditem);

fooditem.splice(3,1);//delete 1 item on index 3 
console.log(fooditem);


fooditem.splice(1);//delete 1 item on index 1
console.log(fooditem);


let devidenumber = (1/0);
console.log(devidenumber);

let myself ={
                myname: 'tom'
                    ,age : 32
                ,add :'delhi'

}
for(var self in myself)
{
    console.log(`${myself[self]}`);
    alert(`${myself[self]}`);
}



    
    

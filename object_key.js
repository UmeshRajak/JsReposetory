const tinder={
        id:101,
        name:"ram",
        email:"ram@gmail.com",
        mobile:95844338981
}

//console.log(tinder.email);
const tinder_key=Object.keys(tinder);
const tinder_value=Object.values(tinder);
const tinder_entries=Object.entries(tinder);

//console.log(tinder.hasOwnProperty("id"));

console.log(tinder_entries);

// for(const i of tinder_entries)
// {
//     let some=(i[0]);
//     console.log(some);
// }

for(let k = 0; k<tinder_entries.length; k++)
{
   
   // console.log(`${tinder_entries.toString()}`);
    
}
//console.log(`${tinder_entries.toString()}`);

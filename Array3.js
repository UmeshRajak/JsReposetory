const marvalHeros=["thor", "Ironman", "spiderman"];
const dc_heros=["superman","flash","batman"];

marvalHeros.push(dc_heros);
// console.log(marvalHeros);
// console.log(marvalHeros[3][1]);//0-thor,1-Ironmen,2-spiderman,3-dc_heros,[3][0]-superman,[3][1]-flash,[3][2]-batman


const anotherarr=[...marvalHeros,...dc_heros];
// console.log(anotherarr);

 const myarr=[1,2,3,[1,2,3,[1,2,3]]];
 let realmyarr= myarr.flat(Infinity);
// console.log("All ArrayMembers =",realmyarr);

// console.log(Array.isArray(marvalHeros));
// console.log(Array.isArray(dc_heros));

let fromarr = Array.from(marvalHeros);
// console.log(fromarr);


//console.log(Array.from({name:"umesh"})); 

// please read -isarray and from and of 

let score1= 100;
let score2= 200;
let score3= 300;

//console.log(Array.of(score1,score2,score3));
//console.log(Array.from(score1,score2,score3));//wrong

//console.log(Array.from(ram));


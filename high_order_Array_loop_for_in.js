//*USE FOR IN FOR OBJECT *// its dirrect work on object

const game ={
    cr:"cricket",
    bl:"Bolibol",
    kb:"Kabaddi"
}

//==============================================================================//
    //for in is direct work on object  
    for (const keys in game) {   
        //console.log(keys);     
    }
    for (const values in game) {   
        //console.log(game[values]);
    }
//=============================================================================//
//shorcut 
for (const key in game) {
    if (game.hasOwnProperty.call(game, key)) {
        //console.log(game.hasOwnProperty(key));
        const element = game[key];
        const keys = key;
        //console.log(`${game[key]} `);
        //console.log(`only keys =${keys}`);
        //console.log(`only element is = ${element}`);
            
    }
}

//console.log(`${game.cr}`);
//=============================*Object Convert In Array========================================//

const object_key=Object.keys(game);
//console.log(object_key);                  //return Array of key
//console.log(`${object_key}`)              //return key in horizontol order in the form of string 
//console.log(object_key[0],object_key[2]);

//===============================*than for of use for Array*========================================//   
for (const keys of object_key) {
       
    //console.log(keys);                     //return key in Vertucal order in the form of string
       //console.log(object_key[keys])//<======this will not work here no need
}

//=============================*Object Convert In Array========================================//
const object_value=Object.values(game);
//console.log(object_value);
//console.log(`${object_value}`)
//console.log(object_value[0],object_value[2]);  

//===============================*than for of use for Array*========================================//
    for (const values of object_value) {
    
        //console.log(values);
        //console.log(object_value[values])//<======this will not work here no need
}
    
//=======================================================================//

//Lets try 'FOR IN' Loop on object_key VARIABLE // THERE IS ARRAY IN OBJECT_KEY VARIABLE

for (const keys in object_key) {
    
    //console.log(keys); //return index 
    
    //console.log(object_key[keys])
}
for (const values in object_value) {

    console.log(values); //return index 
   //console.log(object_value[values])
   
}


//NOTE:- First of all convert object key and object value in Array by object.key(object)
// for_in => Return index of key of Array but return array value
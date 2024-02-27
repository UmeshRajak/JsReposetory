const arr = ["apple", "orange", "mango", "banana", "fruty"];

arr.forEach(function (item) {
    //console.log(item);
})

arr.forEach( (item)=>{
   // console.log(item);
} )

//===========================================================================================//

const game = {
    cr: "cricket",
    bl: "Bolibol",
    kb: "Kabaddi"
}

const object_entries = Object.entries(game);
//console.log(object_entries[0][0]);
//=====================================================================//
const object_key = Object.keys(game);
//console.log(object_key[0]);
//=======================================================================//

object_key.forEach(function (item) {
    //console.log(item);
})

//=====> funcion <=======//
object_key.forEach((item) => {
    //console.log(item);
})

//====================================================================//  
const object_value = Object.values(game);
//console.log(object_value[0]);
//==========================================================================//

object_value.forEach(function (item) {
    // console.log(item)

})

//=====> Arrow funcion <=======//
object_value.forEach((item) => {
    //console.log(item)
})

//============================*Arrow funcion*===========================================//
object_key.forEach( (item) => {

    //console.log(item);
 } )
let guess_num = 3;
let argument_num = 4;
let rendum_num = prompt("!Enter");



do {

    if(rendum_num == argument_num){
        console.log(argument_num+"is right");
        alert(argument_num+"is right");
    }
    else{
        rendum_num = prompt("!Enter");
    }
    
    
} while (rendum_num != argument_num);



while(rendum_num != guess_num)
{
    rendum_num = prompt("!Wrong Enter ");
    if(rendum_num == guess_num){
        console.log(rendum_num+"is right");
        alert(rendum_num+"is right");
    }
}


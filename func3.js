// let age = prompt('How old are you?', 18);

// if ( checkAge(age)>18 ) {
//   alert( 'Access granted' );
// } else {
//   alert( 'Access denied' );
// }


 
function showPrimes(num) {
    
    nextPrime: for (let i = 2; i < num; i++)
     {
  
      for (let j = 2; j < i; j++) {
        console.log("j ="+ j  );
        if (i % j == 0)  continue nextPrime;
      }
      
      console.log("i ="+ i  ); // a prime
      document.write("Prime number is ="+" "+ i +" , "  );
    }
  }
  showPrimes(prompt(1));
//  guessSubmit.addeventListener("click", checkGuess);
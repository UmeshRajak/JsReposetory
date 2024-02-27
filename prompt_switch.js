let many = prompt('put any number to start game', '' );

while (many!=0)
{
    let year = prompt('In which year was the ECMAScript-2015 specification published?', '' );
       if(year<2000) {
        alert( 'How can you be so wrong?' ); // any value except 2015
        
      }
        else if(year>2000) {
          alert( 'you are about come?' ); // any value except 2015
          
      }
      else {
        alert( 'You guessed it right!' );
        break;
      } 
      
}




let arg = prompt("Enter a value?",1);
switch (arg) {
  case '0':
  case '1':
    alert( 'One or zero' );
    break;

  case '2':
    alert( 'Two' );
    break;

  case 3:
    alert( 'Never executes!' );
    break;
  default:
    alert( 'An unknown value' );
}





// let age = prompt('Enter age?', 18);

// let message = (age < 3) ? 'Hi, baby!' : (age < 18) ? 'Hello!' : (age > 100) ? 'Greetings!' :
  
  
//   'What an unusual age!';

// alert( message );

// let Magicnum = prompt("Enter some number here");

// let message1 = (Magicnum == 1) ? 'you are fool':'you are Marvalus';
// alert(message1);

// let year = prompt('In which year was the ECMAScript-2015 specification published?', '');

// if (year < 2015) {
//   alert( 'Too early...' );
// } else if (year > 2015) {
//   alert( 'Too late' );
// } else {
//   alert( 'Exactly!' );
// }



// let a = +prompt('a?', '');

// if (a == 0) {
//   alert( 0 );
// }
// if (a == 1) {
//   alert( 1 );
// }

// if (a == 2 || a == 3) {
//   alert( '2,3' );
// }


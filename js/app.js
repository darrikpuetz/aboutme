'use strict';

var correctNum = 0;
var nameUser = prompt('Who are you?');
alert('Welcome ' + nameUser);
console.log('Welcome ' + nameUser + '!');


function getQ1() {
  var language = prompt('Is C# my favorite language? (y or n)').toLowerCase();

  if (language === 'y') {
    alert('You are right!');
    correctNum++;
  }

  else if(language === 'n'){
    alert('Nope, it is C# ');
  }console.log('User answer for language ' + language);
}


function getQ2() {
  var state = prompt('Am I from Idaho (y or n)').toLowerCase();

  if (state === 'n') {
    alert('You are correct! I am from Iowa');
    correctNum++;
  }

  else if(state.charAt(0)=== 'n'){
    alert('Nope, it is Iowa ');
  }console.log('User answer for state ' + state);
}

function getQ3() {
  var pastHobby = prompt('Did I professionally bullride? (y or n)').toLowerCase();

  if (pastHobby === 'y') {
    alert('You are right!');
    correctNum++;
  }

  else if(pastHobby === 'n'){
    alert('Nope, I surely did! #yeehaw ');
  }console.log('User answer for hobby' + pastHobby);
}

function getQ4(){
  var animal = prompt('Is my favorite animal a turtle? (y or n)').toLowerCase();

  if (animal === 'n') {
    alert('You are right! It is a platypus');
    correctNum++;
  }

  else if (animal === 'n') {
    alert('Nope, It is a platypus ');
  }console.log('User answer for animal ' + animal);
}

function getQ5() {
  var daughter = prompt('I have one kid? (y or n)').toLowerCase();

  if (daughter === 'y') {
    alert('You are right!');
    correctNum++;
  }

  else if (daughter === 'n'){
    alert('Nope, I definately do. ');
  }console.log('User answer for daughter' + daughter);
}

getQ1();
getQ2();
getQ3();
getQ4();
getQ5();


var favoriteColor = prompt('What is my favorite color?').toLowerCase();

while (favoriteColor !== 'orange') {
  favoriteColor = prompt('What is my favorite color?');
}

if (favoriteColor === 'orange');

alert('You know my favorite color. Welcome.');
console.log('Finished color');

// for( var i = 0; i <= 6; i++ ) {
//   var whichCountry = prompt('What country have I been to besides the United States?');
//   var country = ['korea', 'germany', 'syria', 'afghanistan','ireland', 'england'];

//   if(country[i] === whichCountry.toLowerCase()){
//     alert('You got one right! I have been to ' + country);
//     i = 7;
//     correctNum++;
//     break;
//   }console.log('Number of attempts' + i );
// }
// if (i === 6){
//   alert('Korea , Germany , Syria , Afghanistan , Ireland , England');
// }
// else {
//   alert('Wrong!');
// }
// alert('You got ' + correctNum + ' right ' + nameUser);

var whichCountry = ['korea', 'germany', 'syria', 'afghanistan','ireland', 'england'];
var countryGuess = false;
var numCountryGuess = 1;

while (countryGuess === false && numCountryGuess <= 7) {
  var guessCountry = prompt('What country have I been to besides the United States?');

  for (var i = 0; i < whichCountry.length; i++) {


    if(guessCountry.toLowerCase() === whichCountry[i]){
      alert('You got one right! I have been to ' + whichCountry);
      correctNum++;
      console.log('Correct Country');
      countryGuess = true;
      break;
    }
  }

  if (!countryGuess){
    alert('Wrong!');
    console.log('never guessed correctly');
  }

  numCountryGuess++;
}




alert('You got ' + correctNum + ' right ' + nameUser);


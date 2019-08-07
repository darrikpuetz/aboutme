'use strict';

var name = prompt('Who are you?');

alert('Welcome ' + name);
console.log('Welcome ' + name + '!');

var language = prompt('Is C# my favorite language? (y or n)').toLowerCase();

if (language === 'y') {
alert('You are right!');
}

else if(language === 'n'){
alert('Nope, it is C# ');
}console.log('User answer for language ' + language);

var state = prompt('Am I from Idaho (y or n)').toLowerCase();

if (state === 'n') {
alert('You are correct! I am from Iowa');
}

else if(state === 'n'){
alert('Nope, it is Iowa ');
}console.log('User answer for state ' + state);

var pastHobby = prompt('Did I professionally bullride? (y or n)').toLowerCase();

if (pastHobby === 'y') {
alert('You are right!');
}

else if(pastHobby === 'n'){
alert('Nope, I surely did! #yeehaw ');
}console.log('User answer for hobby' + pastHobby);

var animal = prompt('Is my favorite animal a turtle? (y or n)').toLowerCase();

if (animal === 'n') {
alert('You are right! It is a platypus');
}

else if (animal === 'n') {
alert('Nope, It is a platypus ');
}console.log('User answer for animal ' + animal);

var daughter = prompt('I have one kid? (y or n)').toLowerCase();

if (daughter === 'y') {
alert('You are right!');
}

else if (daughter === 'n'){
alert('Nope, I definately do. ');
}console.log('User answer for daughter' + animal);

// var hobby = prompt('What do you like to do?');

// alert(hobby + ' sure sounds fun');
// console.log(hobby + ' sure sounds fun');

// var favoritePlace = prompt('Where is the one place you want to go?');

// alert(favoritePlace + ' is a wonderful place!');
// console.log(favoritePlace + ' is a wonderful place!');

// alert('Hello ' + name + ' , would you like to go ' + hobby + ' in ' + favoritePlace);
// console.log('Hello ' + name + ' , would you like to go ' + hobby + ' in ' + favoritePlace + ' ? ');

'use strict';

var name = prompt('Who are you?');

alert('Welcome ' + name);
console.log('Welcome ' + name);

var place = prompt('Are you from Seattle (y or n?)');

if (place === 'y') {
alert('Home grown I see.');
}

else {
alert('Welcome to Seattle');
}console.log('Location Seattle?' + place);

var hobby = prompt('What do you like to do?');

alert(hobby + ' sure sounds fun');
console.log(hobby + ' sure sounds fun');

var favoritePlace = prompt('Where is the one place you want to go?');

alert(favoritePlace + ' is a wonderful place!');
console.log(favoritePlace + ' is a wonderful place!');

alert('Hello ' + name + ' , would you like to go ' + hobby + ' in ' + favoritePlace);
console.log('Hello ' + name + ' , would you like to go ' + hobby + ' in ' + favoritePlace + ' ? ');

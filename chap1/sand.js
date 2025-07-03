alert('hello how are u dng');
// String in js
console.log('No progress')

// can add strings in js 
let greeting = 'Hello'
greeting += ' World'
console.log(greeting)

age = 21
console.log(age)

age = 22
console.log(age)

const name = 'Shiva'
// A constant tag assigned variable cannot be changed again
console.log(name)
// This will throw an error because 'name' is a constant

let movie = 'Mad'
let rating = 'Bad'
opinion = movie + ' '+ 'is'+' '+ rating 
console.log(opinion)
// So in this way we can add different strings and also other words together
// in python we need to use an f tag for this but here it isnnt needed
// To get the word at the 0th index of the string :-
console.log(movie[0]);
//  To get the length of a string
console.log(opinion.length);
// TO get the index value of a particular value/word
let index = greeting.indexOf('e')
console.log(index);
// uppercase but will not change the og data
console.log(movie.toUpperCase(),movie);
// To get the last index of a word
let thought = 'Annihilation'
console.log(thought.lastIndexOf('i'))
// To slice an string
console.log(thought.slice(0,4))
// replace a char with another
console.log(thought.replace('a','x')) // It is char dependent and upper and lower will make a diff for this tag
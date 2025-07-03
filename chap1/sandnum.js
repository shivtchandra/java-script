rad = 10
num = 9
console.log(rad,num);
console.log(rad*num);

let count = 9
count ++
console.log(count)
// to add 10
count += 10
// to minus
count -= 5
count *=2
// These are very similar to what we do iin python

//Types of string concatination
let cost = 200
let movie = 'f1'
let theatre = 'pvr'
result = movie + '  Movie ' + 'is ' + 'priced at ' + cost + ' in '+ theatre;
console.log(result)
// Below method is very similar to using f sting in python 
resul = `${movie} Movie is priced at ${cost} at ${theatre}`;
console.log(resul);

//ARRAYS 
let title = ['apple','dell','hp'];
console.log(title[0]);

let join = title.join('-');
console.log(join);

let add = title.concat(['lenovo']);
console.log(add);
// there isnt a change when we again return the og array
console.log(title);
// but if we use push function the og array will also be changed
let og = title.push('lenovo');
console.log(title);
// we can use pop func to remove the last value in an array
console.log(title.pop())

// equal to indicators
let age = 25
console.log(age == 25);
console.log(age == 30);
console.log(age != 30);
console.log(age > 20);
console.log(age < 35);

//here everything except age == 30 will give boolean value true as return
//For strings
let nam = 'shiva'

console.log(nam == 'shiva')
console.log(nam == 'Shiva') // Will return false
console.log(nam > 'krish') // will return true as s > k
// lower char characters will have more value than upper char ones even for the same alphabet
console.log(nam > 'Shiva') // will return true


// a num given in string format will have a type conversion as num in the below case
console.log(age == '25')
console.log(age != '25')
// but not in the below case
console.log(age === '25')
console.log(age !== '25')


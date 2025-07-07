// To get indvidual items
// const para = document.querySelector('p');
// console.log(para);

//To get every item with that tag
const para = document.querySelectorAll('p');
console.log(para[1]);

const parass = document.querySelectorAll('.error');
console.log(parass)

//Getting elemnts based on id
const title = document.getElementById('pageid')
console.log(title)
//Getting elements based on class name
const errors = document.getElementsByClassName('.error')
console.log(errors)
//Getting them by Tags
const paras = document.getElementsByTagName('p')
console.log(paras)

//For each method is only applicable on selector tool not applicable on other ones

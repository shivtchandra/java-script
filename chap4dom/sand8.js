
console.log(Math);

const area = 9.9;
const are = 9.4
console.log(Math.round(area))//Ans = 10
console.log(Math.floor(are)) // Ans = 9
console.log(Math.ceil(are)) // Ans = 10

const random = Math.random();

console.log(random) //To generate random numbers btw 0 to 1

//Primitve is stored in stack and Reference is stored in heap
// Primitive works as following
let s1 = 100;
let s2 = s1;
console.log(s1,s2);//100,100 will be returned
s1 = 50
console.log(s1,s2);//50,100 will be returned

const s11 = {score:100};
const s12 = s11

console.log(s11,s12); // 100,100

s11.score = 50;
console.log(s11,s12)// 50,50
//Here the change will happen to all the objects connected unlike Primitve data

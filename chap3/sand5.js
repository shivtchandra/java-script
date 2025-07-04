//  We have two type of functions
// Traditional Function Delaration
function Welcome(){
    console.log('Hello ,Everyone out there');
}

Welcome();

// Function expression 
const speak = function(){
    console.log('Hello ,Everyone out there');
}

speak();

// Both look same but one major diff is that 
// func declaration may not be done before the call is made

const spak = function(name){
    console.log(`Have a great day ${name}`)
}

spak('Martin')

const sal = function(amount){
    let salary = amount * 0.90
    console.log(salary);
}

sal(20000)

// now we cant acess the salary outside the function
// but if we wnt to call it or use it again we should do it slight differently

const ssal = function(amount){
    return salary = amount * 0.90
}

const num = ssal(20000)
console.log('The inhand salary is:',num);

// we can also use it as an input ofr other functions

const saal = (amount) =>{
    console.log('We get',amount * 0.5)
}
saal(10000)
// As seen above we can use => instead of function to define it
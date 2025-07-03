const rating = [4,5,3,6,9,6,5,7]

for (let i = 0;i < rating.length ; i++){
    console.log('Movie rating :',rating[i]);
}

// Now to get the max rating i.e till 9 and stop
for (let i = 0;i<rating.length;i++){
    if (rating[i] === 3){
        continue;
    }
    console.log("Movie rating",rating[i]);
    if (rating[i] === 9 ){
        console.log('Highest Rating')
        break;
    }
} 
//Continue will skip only the given value.
//Break will stop the further iterations

const rate = '2';

switch(rate){
    case '5':
        console.log('Extrodinary');
        break;
    case '4':
        console.log('Good');
        break;
    case '3':
        console.log('Decent');
        break;
    case '2':
        console.log('Bad');
        break;
    case '1':
        console.log('Torture');
        break;
    default:
        console.log('Wrong Input');
}

// Here break is a must as without it for rate = 2
// We will get case 1 and defaukt printed along. 

let age = 21 

if(true){
    console.log('Inside :',age)
}

console.log('Outside',age)
//Both of them will give out the same output 
//But is there a way to change the age ?
//Since it is assigned to let we cannot do that but inside the loop we can do that

if (true){
    let age = 30 //This will give output as 30
    console.log('Inside :',age)
}
// Data declared with "LET" and "CONST" inside a code block will only be valid inside it
// Var isnt like that

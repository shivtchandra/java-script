for (let i = 0 ; i < 5; i ++) {
    console.log('Loop count:',i)
}
console.log('Loop completed')

const title = ['Kubera','F1','Metro in dino']

for (i = 0; i < title.length ;i++){
    console.log(title[i])
}

let k = 0;

while (k < 5){
    console.log('count is ',k);
    k ++;
}

let j = 5

do{
    console.log('count for do while loop is',j);
    j ++;
}while(j<5);

let rating = 2;
if ( rating > 3){
    console.log('HIT');
}else  if (rating > 2){
    console.log('Average');
}else {
    console.log('Flop');
}

const place = 'hyderabad'

if (place.length < 8 && place.includes('a')){
    console.log('Nice place')
}else if (place.length < 5 || place.includes('h')){
    console.log('Place')
}else {
    console.log('Hell')
}

// In this way we can add && and || for and and or respectively

const greet = () =>{
    return 'Hello from hell'
}

console.log(greet())

const bill = (prod,tax)=>{
    let total = 0;
    for (i=0;i<prod.length;i++){
        total += prod[i] + prod[i]*tax
    }
    return total;
}

console.log(bill([10,30,20],0.20))

//Call back functions

let movies = ['Kubera','F1','Ballerina']
// To list all these i can simply use a for loop
//but we can do it in other way which is function call back
movies.forEach(function(mov){
    console.log(mov);
});

const areas = ['blore','hyd','kochi','chennai']

areas.forEach(function(area, index){
    console.log('Population wise:',index + 1)
    console.log(area)
})
let user = {
    name : 'Dustin',
    age : 22,
    job : 'Unemployed',
    location : 'Swisss',
    Travel : ['Greece','France'],
    login(){
        console.log('User logged in');
    },
    logout : function(){
        console.log('User logged out');
    },
    logTravel : function(){
        console.log('This user has travelled to the following countries:')
        this.bolgs.forEach(blog => {
            console.log(blog);
        })
    }
};

user.login();
//Here we are calling a function inside an array or list
user.logout();

console.log(user);// Will list all items 

console.log(user.age); // To get the specific detail

user.job = 'Studying upsc' //To update the specific user detail
console.log(user.job);

//console.log(user['job']) will also work
//A method is also an funciton defined on an object

//We have passed strings in side an array and retrived them seperately
//Using this and foreach feature. 
//Now lets pass it as an object
let userr = {
    Travel : [
        {Country : 'Greece', Days: 5},
        {Country : 'France', Days : 9}
    ],
    logtravl(){
        console.log('Have Travelled these countries for these many days')
        this.Travel.forEach(place =>{
            console.log(place.Country,place.Days)
        });
    }
}

userr.logtravl();
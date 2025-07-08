const form = document.querySelector('.signup');
const feed = document.querySelector('.feedback');
 const pattern = /^[a-zA-Z]{6,10}$/;
//In general page refresh event happens every time submit is cicked
//By writing prevent default we can stop it
form.addEventListener('submit' , (e)=>{
   e.preventDefault();
    details = form.username.value;
    console.log(details);
    pass = form.password.value;
    console.log(pass)
 });

//How to display if the username is acc to the rules et or not
form.addEventListener('submit' , (e)=>{
   e.preventDefault();
    const user = form.username.value;
    let result = pattern.test(user)

    if (result){
        console.log('Succesfull');
        feed.textContent = 'Username is valid'}
        else {
            console.log('Failure')
            feed.textContent = 'Username isnt valid'
        }
    });

form.username.addEventListener('key',e =>{
    if (pattern.test(e.target.value)){
        form.username.setAttribute('class','success');
    }else{
        form.username.setAttribute('class','error');
    }
})
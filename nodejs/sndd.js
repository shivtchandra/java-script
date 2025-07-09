const list = document.querySelector('ul')

//list.forEach(it =>{
    //it.addEventListener('click',event =>{
       //event.target.style.textDecoration = 'line-through';
 //   }
//    )
// })

//Delete an html tag from the page
const lst = document.querySelectorall('li');
lst.forEach(it =>{
    it.addEventListener('click',event =>{
       if (event.target.tagName == 'LI') {
       event.target.remove(); }
    }
    )
})

//To add new info when someone clicks the button
const button = document.querySelector('button');
button.addEventListener('click',()=>{
    const li = document.createElement('li');
    li.textContent = 'New';
    list.append(li);
})


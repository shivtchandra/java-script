const para = document.querySelector('p')
//This will give us <p> Hello </p>, but how can we get only that text?
//console.log(para.innerText);
//Now we only return the text without tags
// so the fun part of changing text
//para.innerText = 'Namaskaram';

const paras = document.querySelectorAll('p')

paras.forEach(para => {
    console.log(para.innerText);    
    para.innerText += '     Newly written with js'
});

const content = document.querySelector('.content')

//console.log(content.innerHTML)

//content.innerHTML += '<h2> This is the replaced tag</h2>';

const ppl = ['mario','madan','jenny'];

ppl.forEach(ele =>{
    content.innerHTML += `<p>${ele}</p>`;
});

const colour = document.getElementById('h1')

colour.style.margin = '100px';
colour.style.color = 'crimson';

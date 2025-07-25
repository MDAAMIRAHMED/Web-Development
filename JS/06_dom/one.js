// in browser

console.log(window)

console.log(window.document) ~ console.log(document);

console.dir(document)

console.log(document.baseURI)

console.log(document.links);

document.getElementById('firstheading')

document.getElementById('firstHeading').innerHTML = "Aamir"

// ++++++++++++++++++++++++++++++++++++++++++++

document.getElementById('title')
document.getElementById('title').id
// document.getElementById('title').class 
document.getElementById('title').className
document.getElementById('title').getAttribute('id')
document.getElementById('title').getAttribute('class')
document.getElementById('title').setAttribute('class', "text")
document.getElementById('title').setAttribute('class', "text heading")

const title = document.getElementById('title')
title.style.backgroundColor = "green"
title.style.padding = "14px"
title.style.borderRadius = "14px"

title.innerHTML -> text with html
title.innerText -> text without html and display:none
title.textContent -> text with display:none and without html

document.getElementsByClassName('heading')

document.querySelector('#title')
document.querySelector('.heading')
document.querySelector('h1')
document.querySelector('h2')
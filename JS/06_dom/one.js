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
document.querySelector('h2') // first element

const myul = document.querySelector('ul')
myul
const turnGreen = myul.querySelector('li')

turnGreen.style..backgroundColor = 'green'
turnGreen.style.padding = '10px'

turnGreen.innerText
turnGreen.innerText = 'five'

const tempLiList = document.querySelectorAll('li')
// tempLiList -> doesn't have map like arrays but have foreach
const myArr = [1, 2,3, 4]
// myArr => have both map and foreach

tempLiList.style.backgroundColor = 'green' // throws error
tempLiList[0].style.backgroundColor = 'green' // because it is a nodelist

const myh1 = document.querySelectorAll('h1')
myh1.style.backgroundColor = 'green' // throws error even if it contains only one nodelist
myh1[0].style.backgroundColor = 'green'

tempLiList.forEach(function(li) {li.style.backgroundColor = 'red'})

const tempClassList = document.getElementsByClassName('list-item')
// tempClassList => HTMLCollection and doesn't have map and foreach

const myConvertedArray = Array.from(tempClassList)
myConvertedArray.forEach(li => {
    li.style.backgroundColor = 'red'
})

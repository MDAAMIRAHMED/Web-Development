const form = document.querySelector('form');
// console.log(form);

// this results in empty values
// const height = form.querySelector('#height').value;

form.addEventListener('submit', function(e) {
    e.preventDefault()
    const height = parseInt(document.querySelector('#height').value);
    const weight = parseInt(document.querySelector('#weight').value);
    const results = document.querySelector('#results');
    

    if( height < 0 || isNaN(height) ){
        results.innerHTML = `Please enter a valid height...`;
    }
    else if( weight < 0 || isNaN(weight) ){
        results.innerHTML = `Please enter a valid weight...`;
    }
    else {
        const bmi = (weight/ ((height*height)/10000) ).toFixed(2)
        results.innerHTML = `<span>${bmi}</span>`

        const weightGuide = document.querySelector('#weight-guide');
        if (bmi < 18.6) {
            weightGuide.querySelectorAll('p')[0].style.backgroundColor = 'red';
        } else if (bmi < 24.9) {
            weightGuide.querySelectorAll('p')[1].style.backgroundColor = 'green';
        }
        else {
            weightGuide.querySelectorAll('p')[2].style.backgroundColor = 'red';
        }
    }
})


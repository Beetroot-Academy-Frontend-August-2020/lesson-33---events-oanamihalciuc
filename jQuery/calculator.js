//screen class should be an empty variable
//click event on all other divs
//once we click on one div, its value should show on the empty variable screen



document.querySelector('.seven').addEventListener('click', event => {
    document.querySelector('.screen').innerText = '7';
  })

document.getElementsByClassName('seven')[0]
        .addEventListener('click', event => {
            seven.innerText = '7';
        });

const button = document.querySelector('div');

button.addEventListener('click', event => {
        button.innerHTML = `Hello`;
        });
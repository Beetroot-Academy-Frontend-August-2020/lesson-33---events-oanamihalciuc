/* 1. Implement a HTML page with a ‘Like’ button and a counter. Clicking on the Like button should increase the number in the counter.*/

var counter = document.createElement('p');
counter.innerText = '0';
document.body.appendChild(counter);

let like = document.getElementById('like');
like.addEventListener('click', () => counter.innerText ++);
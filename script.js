const container = document.querySelector('.loader-container');

const countdownEl = document.createElement('h1');

countdownEl.style.fontSize = '30px';
countdownEl.style.fontWeight = 'bold';
countdownEl.style.color = 'white';

container.prepend(countdownEl);

let timeLeft = 10;

const timer = setInterval(() => {

  countdownEl.textContent = timeLeft;

  timeLeft--;

  if (timeLeft < 0) {
    clearInterval(timer); 
    countdownEl.textContent = "Done!"; 

    document.querySelector('.loader').style.display = 'none';
  }

}, 1000);




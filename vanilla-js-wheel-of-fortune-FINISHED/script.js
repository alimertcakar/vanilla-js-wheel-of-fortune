function randomIntFromInterval(min, max) { // min max arasında sayı - min max dahil
  return Math.floor(Math.random() * (max - min + 1) + min);
}

function fortuneStep(step) {
  return ((step - 1) * 45);
}





(function () {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  let deg = 0;
  startButton.addEventListener('click', () => {
    startButton.style.pointerEvents = 'none';
    deg = Math.floor(5040 + fortuneStep(1) + 1 + randomIntFromInterval(0, 44));
    wheel.style.transition = 'all 1s ease-out';
    wheel.style.transform = `rotate(${deg}deg)`;
    wheel.classList.add('blur');
  });

  wheel.addEventListener('transitionend', () => {
    wheel.classList.remove('blur');
    startButton.style.pointerEvents = 'auto';
    wheel.style.transition = 'none';
  });
})();


function cevirBeni(carkAdimi) {
  const wheel = document.querySelector('.wheel');
  const startButton = document.querySelector('.button');
  let deg = 0;

  startButton.style.pointerEvents = 'none';
  deg = Math.floor(5040 + fortuneStep(carkAdimi) + 1 + randomIntFromInterval(0, 44));
  wheel.style.transition = 'all 10s ease-out';
  wheel.style.transform = `rotate(${deg}deg)`;
  wheel.classList.add('blur');

  //Çarkı eski yerine döndürme
  //const actualDeg = deg % 360;
  //wheel.style.transform = `rotate(${actualDeg}deg)`;
}
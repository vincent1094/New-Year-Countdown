const days = document.getElementById('days');
const hours = document.getElementById('hours');
const minutes = document.getElementById('minutes');
const seconds = document.getElementById('seconds');
const countdown = document.getElementById('countdown');

const currentYear = new Date().getFullYear();
const newYearTime = new Date(`January 01 ${currentYear + 1} 00:00:00`);

function updateCountdown() {
  const currentTime = new Date();
  const diff = newYearTime - currentTime;
  console.log(currentTime);
  console.log(diff);

  const d = Math.floor(diff / 1000 / 60 / 60 / 24);
  console.log(d);
  const h = Math.floor(diff / 1000 / 60 / 60) % 24;
  console.log(h);
  const m = Math.floor(diff / 1000 / 60) % 60;
  console.log(m);
  const s = Math.floor(diff / 1000) % 60;
  console.log(s);
}

updateCountdown();

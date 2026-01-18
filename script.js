let seconds = 3;
const countdown = document.getElementById('countdown');

const timer = setInterval(() => {
    seconds--;
    countdown.textContent = seconds;

    if (seconds <= 0) {
        clearInterval(timer);
        window.location.href = 'https://indra-kumar-r-v1.vercel.app/';
    }
}, 1000);

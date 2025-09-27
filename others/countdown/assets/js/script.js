// bg
const backgrounds = [
    "assets/images/bg1.jpg",
    "assets/images/bg2.jpg",
    "assets/images/bg3.jpg",
    "assets/images/bg4.jpg",
];
  
let index = 0;
  
function preloadImages(images, callback) {
    let loadedCount = 0;
  
    images.forEach((src) => {
        const img = new Image();
        img.src = src;
        img.onload = () => {
            loadedCount++;
            if (loadedCount === images.length) {
                callback();
            }
      };
    });
}
  
function changeBackground() {
    document.body.style.backgroundImage = `url('${backgrounds[index]}')`;
    index = (index + 1) % backgrounds.length;
}
  
preloadImages(backgrounds, () => {
    changeBackground();
    setInterval(changeBackground, 3000);
});

// timer
function countdownToNewYear() {
    const newYear = new Date('2026-01-01T00:00:00').getTime();
  
    const timer = setInterval(() => {
      const now = new Date().getTime();
      const distance = newYear - now;
  
      if (distance >= 0) {
            const countdays = Math.floor(distance / 86400000);
            const counthours = Math.floor((distance % 86400000) / 3600000);
            const countminutes = Math.floor((distance % 3600000) / 60000);
            const countseconds = Math.floor((distance % 60000) / 1000);
    
            document.getElementById('days').textContent = countdays;
            document.getElementById('hours').textContent = counthours;
            document.getElementById('minutes').textContent = countminutes;
            document.getElementById('seconds').textContent = countseconds;
        } else {
            clearInterval(timer);
            document.getElementById('countdown').innerHTML = '<h2>Happy New Year 2026!</h2>';
            document.getElementById('text').style.display = 'none';
        }
    }, 1000);
}
  
countdownToNewYear();
  
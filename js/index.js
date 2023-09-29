$(window).load(function () {
  $("#slider").nivoSlider({
    effect: "random",
    slices: 15,
    boxCols: 8,
    boxRows: 4,
    animSpeed: 500,
    pauseTime: 3000,
    startSlide: 0,
    directionNav: false,
    controlNav: false,
    controlNavThumbs: false,
    pauseOnHover: true,
    manualAdvance: false,
    prevText: "Prev",
    nextText: "Next",
    randomStart: false,
  });
});

const menuButton = document.querySelector('.menu-toggle');
const mainMenu = document.querySelector('.nav .navbar .menu');

menuButton.addEventListener('click', () => {
  mainMenu.classList.toggle('active');
});
(function(){

  let sliderBtns = document.querySelectorAll('.slider__controlBtn'),
      sliderBox = document.querySelector('.slider__slides'),
      arrayFromSlides = document.querySelectorAll('.slider__slide'),
      arrayFromDots = document.querySelectorAll('.slider__drop'),
      currentPositionX = 0,
      currentSlide = 0; 



  sliderBtns[1].onclick = function(){

    currentPositionX -= 100;

    sliderBox.setAttribute('style', `transform: translateX(${currentPositionX}%);-webkit-transform: translateX(${currentPositionX}%);-moz-transform: translateX(${currentPositionX}%);-ms-transform: translateX(${currentPositionX}%);-o-transform: translateX(${currentPositionX}%);`);

    currentSlide += 1;

    if(currentSlide == arrayFromSlides.length){
      goToFirstSlide();
    }

    arrayFromDots.forEach((item)=>{
      item.className = 'slider__drop';
    });
    arrayFromDots[currentSlide].classList.toggle('slider__drop_active');

  };



  sliderBtns[0].onclick = function(){

    currentPositionX += 100;

    sliderBox.setAttribute('style', `transform: translateX(${currentPositionX}%);-webkit-transform: translateX(${currentPositionX}%);-moz-transform: translateX(${currentPositionX}%);-ms-transform: translateX(${currentPositionX}%);-o-transform: translateX(${currentPositionX}%);`);

    currentSlide -= 1;

    if(currentSlide == -1){
      goToFirstSlide();
    }

    arrayFromDots.forEach((item)=>{
      item.className = 'slider__drop';
    });
    arrayFromDots[currentSlide].classList.toggle('slider__drop_active');

  };



  function goToFirstSlide(){

    currentPositionX = 0;

    sliderBox.setAttribute('style', `transform: translateX(${currentPositionX}%);-webkit-transform: translateX(${currentPositionX}%);-moz-transform: translateX(${currentPositionX}%);-ms-transform: translateX(${currentPositionX}%);-o-transform: translateX(${currentPositionX}%);`);

    currentSlide = 0;

  };

})();
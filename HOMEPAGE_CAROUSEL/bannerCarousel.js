var slides = `
<!-- Slider Section -->
<div class="slides">

    <!-- First Slide -->
    <div class="slide__container currentSlide">
        <img src="image/banner-1.jpg" alt="banner" class="slide">
    </div>
    <!-- Second Slide -->
    <div class="slide__container">
        <img src="image/banner-2.jpg" alt="banner" class="slide">
    </div>
    <!-- Third Slide -->
    <div class="slide__container">
        <img src="image/banner-4.jpg" alt="banner" class="slide">
    </div>
    <!-- Fouth Slide -->
    <div class="slide__container">
        <img src="image/banner-3.jpg" alt="banner" class="slide">
    </div>

</div>
<!-- Previous Button -->
<div class="preBtn">
    <button id="preBtn" class="btn">
        <img src="image/left-arrow.svg" alt="leftArrow" class="arrow">
    </button>
</div>
<!--Next Button  -->
<div class="nextBtn">
    <button id="nextBtn" class="btn">
        <img src="image/right-arrow.svg" alt="rightArrow" class="arrow">
    </button>
</div>
<!-- Slides Navigation Indicator-->
<div class="navbar">
    <button class="slide__indicator currentIndicator"></button>
    <button class="slide__indicator"></button>
    <button class="slide__indicator"></button>
    <button class="slide__indicator"></button>
</div>`;

document.querySelector(".carousel").innerHTML = slides;


var slides = document.querySelector(".slides");
var allSlides = Array.from(slides.children);

// console.log(allSlides);
// console.log(slides.children);

// Navitation of Slider
var indicatorSection = document.querySelector(".navbar");
var indicatorBtn = Array.from(indicatorSection.children);


// Side width
var slideWidth = allSlides[0].getBoundingClientRect().width;
// console.log(slideWidth);


//Arrange the slides next to one another
allSlides.forEach((slide, index) => {
    slide.style.left = slideWidth * index + "px";
});


var moveTheSlide = (slides, currentSlide, targetSlide) => {
    slides.style.transform = "translateX(-" + targetSlide.style.left + ")";

    //move to the next slide
    currentSlide.classList.remove("currentSlide");
    targetSlide.classList.add("currentSlide");
}

var moveTheIndicator = (indicators, currentIndicator, targetIndicator) => {
    indicators.style.transform = "translateX(-" + targetIndicator.style.left + ")";

    currentIndicator.classList.remove("currentIndicator");
    targetIndicator.classList.add("currentIndicator");
}

// //Previous Button
var preBtn = document.querySelector("#preBtn");
preBtn.addEventListener("click", function () {
    var currentSlide = slides.querySelector(".currentSlide");
    var previousSlide = currentSlide.previousElementSibling;
    moveTheSlide(slides, currentSlide, previousSlide)
    // console.log(preBtn);
})

// //Next Button
var nextBtn = document.querySelector("#nextBtn");
nextBtn.addEventListener("click", function () {
    var currentSlide = slides.querySelector(".currentSlide");
    // console.log(currentSlide);
    var nextSlide = currentSlide.nextElementSibling;
    moveTheSlide(slides, currentSlide, nextSlide);


    //indicatior
    var currentIndicator = indicatorBtn.querySelector("currentIndicator");
    var nextIndicator = currentIndicator.nextElementSibling;
    moveTheIndicator(indicatorBtn, currentIndicator, nextIndicator);
})






// console.log(indicatorBtn);
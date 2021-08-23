// =================================burger
let nav = $("#nav");
let slide = $("#slide")
let navToggle = $("#navToggle");
navToggle.on("click", function (event) {
    event.preventDefault();
    nav.toggleClass("show");
})
navToggle.on("click", function (event) {
    event.preventDefault();
    slide.toggleClass("hid");
});
// ================================slide
let slideIndex = 1;
showSlides(slideIndex);
function plusSlides(n) {
    showSlides(slideIndex += n);
}
function currentSlide(n) {
    showSlides(slideIndex = n);
}
function showSlides(n) {
    let i;
    let slides = document.getElementsByClassName("mySlides");
    let dots = document.getElementsByClassName("dot");
    if (n > slides.length) {slideIndex = 1}
    if (n < 1) {slideIndex = slides.length}
    for (i = 0; i < slides.length; i++) {
        slides[i].style.display = "none";
    }
    for (i = 0; i < dots.length; i++) {
        dots[i].className = dots[i].className.replace(" active", "");
    }
    slides[slideIndex-1].style.display = "block";
    dots[slideIndex-1].className += " active";
}

// ============================================modal
let app = document.getElementById('myModal');
let img = document.getElementById('circle_icons');
img.onclick = function() {
    app.style.display = "block";
}
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    app.style.display = "none";
}

let modal2 = document.getElementById('myModal2');
let img2 = document.getElementById('arrows');
img2.onclick = function() {
    modal2.style.display = "block";
}
let span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() {
    modal2.style.display = "none";
}

let modal3 = document.getElementById('myModal3');
let img3 = document.getElementById('portfolio_theme');
img3.onclick = function() {
    modal3.style.display = "block";
}
let span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function() {
    modal3.style.display = "none";
}
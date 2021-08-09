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


// ============================================modal
let modal = document.getElementById('myModal');
let img = document.getElementById('1');
img.onclick = function() {
    modal.style.display = "block";
    modal.src = this.src
}
let span = document.getElementsByClassName("close")[0];
span.onclick = function() {
    modal.style.display = "none";
}

let modal2 = document.getElementById('myModal2');
let img2 = document.getElementById('2');
img2.onclick = function() {
    modal2.style.display = "block";
    modal2.src = this.src
}
let span2 = document.getElementsByClassName("close2")[0];
span2.onclick = function() {
    modal2.style.display = "none";
}

let modal3 = document.getElementById('myModal3');
let img3 = document.getElementById('3');
img3.onclick = function() {
    modal3.style.display = "block";
    modal3.src = this.src
}
let span3 = document.getElementsByClassName("close3")[0];
span3.onclick = function() {
    modal3.style.display = "none";
}

let modal4 = document.getElementById('myModal4');
let img4 = document.getElementById('4');
img4.onclick = function() {
    modal4.style.display = "block";
    modal4.src = this.src
}
let span4 = document.getElementsByClassName("close4")[0];
span4.onclick = function() {
    modal4.style.display = "none";
}

let modal5 = document.getElementById('myModal5');
let img5 = document.getElementById('5');
img5.onclick = function() {
    modal5.style.display = "block";
    modal5.src = this.src
}
let span5 = document.getElementsByClassName("close5")[0];
span5.onclick = function() {
    modal5.style.display = "none";
}

let modal6 = document.getElementById('myModal6');
let img6 = document.getElementById('6');
img6.onclick = function() {
    modal6.style.display = "block";
    modal6.src = this.src
}
let span6 = document.getElementsByClassName("close6")[0];
span6.onclick = function() {
    modal6.style.display = "none";
}

let modal7 = document.getElementById('myModal7');
let img7 = document.getElementById('7');
img7.onclick = function() {
    modal7.style.display = "block";
    modal7.src = this.src
}
let span7 = document.getElementsByClassName("close7")[0];
span7.onclick = function() {
    modal7.style.display = "none";
}

let modal8 = document.getElementById('myModal8');
let img8 = document.getElementById('8');
img8.onclick = function() {
    modal8.style.display = "block";
    modal8.src = this.src
}
let span8 = document.getElementsByClassName("close8")[0];
span8.onclick = function() {
    modal8.style.display = "none";
}

let modal9 = document.getElementById('myModal9');
let img9 = document.getElementById('9');
img9.onclick = function() {
    modal9.style.display = "block";
    modal9.src = this.src
}
let span9 = document.getElementsByClassName("close9")[0];
span9.onclick = function() {
    modal9.style.display = "none";
}


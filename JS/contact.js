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


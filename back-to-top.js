// create a button with id of "btn-back-to-top"
let mybutton = document.getElementById("btn-back-to-top");

function scrollFunction() {
    20 < document.body.scrollTop || 20 < document.documentElement.scrollTop ? mybutton.style.display = "block" : mybutton.style.display = "none"
}

function backToTop() {
    document.body.scrollTop = 0, document.documentElement.scrollTop = 0
}
window.onscroll = function() {
    scrollFunction()
}, mybutton.addEventListener("click", backToTop);

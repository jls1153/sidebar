// Listener to toggle sidebar and section
var sidebar = document.querySelector(".sidebar");
var hamburger = document.querySelector(".hamburger");
hamburger.addEventListener("click", function(){
	document.querySelector("body").classList.toggle("active");
    console.log(hamburger);
    console.log(officersId);
    console.log(sidebar);
})
var officersId = document.getElementById("officers");
var sectionCont = document.querySelector(".container");
console.log(sectionCont);
officersId.addEventListener("click", function(){
    sectionCont.textContent = "This is the officers page."
})
var homeId = document.getElementById("home");
homeId.addEventListener("click", function(){
    sectionCont.textContent = "This is the home page."
})
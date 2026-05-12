document.addEventListener("DOMContentLoaded",function(){

const menuToggle = document.getElementById("menuToggle");
const navMenu = document.getElementById("navMenu");

menuToggle.addEventListener("click",function(){

navMenu.classList.toggle("active");

});


/* mobile dropdown */

const dropdownBtns = document.querySelectorAll(".dropbtn");

dropdownBtns.forEach(btn=>{

btn.addEventListener("click",function(e){

if(window.innerWidth <= 992){

e.preventDefault();

const parent = this.parentElement;

parent.classList.toggle("active");

}

});

});


/* close menu when clicking outside */

document.addEventListener("click",function(e){

const nav = document.querySelector(".navbar");

if(!nav.contains(e.target)){

navMenu.classList.remove("active");

document.querySelectorAll(".dropdown").forEach(d=>{
d.classList.remove("active");
});

}

});

});
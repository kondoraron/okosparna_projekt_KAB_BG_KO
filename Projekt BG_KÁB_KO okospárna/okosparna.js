const menuBtn = document.getElementById("menuBtn");
const navMenu = document.getElementById("navMenu");

menuBtn.addEventListener("click", function () {
    navMenu.classList.toggle("open");
});





window.addEventListener("scroll", function(){

let hero = document.querySelector(".hero");

let scroll = window.scrollY;

hero.style.opacity = 1 - scroll / 450;

});






const sections = document.querySelectorAll("section");
const navLinks = document.querySelectorAll(".nav-links a");

window.addEventListener("scroll", () => {

let current = "";

sections.forEach(section => {

const sectionTop = section.offsetTop - 100;
const sectionHeight = section.clientHeight;

if(pageYOffset >= sectionTop){
current = section.getAttribute("id");
}

});

navLinks.forEach(link => {

link.classList.remove("active");

if(link.getAttribute("href") == "#" + current){
link.classList.add("active");
}

});

});





let slides = document.querySelectorAll('.slide');
let current = 0;

function showSlide(index) {
  slides.forEach((slide, i) => {
    slide.classList.toggle('active', i === index);
  });
}

function nextSlide() {
  current = (current + 1) % slides.length;
  showSlide(current);
}

setInterval(nextSlide, 3000);




document.getElementById("bekuldes").onclick = function() {
  alert("✅ A rendelését sikeresen fogadtuk. Köszönjük, hogy nálunk vásárolt!");
}



const checkboxes = document.querySelectorAll('.csakegy');

checkboxes.forEach(cb => {
  cb.addEventListener('change', () => {
    checkboxes.forEach(other => {
      if (other !== cb) other.checked = false;
    });
  });
});



function nagyitas(elem) {
  document.getElementById("modal").style.display = "block";
  document.getElementById("modalKep").src = elem.src;
}

function bezaras() {
  document.getElementById("modal").style.display = "none";
}
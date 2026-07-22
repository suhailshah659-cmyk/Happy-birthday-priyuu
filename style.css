// ==========================
// Elements
// ==========================

const pages = document.querySelectorAll(".page");

const loading = document.getElementById("loading");

const startBtn = document.getElementById("startBtn");

const giftBox = document.getElementById("giftBox");

const blowBtn = document.getElementById("blowBtn");

const nextBtn = document.getElementById("nextBtn");

const loveBtn = document.getElementById("loveBtn");

const popup = document.getElementById("lovePopup");

const closePopup = document.getElementById("closePopup");

const letterText = document.getElementById("letterText");

const music = document.getElementById("bgMusic");

const flames = document.querySelectorAll(".flame");

// ==========================
// Loading
// ==========================

window.onload = () => {

setTimeout(() => {

loading.style.display = "none";

showPage("welcome");

},2500);

};

// ==========================
// Show Page
// ==========================

function showPage(id){

pages.forEach(page=>{

page.classList.remove("active");

});

document.getElementById(id).classList.add("active");

}

// ==========================
// Welcome
// ==========================

startBtn.onclick=()=>{

showPage("giftPage");

music.play().catch(()=>{});

};

// ==========================
// Gift Open
// ==========================

giftBox.onclick=()=>{

giftBox.classList.add("open");

setTimeout(()=>{

showPage("cakePage");

},1500);

};

// ==========================
// Blow Candles
// ==========================

blowBtn.onclick=()=>{

flames.forEach(f=>{

f.classList.add("off");

});

document.getElementById("celebrate").style.display="block";

launchHearts();

setTimeout(()=>{

showPage("letterPage");

startLetter();

},2500);

};
  // ==========================
// Birthday Letter
// ==========================

const message = `Happy Birthday Priyu ❤️

Jab maine tumhe pehli baar dekha tha,
tab mujhe laga tha tum thodi si pagal ho. 😄

Maine kabhi nahi socha tha
ki ek din tum meri zindagi ki
sabse important person ban jaogi.

Aaj tum sirf meri girlfriend nahi,
meri smile,
meri dua,
mera sukoon,
aur meri po
  // ==========================
// Fireworks
// ==========================

const canvas = document.getElementById("fireworks");
const ctx = canvas.getContext("2d");

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

window.addEventListener("resize", () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
});

let particles = [];

function createFirework(x, y) {

    for (

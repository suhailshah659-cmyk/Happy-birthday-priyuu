// ==========================
// Pages
// ==========================

const pages = document.querySelectorAll(".page");

function showPage(id){

pages.forEach(page=>page.classList.remove("active"));

document.getElementById(id).classList.add("active");

}

// ==========================
// Elements
// ==========================

const loader=document.getElementById("loader");

const startBtn=document.getElementById("startBtn");

const gift=document.getElementById("gift");

const blowBtn=document.getElementById("blowBtn");

const letterBtn=document.getElementById("letterBtn");

const finalBtn=document.getElementById("finalBtn");

const loveBtn=document.getElementById("loveBtn");

const popup=document.getElementById("popup");

const music=document.getElementById("music");

// ==========================
// Loader
// ==========================

window.onload=()=>{

setTimeout(()=>{

loader.style.display="none";

showPage("page1");

},2000);

};

// ==========================
// Start Button
// ==========================

startBtn.addEventListener("click",()=>{

music.play().catch(()=>{});

showPage("page2");

});

// ==========================
// Gift
// ==========================

gift.addEventListener("click",()=>{

gift.classList.add("open");

set// ==========================
// Popup
// ==========================

function closePopup(){
popup.style.display="none";
}

loveBtn.addEventListener("click",()=>{

popup.style.display="flex";

});

// ==========================
// Hearts
// ==========================

function createHearts(){

for(let i=0;i<30;i++){

const heart=document.createElement("div");

heart.className="heart";

heart.innerHTML="❤️";

heart.style.left=Math.random()*100+"vw";

heart.style.animationDuration=
(3+Math.random()*3)+"s";

document.body.appendChild(heart);

setTimeout(()=>{

heart.remove();

},6000);

}

}

// ==========================
// Fire

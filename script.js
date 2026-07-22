const pages = document.querySelectorAll(".page");

function showPage(id) {
    pages.forEach(page => page.classList.remove("active"));
    document.getElementById(id).classList.add("active");
}

const startBtn = document.getElementById("startBtn");
const giftBox = document.getElementById("giftBox");
const blowBtn = document.getElementById("blowBtn");
const nextBtn = document.getElementById("nextBtn");

if (startBtn) {
    startBtn.onclick = () => showPage("gift");
}

if (giftBox) {
    giftBox.onclick = () => showPage("cakePage");
}

if (blowBtn) {
    blowBtn.onclick = () => {

        document.querySelector(".flame").style.display = "none";

        document.getElementById("wishText").innerHTML =
        "🎉 Happy Birthday Priyu ❤️<br>May all your dreams come true.";

        setTimeout(() => {

            showPage("letterPage");

            typeLetter();

        },2000);

    }
}

const letter = `

Meri Pyari Priyu ❤️

Happy Birthday Meri Jaan...

Jab tum meri life me aayi thi na,
tab tum mujhe thodi si pagal,
thodi shararti aur bilkul alag si lagi thi.

Mujhe bilkul bhi nahi laga tha
ki ek din tum meri duniya,
mera sukoon aur mera poora jahan ban jaogi.

Aaj meri har dua me tum ho.

Tumhari smile meri sabse favourite cheez hai.

Main Allah se hamesha dua karta hoon
ki tum hamesha khush raho,
har sapna poora ho,
aur tumhare chehre ki muskurahat kabhi na jaye.

Agar kabhi maine tumhe hurt kiya ho,
to mujhe maaf kar dena.

Main perfect nahi hoon,
lekin meri mohabbat tumhare liye
hamesha sacchi rahegi.

I Love You So Much Priyu ❤️

Forever Yours

Mohd Suhail ❤️

`;

let i = 0;

function typeLetter(){

const area = document.getElementById("letterText");

area.innerHTML = "";

let timer = setInterval(()=>{

area.innerHTML += letter.charAt(i);

i++;

if(i >= letter.length){

clearInterval(timer);

}

},35);

}

if(nextBtn){

nextBtn.onclick = ()=>{

showPage("endPage");

}

}

const hearts=document.querySelector(".hearts");

if(hearts){

setInterval(()=>{

let h=document.createElement("span");

h.innerHTML="❤️";

h.style.left=Math.random()*100+"vw";

h.style.fontSize=(20+Math.random()*20)+"px";

hearts.appendChild(h);

setTimeout(()=>{

h.remove();

},8000);

},500);

}

// addEventListener("scroll", () => {
//     if(window.scrollY == 0){
//         window.scrollTo(500,500)
//     }
// });

let info = document.querySelector("#info");
let joyce = document.querySelector("#joyce");
const navbar = document.querySelector("nav");
const mobNavbar = document.querySelector(".mobNav");
let mobIcon = document.querySelector("#mobIcon");

let span;
let tick = false;
function mobileExpand(){
    if(tick == false){
        mobNavbar.style.display = "flex"
        mobNavbar.style.animation = "expand 1s forwards";
        mobIcon.innerHTML = "<img src=\"../00_assets/svgs/close.svg\" width=\"60vh\" height=\"60vh\">"
        tick = true;
        clearTimeout(span);
    }else{
        mobNavbar.style.animation = "close 1s forwards";
        mobIcon.innerHTML = "<img src=\"../00_assets/svgs/hmg.svg\" width=\"60vh\" height=\"60vh\">"
        tick = false;
        span = setTimeout(() => {
            mobNavbar.style.display = "none";
        }, 1000)
    }
}
mobIcon.addEventListener("click", mobileExpand);

// , "\"If opportunity doesn't knock, build a door.\" - Milton Berle"
// const set = ["Thanks For Visiting!","Questions?","Comments?", "Say Hi!"]
const set = ["Thanks For Visiting!","Questions? Say Hi!"]
let quest = document.querySelector("#followUp")
// let sent = 0;
// let letter = 0;
// quest.innerHTML = "<span style=\"color:rgba(0,0,0,0);\">|</span>";

// function pause(){
//     let say = setInterval(() => {
//         quest.innerHTML += set[sent][letter]
//         letter += 1;
//         if(letter >= set[sent].length){
//             setTimeout(() => {
//                 erase()
//             },5000)
//             clearInterval(say);    
//         }
//     }, 150);
// }

// function erase(){
//     let stop = setInterval(() => {
//         quest.innerHTML = "<span style=\"color:rgba(0,0,0,0);\">|</span>" + set[sent].slice(0,letter)
//         letter -= 1;
//         if (letter < 0){
//             restate()
//             clearInterval(stop)
//         }
//     }, 150)
// }

// pause()
// function restate(){
//     if(sent == 2){
//         sent = 0;
//     }else{
//         sent += 1;
//     }
//     letter = 0;
//     pause()
// }

// footer
let day = new Date().getDay();
function chat(){
    if (day%2 == 0){
        quest.textContent = set[0];
    }else{
        quest.textContent = set[1];
    }
}
chat()


// --- INTRO TEXT Animation ---
const introPart1 = "Hi! 👋"; 
const introTextParts = [
    " I’m an aspiring UX/UI Designer with a background in",
    "Computer Science, passionate about creating intuitive,",
    "user-friendly and accessible designs ✨"
];

let introElement = document.querySelector("#introText");
let introLetter = 0;
let introSpeed = 40;
let partIndex = 0; // Για να ξέρουμε σε ποιο κομμάτι του κειμένου βρισκόμαστε

// Εμφανίζουμε το πρώτο κομμάτι με το "Hi! 👋"
introElement.innerHTML = "";
introElement.style.visibility = "visible";

// Πρώτο animation για "Hi!👋"
function typeIntroPart1() {
    let interval = setInterval(() => {
        if (introLetter < introPart1.length) { 
            introElement.innerHTML += introPart1[introLetter];
            introLetter++;
        } else {
            clearInterval(interval);
            introLetter = 0;
            setTimeout(() => typeIntroPart2(partIndex), 1000); // Ξεκινάμε το επόμενο μέρος
        }
    }, introSpeed);
}

// Δεύτερο animation χωρίς καθυστέρηση ανάμεσα στις γραμμές
function typeIntroPart2(index) {
    if (index >= introTextParts.length) return; // Αν έχουν εμφανιστεί όλα τα μέρη, σταματάμε

    let currentPart = introTextParts[index];
    let partLetter = 0;

    let interval = setInterval(() => {
        if (partLetter < currentPart.length) { 
            introElement.innerHTML += currentPart[partLetter];
            partLetter++;
        } else {
            clearInterval(interval);
            introElement.innerHTML += "<br>"; // Προσθέτουμε αλλαγή γραμμής ΜΟΝΟ στο τέλος κάθε φράσης
            typeIntroPart2(index + 1); // Ξεκινάμε αμέσως το επόμενο μέρος χωρίς καθυστέρηση
        }
    }, introSpeed);
}

// Ξεκινάμε το animation μόλις φορτώσει η σελίδα
window.addEventListener("load", typeIntroPart1);
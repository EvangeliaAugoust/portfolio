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


// --- INTRO TEXT Animation (χωρίς επανάληψη, ξεκινάει με το load) --- 
const introPart1 = "Hi! 👋"; // Το πρώτο κομμάτι που περιλαμβάνει το "Hi! 👋"
const introText = " I’m an aspiring UX/UI Designer with a background in Computer Science, passionate about creating intuitive and user-friendly designs✨"; // Το υπόλοιπο κείμενο

let introElement = document.querySelector("#introText");
let introLetter = 0;
let introSpeed = 40;

// Εμφανίζουμε το πρώτο κομμάτι με το "Hi! 👋"
introElement.innerHTML = "";
introElement.style.visibility = "visible"; // Δείχνουμε το κείμενο μόλις ξεκινήσει το animation

// Λειτουργία για το πρώτο μέρος του animation (μόνο το "Hi! 👋")
function typeIntroPart1() {
    let interval = setInterval(() => {
        if (introLetter < introPart1.length) { // Γράφουμε μόνο το "Hi! 👋"
            introElement.innerHTML += introPart1[introLetter];
            introLetter++;
        } else {
            clearInterval(interval); // Σταματάμε μόλις ολοκληρωθεί το "Hi! 👋"
            introLetter = 0; // Επαναφέρουμε το introLetter για το επόμενο τμήμα
            setTimeout(typeIntroPart2, 1000); // Περιμένουμε 1 δευτερόλεπτο και μετά ξεκινάμε το δεύτερο μέρος
        }
    }, introSpeed);
}

// Λειτουργία για το δεύτερο μέρος του animation (το υπόλοιπο κείμενο)
function typeIntroPart2() {
    let interval = setInterval(() => {
        if (introLetter < introText.length) { 
            let char = introText[introLetter];

            // Προσθήκη αλλαγής γραμμής στα σωστά σημεία
            if (introText.startsWith(" Science,", introLetter)) {
                introElement.innerHTML += "<br>";
            } 
            if (introText.startsWith(" user-", introLetter)) {
                introElement.innerHTML += "<br>";
            }

            introElement.innerHTML += char;
            introLetter++;

            // Αν φτάσουμε στο τέλος, σταματάμε το animation
            if (introLetter === introText.length) {
                clearInterval(interval);
            }
        }
    }, introSpeed);
}

// Ξεκινάμε το animation μόλις φορτώσει η σελίδα
window.addEventListener("load", typeIntroPart1);

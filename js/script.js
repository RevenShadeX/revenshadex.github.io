const typing = document.getElementById("typing")

 const words = [
    "WEB DEVELOPER",
    "CYBERSECURITY",
    "SECURITY ENTHUSIAST"
];

let wordIndex = 0;
let charIndex = 0;
let deleting = false;

function typeEffect() {
    const currentWord = words[wordIndex];

    if (!deleting) {
        typing.textContent = currentWord.substring(0, charIndex + 1);
        charIndex++;

        if (charIndex == currentWord.length) {
            deleting = true;

            //wait
            setTimeout(typeEffect, 2000);
            return;
        }
    }
    else {
        typing.textContent = currentWord.substring(0, charIndex - 1);
        charIndex--;

        if (charIndex === 0) {
            deleting = false;
            wordIndex = (wordIndex + 1) % words.length;
        }
    }

    setTimeout(typeEffect, deleting ? 70 : 120);
}
typeEffect(); 


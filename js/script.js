// -----------------TYPING EFFECT--------------------
const textElement = document.getElementById("typing");
const text = textElement.innerHTML;
textElement.innerHTML = "";

let index = 0;
function typeText() {
    if (index < text.length) {
        textElement.innerHTML += text.charAt(index);
        index++;
        setTimeout(typeText, 100);
    }
}

typeText();

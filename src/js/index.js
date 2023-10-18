import { _text, _img } from "../../contexts/effects.js"

const Text = new _text();

Text.garbled("banner-text1", 1500, 0.5);
Text.garbled("banner-text2", 1500, 0.5);
function welcomeblink() {
    Text.garbled("welcome-text", 3000, 0.01);
    setTimeout(() => {
        welcomeblink()
    }, 10000);
}
welcomeblink()

const fadeDiv = document.getElementById("banner");

window.addEventListener('scroll', function () {
    const scrollHeight = window.scrollY;

    const triggerHeight = 100;

    if (scrollHeight > triggerHeight) {
        fadeDiv.style.opacity = '0';
    } else {
        fadeDiv.style.opacity = '1';
    }
});
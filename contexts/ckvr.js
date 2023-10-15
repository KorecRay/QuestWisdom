let ani;

window.addEventListener("click", (e) => {

    if (localStorage.getItem("hitVisual") == "OFF") {
        return;
    }

    clearTimeout(ani)
    var parent;

    if (!document.getElementById("ckvr-container")) {
        parent = document.createElement("div")
        document.body.appendChild(parent)
        parent.setAttribute("id", "ckvr-container")
    } else {
        parent = document.getElementById("ckvr-container")
        parent.innerHTML = ""
    }

    for (let k = 0; k < 7; k++) {
        var dom = document.createElement("div")
        dom.setAttribute("id", "ckvr-effect");
        const posX = (Math.random() - 0.5) * 30 + e.clientX;
        const posY = (Math.random() - 0.5) * 30 + e.clientY;
        dom.style.left = posX + "px";
        dom.style.top = posY + "px";
        parent.appendChild(dom)
    }
    ani = setTimeout(() => {
        parent.innerHTML = ""
    }, 1000)
});

window.onload = function () {
    var cssText = `
        #ckvr-effect {
            z-index: 1000;
            position: fixed;
            width: 10px;
            height: 10px;
            background-color: #2fbdf5;
            opacity: 0;
            box-shadow: 0 0 5px #2fbdf5;
            pointer-events: none;
            animation: cs 1s ease-out;
        }
        @keyframes cs {
            0% {
                opacity: 0.2;
                transform: rotote(0deg) scale(1);
                filter: hue-rotate(0deg);
            }
            50% {
                transform: rotate(180deg) scale(5);
            }
            100% {
                opacity: 0;
                transform: rotate(360deg) scale(5);
                filter: hue-rotate(90deg);
            }
        }
    `
    const addCSS = css => document.head.appendChild(document.createElement("style")).innerHTML = css;
    addCSS(cssText)
}
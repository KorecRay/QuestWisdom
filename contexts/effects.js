var specialCharArray = [
    'b', 'c', 'd', 'f', 'g', 'h', 'i', 'j', 'l', 
    'm', 'n', 'p', 'q', 'r', 's', 't', 'u', 'v', 'w', 'x', 
    'y', 'z', 'A', 'B', 'D', 'E', 'F', 'G', 'H', 'I', 'J', 
    'K', 'L', 'M', 'N', 'O', 'P', 'Q', 'R', 'S', 'T', 'U', 'V', 
    'W', 'X', 'Y', 'Z', 'Y', 'Z', 
    '0', '1', '2', '3', '4', '5', '6', '7', '8', '9',
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-',
    '+', '=', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',',
    '.', '<', '>', '?', '/'
];

export class _text {
    constructor() {
        this.enable = false;
        this.count = 0;
    }

    garbled(id, duration, rate) {

        if (!id || !duration) {
            throw new Error("Not enough arguments at garbled.Text()");
        }
        if(!rate) {
            rate = 0.5;
        }
        let stop = false;
        let textdom = document.getElementById(id);
        let text = textdom.innerText;
        let oritext = textdom.innerText;
        let charArr = text.split('');

        animation();
        function animation() {
            if (stop) {
                return;
            }
            for (let i = 0; i < charArr.length; i++) {
                if (Math.random() < rate && text[i] != ' ') {
                    charArr[i] = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
                }
                textdom.innerText = charArr.join('');
            }
            setTimeout(() => {
                animation();
            }, 100);
        }
        if (duration != "infinite") {
            setTimeout(function () {
                stop = true;
                textdom.innerText = oritext;
            }, duration);
        }
    }
}

export class _img {
    constructor() {
        
    }
}
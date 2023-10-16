var specialCharArray = [
    '!', '@', '#', '$', '%', '^', '&', '*', '(', ')', '_', '-',
    '+', '=', '[', ']', '{', '}', '|', ';', ':', "'", '"', ',',
    '.', '<', '>', '?', '/'
];
export class _Text {
    constructor() {
        this.enable = false;
        this.count = 0;
    }

    glitch(id, duration) {

        if(!id || !duration) {
            throw new Error ("Not enough arguments at glitch.Text()");
        }

        let stop = false;
        let textdom = document.getElementById(id);
        let text = textdom.innerText;
        let oritext = textdom.innerText;
        let charArr = text.split('');

        animation();
        function animation () {
            if(stop) {
                return;
            }
            for(let i = 0; i < charArr.length; i++) {
                if(Math.random() < 4) {
                    charArr[i] = specialCharArray[Math.floor(Math.random() * specialCharArray.length)];
                }
                textdom.innerText = charArr.join('');
            }
            setTimeout(() => {
                animation();
            }, 100);
        }
        setTimeout(function(){
            stop = true;
            textdom.innerText = oritext;
        }, duration);
    }
}
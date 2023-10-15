// Default


// const canvas = document.getElementById('canvas1');
// const ctx = canvas.getContext('2d');

// canvas.width = window.innerWidth;
// canvas.height = window.innerHeight;

// const waves = [];

// function initWaves() {
//     for (let i = 0; i < 5; i++) {
//         waves.push({
//             yOffset: canvas.height / 2,
//             amplitude: Math.random() * 50 + 20,
//             frequency: Math.random() * 0.01 + 0.005,
//             phase: Math.random() * Math.PI * 2,
//             speed: Math.random() * 0.05 + 0.025,
//             lineWidth: Math.random() * 4 + 1
//         });
//     }
// }

// function drawWaves() {
//     ctx.clearRect(0, 0, canvas.width, canvas.height);

//     waves.forEach(wave => {
//         const gradientUp = ctx.createLinearGradient(canvas.width / 2, 0, canvas.width / 2, wave.yOffset);
//         gradientUp.addColorStop(0, 'rgba(173, 216, 230, 0)');
//         gradientUp.addColorStop(0.2, 'rgba(173, 216, 230, 0.2)');
//         gradientUp.addColorStop(0.8, 'rgba(173, 216, 230, 0.2)');
//         gradientUp.addColorStop(1, 'rgba(173, 216, 230, 0)');

//         const gradientDown = ctx.createLinearGradient(canvas.width / 2, wave.yOffset, canvas.width / 2, canvas.height);
//         gradientDown.addColorStop(0, 'rgba(176, 224, 230, 0)');
//         gradientDown.addColorStop(0.2, 'rgba(176, 224, 230, 0.2)');
//         gradientDown.addColorStop(0.8, 'rgba(176, 224, 230, 0.2)');
//         gradientDown.addColorStop(1, 'rgba(176, 224, 230, 0)');
        

//         ctx.shadowBlur = 20;
//         ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

//         ctx.beginPath();

//         ctx.moveTo(0, 0);
//         ctx.lineTo(canvas.width, 0);
//         ctx.lineTo(canvas.width, wave.yOffset);
//         ctx.lineTo(0, wave.yOffset);

//         ctx.fillStyle = gradientUp;
//         ctx.fill();

//         ctx.moveTo(0, wave.yOffset);
//         ctx.lineTo(canvas.width, wave.yOffset);
//         ctx.lineTo(canvas.width, canvas.height);
//         ctx.lineTo(0, canvas.height);

//         ctx.fillStyle = gradientDown;
//         ctx.fill();

//         ctx.shadowBlur = 0;

//         ctx.beginPath();

//         for (let x = 0; x < canvas.width; x += 5) {
//             const y = wave.yOffset + Math.sin(wave.phase + x * wave.frequency) * wave.amplitude * Math.cos(wave.phase + x * 0.002);
//             ctx.lineTo(x, y);
//         }

//         ctx.lineTo(canvas.width, 0);
//         ctx.lineTo(0, 0);
//         ctx.closePath();

//         ctx.fillStyle = gradientUp;
//         ctx.fill();

//         ctx.beginPath();
//         ctx.moveTo(0, 0);

//         for (let x = 0; x < canvas.width; x += 5) {
//             const y = wave.yOffset + Math.sin(wave.phase + x * wave.frequency) * wave.amplitude * Math.cos(wave.phase + x * 0.002);
//             ctx.lineTo(x, y);
//         }

//         ctx.lineTo(canvas.width, canvas.height);
//         ctx.lineTo(0, canvas.height);
//         ctx.closePath();

//         ctx.fillStyle = gradientDown;
//         ctx.fill();

//         ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
//         ctx.lineWidth = wave.lineWidth;
//         ctx.stroke();

//         wave.phase += wave.speed;
//     });

//     setTimeout(() => {
//         requestAnimationFrame(drawWaves);
//     }, 15);
// }

// window.addEventListener('resize', () => {
//     canvas.width = window.innerWidth;
//     canvas.height = window.innerHeight;
//     waves.forEach(wave => {
//         wave.yOffset = canvas.height / 2;
//     });
// });

// initWaves();
// drawWaves();




// Highlighter

const canvas = document.getElementById('canvas1');
const ctx = canvas.getContext('2d');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const waves = [];

function initWaves() {
    for (let i = 0; i < 5; i++) {
        waves.push({
            yOffset: canvas.height / 2,
            amplitude: Math.random() * 50 + 20,
            frequency: Math.random() * 0.01 + 0.005,
            phase: Math.random() * Math.PI * 2,
            speed: Math.random() * 0.05 + 0.025,
            lineWidth: Math.random() * 4 + 1
        });
    }
}

function drawWaves() {
    ctx.clearRect(0, 0, canvas.width, canvas.height);

    waves.forEach(wave => {
        const gradientUp = ctx.createLinearGradient(canvas.width / 2, 0, canvas.width / 2, wave.yOffset);
        gradientUp.addColorStop(0, 'rgba(173, 216, 230, 0)');
        gradientUp.addColorStop(0.2, 'rgba(173, 216, 230, 0.2)');
        gradientUp.addColorStop(0.8, 'rgba(173, 216, 230, 0.2)');
        gradientUp.addColorStop(1, 'rgba(173, 216, 230, 0)');

        const gradientDown = ctx.createLinearGradient(canvas.width / 2, wave.yOffset, canvas.width / 2, canvas.height);
        gradientDown.addColorStop(0, 'rgba(176, 224, 230, 0)');
        gradientDown.addColorStop(0.2, 'rgba(176, 224, 230, 0.2)');
        gradientDown.addColorStop(0.8, 'rgba(176, 224, 230, 0.2)');
        gradientDown.addColorStop(1, 'rgba(176, 224, 230, 0)');
        

        ctx.shadowBlur = 20;
        ctx.shadowColor = 'rgba(0, 0, 0, 0.5)';

        ctx.beginPath();

        ctx.moveTo(0, 0);
        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(canvas.width, wave.yOffset);
        ctx.lineTo(0, wave.yOffset);

        ctx.fillStyle = gradientUp;
        ctx.fill();

        ctx.moveTo(0, wave.yOffset);
        ctx.lineTo(canvas.width, wave.yOffset);
        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);

        ctx.fillStyle = gradientDown;
        ctx.fill();

        ctx.shadowBlur = 0;

        ctx.beginPath();

        for (let x = canvas.width; x > 0; x -= 5) {
            const y = wave.yOffset + Math.sin(wave.phase + x * wave.frequency) * wave.amplitude * Math.cos(wave.phase + x * 0.002);
            ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, 0);
        ctx.lineTo(0, 0);
        ctx.closePath();

        ctx.fillStyle = gradientUp;
        ctx.fill();

        ctx.beginPath();
        ctx.moveTo(0, 0);

        for (let x = canvas.width; x > 0; x -= 5) {
            const y = wave.yOffset + Math.sin(wave.phase + x * wave.frequency) * wave.amplitude * Math.cos(wave.phase + x * 0.002);
            ctx.lineTo(x, y);
        }

        ctx.lineTo(canvas.width, canvas.height);
        ctx.lineTo(0, canvas.height);
        ctx.closePath();

        ctx.fillStyle = gradientDown;
        ctx.fill();

        ctx.strokeStyle = 'rgba(255, 255, 255, 0.5)';
        ctx.lineWidth = wave.lineWidth;
        ctx.stroke();

        wave.phase += wave.speed;
    });

    setTimeout(() => {
        requestAnimationFrame(drawWaves);
    }, 25);
}

window.addEventListener('resize', () => {
    canvas.width = window.innerWidth;
    canvas.height = window.innerHeight;
    waves.forEach(wave => {
        wave.yOffset = canvas.height / 2;
    });
});

initWaves();
drawWaves();
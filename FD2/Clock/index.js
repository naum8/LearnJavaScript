let container = document.querySelector('.container');
let blockСircle = document.createElement('div');
blockСircle.id = 'blockCircle';
container.appendChild(blockСircle);

let arrowHour = document.createElement('div');
let arrowMin = document.createElement('div');
let arrowSec = document.createElement('div');
let centerСircle = document.createElement('div');
arrowHour.classList.add('arrowHour-class');
arrowHour.id = 'arrowHour';
arrowMin.classList.add('arrowMin-class');
arrowMin.id = 'arrowMin';
arrowSec.classList.add('arrowSec-class');
arrowSec.id = 'arrowSec';
centerСircle.classList.add('centerСircle-class');
centerСircle.id = 'centerСircle';
blockСircle.appendChild(arrowHour);
blockСircle.appendChild(arrowMin);
blockСircle.appendChild(arrowSec);
blockСircle.appendChild(centerСircle);

//let centerСircle
let deg = 6;
const dotCenterX = centerСircle.offsetLeft + centerСircle.offsetWidth/2;
const dotCenterY = centerСircle.offsetTop + centerСircle.offsetHeight/2;
let stepDeg = 30;
let radius = 270;
for(let i = 1; i <= 12; i++) {
   let blockNumber = document.createElement('div');
   let stepDegRadius = parseFloat(stepDeg)/180*Math.PI;
   let centerX = dotCenterX + radius * Math.sin(stepDegRadius);
   let centerY = dotCenterY - radius * Math.cos(stepDegRadius);
   blockNumber.classList.add('blockNumber');
   blockNumber.textContent = i;
   blockСircle.appendChild(blockNumber);

   blockNumber.style.left = Math.round(centerX-blockNumber.offsetWidth/2) + "px";
   blockNumber.style.top = Math.round(centerY-blockNumber.offsetHeight/2) + "px";
   stepDeg = stepDeg + 30;
}
setInterval(() => {
   let today = new Date();
   let hh = today.getHours() * 30;
   let mm = today.getMinutes() * deg;
   let ss = today.getSeconds() * deg;

   arrowHour.style.transform = `rotateZ(${(hh) + (mm/12)}deg)`;
   arrowMin.style.transform = `rotateZ(${(mm)}deg)`;
   arrowSec.style.transform = `rotateZ(${(ss)}deg)`;
});


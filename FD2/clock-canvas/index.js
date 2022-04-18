let canvas = document.getElementById('block');
let ctx = canvas.getContext('2d');

let radius = canvas.height / 2;
ctx.translate(radius, radius);
radius = radius * 0.90
drawClock();
function drawClock() {
   ctx.arc(0, 0, radius, 0 , 2 * Math.PI);
   ctx.fillStyle = "grey";
   ctx.fill();
}

function drawClock() {
   drawFace(ctx, radius);
}
function drawFace(ctx, radius) {
   let grad;

   ctx.beginPath();
   ctx.arc(0, 0, radius, 0, 2 * Math.PI);
   ctx.fillStyle = 'grey';
   ctx.fill();

   grad = ctx.createRadialGradient(0, 0 ,radius * 1, 0, 0, radius * 1.01);
   grad.addColorStop(0, 'black');
   ctx.strokeStyle = grad;
   ctx.lineWidth = radius*0.03;
   ctx.stroke();

   ctx.beginPath();
   ctx.arc(0, 0, radius * 0.07, 0, 2 * Math.PI);
   ctx.fillStyle = 'black';
   ctx.fill();
}

function drawClock() {
   drawFace(ctx, radius);
   drawNumbers(ctx, radius);
}
function drawNumbers(ctx, radius) {
   let ang;
   let num;
   ctx.font = radius * 0.2 + "px arial";
   ctx.textBaseline = "middle";
   ctx.textAlign = "center";
   for(num = 1; num <= 12; num++){
      ang = num * Math.PI / 6;
      ctx.rotate(ang);
      ctx.translate(0, -radius * 0.85);
      ctx.rotate(-ang);
      ctx.fillText(num.toString(), 0, 0);
      ctx.rotate(ang);
      ctx.translate(0, radius * 0.85);
      ctx.rotate(-ang);
   }
}

function drawClock() {
   drawFace(ctx, radius);
   drawNumbers(ctx, radius);
   drawTime(ctx, radius);
   
}

function drawTime(ctx, radius){
   let now = new Date();
   let hour = now.getHours();
   let minute = now.getMinutes();
   let second = now.getSeconds();
   if (second < 10){
      second = `0${second}`;           
   }
   if (minute  < 10) {
      minute  = `0${minute }`;   
   }
   if (hour < 10) {
      hour = `0${hour}`; 
      
   }
   const numberString = `${hour}:${minute}:${second}`;    
   ctx.font = "60px arial";
   ctx.fillStyle = "white";
   ctx.textAlign = "center";          
   ctx.fillText(numberString,  radius*0.1, radius*0.3); 
   //hour
   hour = hour%12;
   hour = (hour*Math.PI/6)+(minute*Math.PI/(6*60))+(second*Math.PI/(360*60));
   drawHand(ctx, hour, radius*0.5, radius*0.06);
   //minute
   minute = (minute*Math.PI/30)+(second*Math.PI/(30*60));
   drawHand(ctx, minute, radius*0.85, radius*0.05);
   // second
   second = (second*Math.PI/30);
   drawHand(ctx, second, radius*0.95, radius*0.01);
}
function drawHand(ctx, pos, length, width) {
   ctx.beginPath();
   ctx.lineWidth = width;
   ctx.lineCap = "round";
   ctx.moveTo(0,0);
   ctx.rotate(pos);
   ctx.lineTo(0, -length);
   ctx.stroke();
   ctx.rotate(-pos);
}
setInterval(drawClock, 1000);

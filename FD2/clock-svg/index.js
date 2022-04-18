const svgNS = "http://www.w3.org/2000/svg";
function doSVG() {
   let block = document.getElementById('block');
   let widthLine = parseFloat(block.getAttributeNS(null, "width"));
   let heightLine = parseFloat(block.getAttributeNS(null, "height"));

   let circle = document.createElementNS(svgNS, 'circle');
   circle.setAttributeNS(null, 'cx', widthLine/2);
   circle.setAttributeNS(null, 'cy', heightLine/2);
   circle.setAttributeNS(null, 'r', (widthLine-20)/2);
   circle.setAttributeNS(null, 'fill', 'rgb(99, 94, 94)');
   circle.setAttributeNS(null,"stroke","black");
   circle.setAttributeNS(null,"stroke-width", 5);

   block.append(circle);

   let stepDeg = 30;
   let radius = 250;
   for(let i = 1; i <= 12; i++) {
      let blockNumber = document.createElementNS(svgNS,"circle");
      let stepDegRadius = parseFloat(stepDeg)/180*Math.PI;
      let centerX = widthLine/2 + radius * Math.sin(stepDegRadius);
      let centerY = heightLine/2 - radius * Math.cos(stepDegRadius);

      let number = document.createElementNS(svgNS, 'text');
      number.textContent = i;
      number.classList = 'numberStyle';
      
      blockNumber.setAttributeNS(null,"cx", centerX);
      blockNumber.setAttributeNS(null,"cy", centerY);
      blockNumber.setAttributeNS(null,"r",  "26");
      blockNumber.setAttributeNS(null,"fill", "rgb(99, 94, 94)");
      blockNumber.setAttributeNS(null,"stroke","black");
      blockNumber.setAttributeNS(null,"stroke-width", 3);
      
      block.append(blockNumber);  

      number.setAttributeNS(null,"x", centerX);
      number.setAttributeNS(null,"y", centerY);
      number.setAttributeNS(null,"fill", "white");
      number.setAttributeNS(null, "text-anchor", "middle");
      number.setAttributeNS(null, "dominant-baseline", "middle"); 
      block.append(number);

      stepDeg = stepDeg + 30;
   }
   let line = document.createElementNS(svgNS, "line");
   line.setAttributeNS(null,"x1", widthLine/2);
   line.setAttributeNS(null,"y1", heightLine/2);
   line.setAttributeNS(null,"x2", widthLine/2);
   line.setAttributeNS(null,"y2", "50");
   line.setAttributeNS(null,"stroke", "black");
   line.setAttributeNS(null,"stroke-width", 6);
   line.setAttributeNS(null,"stroke-linecap", "round");
   line.id = "arrowSecond";
   block.append(line);

   let lineMin = document.createElementNS(svgNS, "line");
   lineMin.setAttributeNS(null,"x1", widthLine/2);
   lineMin.setAttributeNS(null,"y1", heightLine/2);
   lineMin.setAttributeNS(null,"x2", widthLine/2);
   lineMin.setAttributeNS(null,"y2", "100");
   lineMin.setAttributeNS(null,"stroke", "black");
   lineMin.setAttributeNS(null,"stroke-width", 14);
   lineMin.setAttributeNS(null,"stroke-linecap", "round");
   lineMin.id = "arrowMin";
   block.append(lineMin);

   let lineHour = document.createElementNS(svgNS, "line");
   lineHour.setAttributeNS(null,"x1", widthLine/2);
   lineHour.setAttributeNS(null,"y1", heightLine/2);
   lineHour.setAttributeNS(null,"x2", widthLine/2);
   lineHour.setAttributeNS(null,"y2", "160");
   lineHour.setAttributeNS(null,"stroke", "black");
   lineHour.setAttributeNS(null,"stroke-width", 18);
   lineHour.setAttributeNS(null,"stroke-linecap", "round");
   lineHour.id = "arrowHour";
   block.append(lineHour);   

   let center = document.createElementNS(svgNS,"circle");
   center.setAttributeNS(null,"cx", widthLine/2);
   center.setAttributeNS(null,"cy", heightLine/2);
   center.setAttributeNS(null,"r",  "15");
   center.setAttributeNS(null,"fill","black");
   block.append(center);
}
doSVG();

let arrowHour = document.getElementById('arrowHour');
let arrowMin = document.getElementById("arrowMin");
let arrowSec = document.getElementById("arrowSecond");

let block = document.getElementById("block");
let clock = document.createElementNS(svgNS,"text");
let width = block.getAttributeNS(null, "width");
let height = block.getAttributeNS(null, "height");
setInterval(() => {
   let today = new Date();
   let hh = today.getHours();
   let mm = today.getMinutes();
   let ss = today.getSeconds();

   let stepOneArrow = 6;
   let stepOneArrowHour = 30;
   let timeStepInterval = (1/60);
   arrowSec.setAttributeNS(null,"transform", `rotate(${ss*stepOneArrow}, ${width/2}, ${height/2})`);
   arrowMin.setAttributeNS(null,"transform", `rotate(${(stepOneArrow*(mm + timeStepInterval * ss))},  ${width/2}, ${height/2})`);
   arrowHour.setAttributeNS(null,"transform", `rotate(${(stepOneArrowHour*(hh + timeStepInterval * mm))}, ${width/2}, ${height/2})`);

   if(ss < 10) {
      ss = `0${ss}`;
   };
   if(mm < 10) {
      mm = `0${mm}`;
   };
   if(hh < 10) {
      hh = `0${hh}`;
   } 
   clock.textContent = `${hh}:${mm}:${ss}`;
   clock.setAttributeNS(null, "text-anchor", "middle");
   clock.setAttributeNS(null,"x", width/2);
   clock.setAttributeNS(null,"y", height/3);
   clock.setAttributeNS(null,"fill", "white"); 
   clock.classList = 'clock-number-Style';
   block.append(clock);
});

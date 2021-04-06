var canvas = document.querySelector("#Clock");
var ctx = canvas.getContext("2d");
ctx.translate(250, 250);
var gradient = ctx.createRadialGradient(0, 0, 150, 0, 0, 500);
gradient.addColorStop(0.1, "#2d3436");
gradient.addColorStop(0.2, "#ffb142");
// gradient.addColorStop(0.25, "#84817a");

function drawClock() {
  ctx.fillStyle = gradient;
  ctx.fillRect(-250, -250, 500, 500);
  let radius = 250 * 0.9;
  ctx.fillStyle = "#bdc3c7";
  ctx.font = "30px Arial";
  ctx.font = radius * 0.15 + "px Vazir";
  ctx.textBaseline = "middle";
  ctx.textAlign = "center";
  for (let num = 12; num > 0; num--) {
    ctx.fillText(num.toString(), 0, -150);
    ctx.rotate((-30 * Math.PI) / 180);
  }
}
function drawTime(ctx, radius) {
  let now = new Date();
  let hour = now.getHours();
  let minute = now.getMinutes();
  let second = now.getSeconds();
  hour = hour % 12;
  hour = (hour * Math.PI) / 6 + (minute * Math.PI) / (6 * 60);
  drawHand(ctx, hour, radius * 0.5, radius * 0.07);
  minute = minute * (Math.PI / 30);
  drawHand(ctx, minute, radius * 0.8, radius * 0.07);
  second = second * (Math.PI / 30);
  drawHand(ctx, second, radius * 0.9, radius * 0.02);
  ctx.beginPath();
  ctx.arc(0, 0, 12.5, 0, 2 * Math.PI);
  ctx.fillStyle = "#aaa69d";
  ctx.fill();
}

function drawHand(ctx, pos, length, width) {
  ctx.beginPath();
  ctx.lineWidth = width;
  ctx.lineCap = "round";
  ctx.moveTo(0, 0);
  ctx.rotate(pos);
  ctx.lineTo(0, -length);
  ctx.strokeStyle = "#f1c40f";
  ctx.stroke();
  ctx.rotate(-pos);
}

function startTime() {
  setInterval(() => {
    drawClock();
    drawTime(ctx, 150);
  }, 1000);
}
export default startTime;
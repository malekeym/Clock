import "./Clock.css"
function initialClock(){
  var canvas = document.querySelector("#canvasClock");
  var ctx = canvas.getContext("2d");
  const height = 480/2;
  console.log(height)
  ctx.translate(height, height);
  let radius = height * 0.6;
  var gradient = ctx.createRadialGradient(0, 0, radius, 0, 0, height*2);
  gradient.addColorStop(0.2, "#2d343600");
  gradient.addColorStop(0.1, "#ffb142");
  function drawClock(ctx) {
    ctx.fillStyle = gradient;
    ctx.fillRect(-height, -height, height*2, height*2);
    ctx.fillStyle = "#130f40";
    ctx.font = "30px Arial";
    ctx.font = radius * 0.15 + "px Vazir";
    ctx.textBaseline = "middle";
    ctx.textAlign = "center";
    for (let num = 12; num > 0; num--) {
      ctx.fillText(num.toString(), 0, -radius);
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
    ctx.fillStyle = "#2C5364";
    ctx.fill();
  }
  
  function drawHand(ctx, pos, length, width) {
    ctx.beginPath();
    ctx.lineWidth = width;
    ctx.lineCap = "round";
    ctx.moveTo(0, 0);
    ctx.rotate(pos);
    ctx.lineTo(0, -length);
    ctx.strokeStyle = "#0F2027";
    ctx.stroke();
    ctx.rotate(-pos);
  }
  return {drawClock, drawTime, ctx}
}

function clockHandler(){
  function startTime() {
    const {drawClock,drawTime, ctx} = initialClock()
    setInterval(() => {
      drawClock(ctx);
      drawTime(ctx, 150);
    }, 1000);
  }
  return(
    <div id="Clock">
      <canvas id="canvasClock" width="500" height="500"></canvas>
      <button className="ui yellow button"onClick={startTime} >start clock</button>
    </div>
  )
}
export default clockHandler;
var mouseEvent = 0;
var color = "";
var width_of_line = 0;

canvas = document.getElementById("myCanvas");
ctx = canvas.getContext("2d");

canvas.addEventListener("mousedown", my_mousedown);
function my_mousedown(e) {
  color = document.getElementById("color").value;
  width_of_line = document.getElementById("width_of_line").value;
  mouseEvent = "mousedown";
}

canvas.addEventListener("mouseUP", my_mouseUP);
function my_mouseUP(e) {
  mouseEvent = "mouseUP";
}

canvas.addEventListener("mouseleave", my_mouseleave);
function my_mouseleave(e) {
  mouseEvent = "mouseleave";
}

canvas.addEventListener("mousemove", my_mousemove);

function my_mousemove(e) {
  var current_position_of_mouse_x = e.clientX - canvas.offsetLeft;
   var current_position_of_mouse_y = e.clientY - canvas.offsetTop;
  
  if (mouseEvent == "mouseDown") {
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;
  ctx.moveTo(last_position_of_x, last_position_of_y);
  ctx.lineTo(current_postion_of_mouse_x, current_position_of_mouse_y);
  ctx.stroke();
}
  last_position_of_mouse_x = current_position_of_mouse_x;
  last_position_of_mouse_y = current_position_of_mouse_y;
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchstart(e) {
  var last_position_of_touch_x = current_postion_of_touch_x;
  var last_position_of_touch_y = current_position_of_touch_y;
}

canvas.addEventListener("touchstart", my_touchstart);

function my_touchmove(e) {
  var current_position_of_touch_x = e.touches[0].clientX - canvas.offsetLeft;
  var current_position_of_touch_y = e.touches[0].clientY - canvas.offsetTop;
  ctx.beginPath();
  ctx.strokeStyle = color;
  ctx.lineWidth = width_of_line;
  ctx.moveTo(last_position_of_x, last_position_of_y);
  ctx.lineTo(current_position_of_mouse_x, current_position_of_mouse_y);
  ctx.stroke();
  
   last_position_of_touch_x = current_position_of_touch_x;
  last_position_of_touch_y = current_position_of_touch_y;
}

function clearArea() { 
    ctx.clearRect(0, 0, ctx.canvas.width, ctx.canvas.height); 
}
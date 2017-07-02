const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

//ctx.fillRect(x, y, width, height);
ctx.fillStyle = 'rgba(255, 0, 0, 0.5)';
ctx.fillRect(100, 100, 100, 100);

// Canvas Objects:
//   1) Rectangles
//   2) Lines
//   3) Arcs / Cricles
//   4) Bezier Curves
//   5) Images
//   6) Text

ctx.beginPath();

//c.moveTo(x, y);

ctx.moveTo(50, 300);
ctx.lineTo(300, 100);
ctx.lineTo(400, 300);

//Storke is used t00 paint the line in canvas
ctx.strokeStyle = '#fa34a3';
ctx.stroke();

//Arcs / Circles

// ctx.arc(x: Int, y: Int, r: Int, startAngle: Float, endAngle: Float,
//         drawCounterClockwise: Bool (false));

ctx.arc(300, 300, 30, 0, Math.PI * 2, false);
ctx.strokeStyle = 'blue';
ctx.stroke();

const canvas = document.querySelector('canvas');

canvas.width = window.innerWidth;
canvas.height = window.innerHeight;

const ctx = canvas.getContext('2d');

let mouse =  {
  x: undefined,
  y: undefined,
};

const colorArray  = [
  '#E6E2AF',
  '#A7A39F',
  '#EF64CA',
  '#046380',
  '#008A8A',
];

const colorArray1 = [
  '#01A2A6',
  '#2F2933',
  '#29D9C2',
  '#BDF271',
  '#B0B072',
];

const colors = {
  colorArray,
  colorArray1,
};

window.addEventListener('mousemove', function(event) {
  mouse.x = event.x;
  mouse.y = event.y;
});

window.addEventListener('resize', function(event) {
  canvas.width = window.innerWidth;
  canvas.height = window.innerHeight;
  initAppear();
});

function Circle(x, y, dx, dy, radius, color) {
  this.x = x;
  this.y = y;
  this.dx = dx;
  this.dy = dy;
  this.radius = radius;

  this.draw = () => {
    ctx.beginPath();
    ctx.arc(x, y, radius, 0, Math.PI * 2, false);
    ctx.strokeStyle = color;
    ctx.fillStyle = color;
    ctx.stroke();
    ctx.fill();
  };

  this.update = () => {
    if (x + radius > innerWidth || x - radius < 0) {
      dx = -dx;
    }

    if (y + radius > innerHeight || y - radius < 0) {
      dy = -dy;
    }

    x += dx;
    y += dy;

    // Interactivity
    if (mouse.x - x < 50 && mouse.x - x > -50  &&
    mouse.y - y < 50 && mouse.y - y > -50) {
      if (radius < 40) {
        radius += 1;
      }
    } else if (radius > 2) {
      radius -= 1;
    }

    this.draw();
  };
}

let circleArray  = [];

const initAppear = (function init() {
  circleArray = [];
  for (let i = 0; i < 500; i++) {
    let x = Math.random() * innerWidth;
    let y = Math.random() * innerHeight;
    let dx = (Math.random() - 0.5) * 3;
    let dy = (Math.random() - 0.5) * 3;
    const color = colorArray1[Math.floor(Math.random() * colorArray.length)];
    const radius = Math.random() * 8 + 1;
    circleArray.push(new Circle(x, y, dx, dy, radius, color));
  }
})();

(function animate() {
  requestAnimationFrame(animate);
  ctx.clearRect(0, 0, innerWidth, innerHeight);
  for (var i = 0; i < circleArray.length; i++) {
    circleArray[i].update();
  }
})();

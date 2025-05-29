function setup() {
  createCanvas(400, 400);
}

function draw() {
  background(220);
}let x;
let y;

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(220);
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);
  
   fill (178,34,34)
  square(x, y,10);
  console.log(distancia);

  if (mouseX == x && mouseY == y) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}

function setup() {
  createCanvas(400, 400);
  x = random(400);
  x = int(x);
  y = random(400);
  y = int(y);
}

function draw() {
  background(0,10,10);3
  let distanciaX;
  let distanciaY;
  let distancia;
  distanciaX = mouseX - x;
  distanciaY = mouseY - y;
  //distancia = sqrt(distanciaX*distanciaX + distanciaY*distanciaY);
  distancia = dist(mouseX,mouseY,x,y);
square(mouseX, mouseY, distancia);
  //square (x, y, 10);
  //console.log(distancia);

  if (distancia < 3) {
    text("Encontrei!", 200, 200);
    noLoop();
  }
}



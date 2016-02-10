var x;
var y;
var x2;
var y2;

function setup () {
  createCanvas (700,700);
  background (0);
  x=100;
  y=100;
  x2=500;
  y2=500;
}

function draw () {
  PacMan();
  x++;
  
if (x > 350) {
  x=350;
  y++;
}  

  PacMan2 ();
  x2--;

if (x2 < 250){
  x2= 250;
  y2--;
 }
}

function PacMan() {
  stroke (0);
  fill (255,204,0);
  arc(x, y , 80, 80, 0, PI+QUARTER_PI);
 }

function PacMan2 () {
 fill (255,0,0);
 stroke (0);
 arc(x2, y2 , 80, 80, 0, PI+QUARTER_PI);
}
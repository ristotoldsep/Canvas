let canvas = document.querySelector('#my-canvas'); //Selecting the canvas

let ctx = canvas.getContext('2d'); //Required to specify use context to draw on canvas - 3D other option

ctx.strokeStyle = '#0f0';
ctx.lineWidth = 4;


/** Drawing a triangle */
ctx.moveTo(200, 50); //in pixels - Starting point (X, Y) coordinate (From width x height)
ctx.lineTo(600, 300); //Ending point (x, y)

ctx.stroke(); //Actually draws the line on the canvas

ctx.closePath(); //Move pencil back to initial position

ctx.lineTo(200, 300);
ctx.stroke();

ctx.lineTo(600, 300);
ctx.stroke();
//============================
/** Drawing a rectangle */
ctx.strokeRect(200, 350, 200, 100); //(x, y, width, height in px)
ctx.strokeRect(350, 400, 200, 100); //(x, y, width, height in px)

ctx.fillRect(350, 400, 50, 50); //Fill the rectangle (start x, start y, width, height)
ctx.clearRect(362, 412, 25, 25); //Eraser

/** Flag */
ctx.strokeStyle = '#000';
ctx.fillStyle = '#00f';
ctx.strokeRect(650, 100, 150, 50);
ctx.fillRect(650, 100, 150, 50);
ctx.fillStyle = '#000';
ctx.strokeRect(650, 150, 150, 50);
ctx.fillRect(650, 150, 150, 50);
ctx.fillStyle = '#fff';
ctx.strokeRect(650, 200, 150, 50);
ctx.fillRect(650, 200, 150, 50);
//===============
/**Circle */
ctx.moveTo(600,400);
ctx.beginPath();

/* ctx.arc(600,400, 20, 0, 2 * Math.PI); //(X, Y, Radius, Starting angle, ending angle * Math.PI (angles in radians!))
ctx.stroke(); */

/**Panda */
let strokeArc = (lineWidth, color, x, y, r, startAngle, endAngle) => {
    ctx.beginPath();
    ctx.lineWidth = lineWidth;
    ctx.strokeStyle = color;
    ctx.arc(x, y, r, startAngle, endAngle);
    ctx.stroke();
}

/* ctx.beginPath();
ctx.arc(750,400, 100, 0, 2 * Math.PI);
ctx.stroke(); */
strokeArc(10, '#000', 750, 400, 100, 0, 2 * Math.PI);

 //NEW PATH - EYE
ctx.beginPath(); //Black
ctx.fillStyle = '#000';
ctx.arc(710,370, 20, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath(); //White
ctx.fillStyle = '#fff';
ctx.arc(710,370, 10, 0, 2 * Math.PI);
ctx.fill();

ctx.beginPath(); //Black
ctx.fillStyle = '#000';
ctx.arc(710,370, 5, 0, 2 * Math.PI);
ctx.fill();


 //NEW PATH - Second EYE - Optimized with a function
let fillArc = (color, x, y, r, startAngle, endAngle) => {
    ctx.beginPath(); 
    ctx.fillStyle = color;
    ctx.arc(x, y, r, startAngle, endAngle);
    ctx.fill();
}

fillArc('#000', 780, 370, 20, 0, 2 * Math.PI);
fillArc('#fff', 780, 370, 10, 0, 2 * Math.PI);
fillArc('#000', 780, 370, 5, 0, 2 * Math.PI);

//Nose
fillArc('#000', 745, 400, 15, 0, 2 * Math.PI);

//Mouth
strokeArc(10, '#000', 745, 440,30, 0.2, Math.PI - 0.2);

fillArc('#000', 690, 320, 20, Math.PI - 0.8, -0.8);
fillArc('#000', 810, 320, 20, Math.PI + 0.35, Math.PI - 0.8 * Math.PI);

let saveBtn = document.querySelector('.save');
let restoreBtn = document.querySelector('.restore');

ctx.beginPath();
ctx.fillStyle = '#000';
ctx.moveTo(80,50);
ctx.lineTo(180,50);
ctx.lineTo(130,100);
ctx.lineTo(80,50);
ctx.fill();

//Saving and restoring state
let savedData;
saveBtn.addEventListener('click', () => {
    savedData = ctx.getImageData(0,0,1000,600);
    ctx.beginPath();
    ctx.fillStyle = '#ff0';
    ctx.arc(130,70, 20, 0, 2 * Math.PI);
    ctx.fill();
})

restoreBtn.addEventListener('click', () => {
    ctx.putImageData(savedData, 0, 0);
})









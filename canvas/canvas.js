loadImg();
function loadImg(){
	document.querySelector('.backArrow').src = "img/back_arrow.png";
	document.querySelector('.dottedSquare').src = "img/dotted-square.png";
	document.querySelector('.eraser').src = "img/eraser.jpg";
	document.querySelector('.pen_one').src = "img/pen_1.png";
	document.querySelector('.pen_two').src = "img/pen_2.png";
	document.querySelector('.pen_three').src = "img/pen_3.png";
	document.querySelector('.grid').src = "img/grid.png";
	document.querySelector('.undo').src = "img/undo.png";
	document.querySelector('.redo').src = "img/redo.png";
	document.querySelector('.expand').src = "img/expand.png";
	document.querySelector('.more').src = "img/more.png";
}

let panel = document.querySelector('#drawingPanel');
panel.style.backgroundColor = "rgb(250, 250, 250)";
panel.style.width = "1355px";
panel.style.height = "607px";
let ctx = panel.getContext('2d');
draw();

function draw(){
	let draw_tool = 'chalk';
	ctx.strokeStyle = "black";
	ctx.lineWidth = 1.0;
	ctx.fillStyle = "rgb(250, 250, 250)";
	ctx.fillRect(0,0,897,532);
}
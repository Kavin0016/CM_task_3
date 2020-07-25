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
ctx.strokeStyle = "black";
ctx.lineWidth = 1;
let paint = true;
panel.addEventListener('click',function(){alert("hi");});
panel.addEventListener('mousedown',mouse_down);
panel.addEventListener('mousemove',mouse_move);
panel.addEventListener('mouseup',mouse_up);


function mouse_down(ev){
	ctx.beginPath(); 
 	ctx.moveTo(ev._x, ev._y); 
 	paint = true;
}

function mouse_move(ev){
	if (paint) {
		ctx.beginPath(); 
 		ctx.lineTo(ev.clientX, ev.clientY); 
 		ctx.stroke(); 
 	}
}

function mouse_up(ev){
	if (paint){ 
 		// tool.mousemove(ev); 
 		paint = true;
 		ctx.closePath();
 		// img_update();
 	}
}
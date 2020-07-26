document.addEventListener('DOMContentLoaded', loadAll,false);

let panel = document.querySelector('#drawingPanel');
let ctx = panel.getContext('2d');
let paint = false;
function loadAll()
{
	loadImg();
	panel.style.backgroundColor = "rgb(250, 250, 250)";
	panel.addEventListener('mousedown',mouse_down);
	panel.addEventListener('mousemove',mouse_move);
	panel.addEventListener('mouseup',mouse_up);
	document.querySelector('.modalToSave').classList.toggle("visible");
	document.querySelector('.title_modal').placeholder = "Title";
	document.querySelector('.task_modal').placeholder = "Take a Note..";
}

function mouse_down(ev){
	paint = true;
}

function mouse_move(ev){
	if (paint) {
		ctx.lineWidth = 10;
		ctx.strokeStyle = "black";
		ctx.lineCap = "round";
		ctx.lineTo(ev.clientX,ev.clientY-85);
		ctx.stroke();
		document.querySelector('.backArrow').addEventListener('click',savePaint);
		document.querySelector('.close').addEventListener('click',closeModal);
		document.querySelector('.save').addEventListener('click',saveModal);
	}
}

function mouse_up(ev){
	paint = false;
	ctx.beginPath();
}

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

function savePaint(){
	let drawings = document.querySelector('#drawingPanel').toDataURL("image/png");
	drawings.readonly = true;
	let img = document.createElement("img");
	img.id = "preview";
	let modal = document.querySelector('.modalToSave');
	modal.classList.toggle('visible');
	modal.insertBefore(img,modal.children[0]);
	img.src = drawings;
}

function closeModal(event){
	event.target.parentNode.parentNode.remove();
}

function saveModal(){
	var modalObject = {
		'image' : document.querySelector('#drawingPanel').toDataURL("image/png"),
		'title' : document.querySelector('.title_modal').value,
		'notes' : document.querySelector('.task_modal').value,
 	}

 	localStorage.setItem('modalObject', JSON.stringify(modalObject));
 	window.close();
}
let canRemove = true;
let show_list = true;
load();

function load(){
	document.querySelector('.note-section').addEventListener('click',addTitle);
	document.querySelector('.image').addEventListener('click',upload);
	document.querySelector('.list').addEventListener('click',showList);
	// let main = document.querySelector('.main').addEventListener('click',removeTitle);
	// toggleClick.querySelector('.after').addEventListener('click',removeTitle);
}

function upload(event)
{
	if(event.target.className == "upload_image")
	{
		let upload_btn = document.querySelector('#upload');
		upload_btn.click();
	}
}

function addTitle(event)
{
	if((canRemove && event.target.className == "input-take-note")||(canRemove && event.target.className == "list_icon"))
	{
		// console.log(event.target.className);
		// Creating Title Part
		parent = document.querySelector('.note-section');
		div_parent = document.createElement("div");
		div_parent.classList.add("after");
		div_child = document.createElement("div");
		div_child.classList.add("text");
		input = document.createElement("input");
		input.type="text";
		input.placeholder="Title...";
		input.classList.add("after_click");
		div_child.appendChild(input);
		div_parent.appendChild(div_child);
		div_child_two = document.createElement("div");
		div_child_two.classList.add("img");
		img = document.createElement("img");
		img.src="img/push_pin.png";
		div_child_two_span = document.createElement("span");
		div_child_two_span.innerHTML = "Pin note";
		div_child_two.appendChild(img);
		div_child_two.appendChild(div_child_two_span);
		div_parent.appendChild(div_child_two);
		list = document.querySelector('.list');
		drawing = document.querySelector('.drawing');
		image = document.querySelector('.image');
		list.classList.toggle('not-visible');
		drawing.classList.toggle('not-visible');
		image.classList.toggle('not-visible');
		// appending title Part
		parent.insertBefore(div_parent,parent.childNodes[0]);
		// Creating Footer Element
		div_footer = document.createElement("div");
		div_footer.classList.add("note-footer");
		div_footer_ul = document.createElement("ul");
		// remind-me
		div_footer_ul_li_remind_me = document.createElement("li");
		div_footer_ul_li_remind_me.classList.add("remind-me");
		div_footer_ul_li_remind_me_img = document.createElement("img");
		div_footer_ul_li_remind_me_img.src = "img/bell3.svg";
		div_footer_ul_li_remind_me_span = document.createElement("span");
		div_footer_ul_li_remind_me_span.innerHTML = "Remind Me";
		// ========> appending remind Me
		div_footer_ul_li_remind_me.appendChild(div_footer_ul_li_remind_me_img);
		div_footer_ul_li_remind_me.appendChild(div_footer_ul_li_remind_me_span);
		// collabrate
		div_footer_ul_li_collabrate = document.createElement("li");
		div_footer_ul_li_collabrate.id = "collabrate";
		div_footer_ul_li_collabrate.classList.add("collabrate");
		div_footer_ul_li_collabrate_img = document.createElement("img");
		div_footer_ul_li_collabrate_img.src = "img/collabrate.png";
		div_footer_ul_li_collabrate_span = document.createElement("span");
		div_footer_ul_li_collabrate_span.innerHTML = "Collabrate";
		 // ===============> appending collabrate
		 div_footer_ul_li_collabrate.appendChild(div_footer_ul_li_collabrate_img);
		 div_footer_ul_li_collabrate.appendChild(div_footer_ul_li_collabrate_span);
		// color pallet
		div_footer_ul_li_color_pallet = document.createElement("li");
		div_footer_ul_li_color_pallet.classList.add("color-pallet");
		div_footer_ul_li_color_pallet_img = document.createElement("img");
		div_footer_ul_li_color_pallet_img.src = "img/color_pallet.svg";
		div_footer_ul_li_color_pallet_span = document.createElement("span");
		div_footer_ul_li_color_pallet_span.innerHTML = "Change color";
		 // =====================> appending color_pallet
		 div_footer_ul_li_color_pallet.appendChild(div_footer_ul_li_color_pallet_img);
		 div_footer_ul_li_color_pallet.appendChild(div_footer_ul_li_color_pallet_span);
		// album
		div_footer_ul_li_album = document.createElement("li");
		div_footer_ul_li_album.classList.add("album");
		div_footer_ul_li_album_img = document.createElement("img");
		div_footer_ul_li_album_img.src = "img/albumsvg.svg";
		div_footer_ul_li_album_span = document.createElement("span");
		div_footer_ul_li_album_span.innerHTML = "Add image";
		// ==========================> appending album
		div_footer_ul_li_album.appendChild(div_footer_ul_li_album_img);
		div_footer_ul_li_album.appendChild(div_footer_ul_li_album_span);
		// archieve
		div_footer_ul_li_archieve = document.createElement("li");
		div_footer_ul_li_archieve.classList.add("archieve");
		div_footer_ul_li_archieve_img = document.createElement("img");
		div_footer_ul_li_archieve_img.src = "img/archieve.png";
		div_footer_ul_li_archieve_span = document.createElement("span");
		div_footer_ul_li_archieve_span.innerHTML = "Archieve";
		// ================================> appending archieve
		div_footer_ul_li_archieve.appendChild(div_footer_ul_li_archieve_img);
		div_footer_ul_li_archieve.appendChild(div_footer_ul_li_archieve_span);
		// more
		div_footer_ul_li_more = document.createElement("li");
		div_footer_ul_li_more.classList.add("more");
		div_footer_ul_li_more_img = document.createElement("img");
		div_footer_ul_li_more_img.src = "img/vertical_dots.png";
		div_footer_ul_li_more_img_span = document.createElement("span");
		div_footer_ul_li_more_img_span.innerHTML = "More";
		// =================================> appending more
		div_footer_ul_li_more.appendChild(div_footer_ul_li_more_img);
		div_footer_ul_li_more.appendChild(div_footer_ul_li_more_img_span);
		// undo
		div_footer_ul_li_undo = document.createElement("li");
		div_footer_ul_li_undo.classList.add("undo");
		div_footer_ul_li_undo_img = document.createElement("img");
		div_footer_ul_li_undo_img.src = "img/undo.svg";
		div_footer_ul_li_undo_span = document.createElement("span");
		div_footer_ul_li_undo_span.innerHTML = "Undo";
		// =================================> appending more
		div_footer_ul_li_undo.appendChild(div_footer_ul_li_undo_img);
		div_footer_ul_li_undo.appendChild(div_footer_ul_li_undo_span);
		// redo
		div_footer_ul_li_redo = document.createElement("li");
		div_footer_ul_li_redo.classList.add("redo");
		div_footer_ul_li_redo_img = document.createElement("img");
		div_footer_ul_li_redo_img.src = "img/redosvg.svg";
		div_footer_ul_li_redo_span = document.createElement("span");
		div_footer_ul_li_redo_span.innerHTML = "Redo";
		// ======================================> appending redo
		div_footer_ul_li_redo.appendChild(div_footer_ul_li_redo_img);
		div_footer_ul_li_redo.appendChild(div_footer_ul_li_redo_span);
		// ========================================> li's to ul
		div_footer_ul.appendChild(div_footer_ul_li_remind_me);
		div_footer_ul.appendChild(div_footer_ul_li_collabrate);
		div_footer_ul.appendChild(div_footer_ul_li_color_pallet);
		div_footer_ul.appendChild(div_footer_ul_li_album);
		div_footer_ul.appendChild(div_footer_ul_li_archieve);
		div_footer_ul.appendChild(div_footer_ul_li_more);
		div_footer_ul.appendChild(div_footer_ul_li_undo);
		div_footer_ul.appendChild(div_footer_ul_li_redo);
		// ===========================================> appending ul to div
		div_footer.appendChild(div_footer_ul);
		// div_close
		div_close = document.createElement("div");
		div_close.classList.add("close");
		div_close.innerHTML = "Close";
		// ==============================================> appending div_close to div_close
		div_footer.appendChild(div_close);
		// ===================================================> appending Footer to parent
		parent.insertBefore(div_footer,div_footer.nextSibling);

		canRemove = (!canRemove);
	}
	else if(event.target.className == 'close'){
		parent = document.querySelector('.note-section');
		if(parent.children[1].className == "listItems"){
			parent.innerHTML = "";
			let div_element = createBefore();
			parent.appendChild(div_element);
			location.reload();
			return;
		}
		parent.removeChild(parent.childNodes[0]);
		footer = document.querySelector('.note-footer');
		footer.remove();
		list = document.querySelector('.list');
		drawing = document.querySelector('.drawing');
		image = document.querySelector('.image');
		list.classList.toggle('not-visible');
		drawing.classList.toggle('not-visible');
		image.classList.toggle('not-visible');
		// if(!show_list){
		// 	let befoeClass = createBefore();
		// 	parent.replaceChild(befoeClass,parent.children[1]);
		// }
		canRemove = (!canRemove);
	}

}

function createBefore(){
	div_before = document.createElement("div");
	div_before.classList.add("before");
	div_text = document.createElement("div");
	div_text.classList.add("text");
	input_text = document.createElement("input");
	input_text.type = "text";
	input_text.classList.add("input-take-note");
	input_text.placeholder = "Take a note...";
	div_text.appendChild(div_input);
	// ==================================================
	div_list = document.createElement("div");
	div_list.classList.add("list");
	div_list_img = document.createElement("img");
	div_list_img.classList.add("list_icon");
	div_list_img.src = "img/checkbox.png";
	div_list_img.style.width = "20px";
	div_list_img.style.height = "20px";
	div_list_span = document.createElement("span");
	div_list_span.innerHTML = "New list";
	div_list.appendChild(div_list_img);
	div_list.appendChild(div_list_span);
	// ==================================================
	div_drawing = document.createElement("div");
	div_drawing.classList.add("drawing");
	div_drawing_img = document.createElement("img");;
	div_drawing_img.src = "img/paint_brush.png";
	div_drawing_img.style.width = "20px";
	div_drawing_img.style.height = "20px";
	div_drawing_span = document.createElement("span");
	div_drawing_span.innerHTML = "New notes with drawing";
	div_drawing.appendChild(div_drawing_img);
	div_drawing.appendChild(div_drawing_span);
	// ==================================================
	div_image = document.createElement("div");
	div_image.classList.add("image");
	div_image_img = document.createElement("img");
	div_image_img.src = "img/album.png";
	div_image_img.style.width = "20px";
	div_image_img.style.height = "20px";
	div_image_input = document.createElement("input");
	div_image_input.id = "upload";
	div_image_input.type = "file";
	div_image_input.style.display = "none";
	div_image_span = document.createElement("span");
	div_image_span.innerHTML = "New notes with image";
	div_image.appendChild(div_image_img);
	div_image.appendChild(div_image_input);
	div_image.appendChild(div_image_span);
	// ==================================================
	div_before.appendChild(div_text);
	div_before.appendChild(div_list);
	div_before.appendChild(div_drawing);
	div_before.appendChild(div_image);
	return div_before;
}

// function removeTitle(event){
// 	if(!canRemove){
// 		parent = document.querySelector('.note-section');
// 		parent.removeChild(parent.childNodes[0]);
// 		list = document.querySelector('.list');
// 		drawing = document.querySelector('.drawing');
// 		image = document.querySelector('.image');
// 		list.classList.toggle('not-visible');
// 		drawing.classList.toggle('not-visible');
// 		image.classList.toggle('not-visible');
// 		canRemove = (!canRemove);
// 	}
// }

function showList(event){
	if(event.target.className == "list_icon"){
		addTitle(event);
		parent = document.querySelector('.note-section');
		div_listItems = document.createElement("div");
		div_listItems.classList.add('listItems');
		div_label = document.createElement("label");
		div_input = document.createElement("input");
		div_input.type = "text";
		div_input.placeholder = "List item";
		div_input.classList.add('listInput');
		div_label.innerHTML = "+";
		div_label.appendChild(div_input);
		div_listItems.appendChild(div_label);
		parent.replaceChild(div_listItems, parent.children[1]);
		// show_list = (!show_list);
	}
}
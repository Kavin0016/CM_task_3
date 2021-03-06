let canRemove = true;
let show_list = true;
load();
loadImg();
window.addEventListener('focus',getImage);
function load(){
	document.querySelector('.input-take-note').addEventListener('click',addTitle);
	document.querySelector('.image').addEventListener('click',upload);
	document.querySelector('.list').addEventListener('click',showList);
}

function loadImg(){
	document.querySelector('.upload_image').src = "img/note_section/album.png";
	document.querySelector('.drawingImg').src = "img/note_section/paint_brush.png";
	document.querySelector('.list_icon').src = "img/note_section/checkbox.png";
	document.querySelector('.left_Bin').src = "img/left_panel/bin2.png";
	document.querySelector('.left_Archieve').src = "img/left_panel/archieve.png";
	document.querySelector('.left_Edit').src = "img/left_panel/pen2.png";
	document.querySelector('.left_Reminder').src = "img/left_panel/bell.png";
	document.querySelector('.left_Notes').src = "img/left_panel/bulb.png";
	document.querySelector('.right_Account').src = "img/header/profile_logo.jpg";
	document.querySelector('.right_Grid').src = "img/header/dotted-grid.jpg";
	document.querySelector('.right_Settings').src = "img/header/settings.png";
	document.querySelector('.right_List').src = "img/header/list-view.png";
	document.querySelector('.right_Refresh').src = "img/header/refresh.png";
	document.querySelector('.search_Icon').src = "img/header/search.png";
	document.querySelector('.logo').src = "img/header/keep_icon.png";
	document.querySelector('.menu').src = "img/header/main-menu.png";
	document.querySelector('.img_Dark').src = "img/dark_theme.png";
}

function upload(wvent)
{
	if(event.target.className == "upload_image")
	{
		let upload_btn = document.querySelector('#upload');
		upload_btn.click();
	}
}

function addTitle(event)
{
	if((event.target.className == "input-take-note")||(event.target.className == "list_icon"))
	{
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
		img.src="img/note_section/push_pin.png";
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
		div_footer_ul_li_remind_me_span.innerHTML = "Remind&nbsp;Me";
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
		div_footer_ul_li_color_pallet_span.innerHTML = "Change&nbsp;color";
		 // =====================> appending color_pallet
		 div_footer_ul_li_color_pallet.appendChild(div_footer_ul_li_color_pallet_img);
		 div_footer_ul_li_color_pallet.appendChild(div_footer_ul_li_color_pallet_span);
		// album
		div_footer_ul_li_album = document.createElement("li");
		div_footer_ul_li_album.classList.add("album");
		div_footer_ul_li_album_img = document.createElement("img");
		div_footer_ul_li_album_img.src = "img/albumsvg.svg";
		div_footer_ul_li_album_span = document.createElement("span");
		div_footer_ul_li_album_span.innerHTML = "Add&nbsp;image";
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
		// div_store
		div_store = document.createElement("div");
		div_store.classList.add("store");
		div_store.innerHTML = "Store";
		// ==============================================> appending div_close to div_close
		div_footer.appendChild(div_close);
		div_footer.appendChild(div_store);
		// ===================================================> appending Footer to parent
		parent.insertBefore(div_footer,div_footer.nextSibling);
		document.querySelector('.close').addEventListener('click',closeBtn);
		document.querySelector('.store').addEventListener('click',storeData);
		document.querySelector('.input-take-note').removeEventListener('click',addTitle);
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
	div_text.appendChild(input_text);
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
	div_image_img.src = "img/note_section/album.png";
	div_image_img.style.width = "20px";
	div_image_img.style.height = "20px";
	div_image_input = document.createElement("input");
	div_image_input.id = "upload";
	div_image_input.type = "file";
	div_image_input.oninput = "loadFile(event)";
	div_image_input.accept = "image/*";
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
	document.querySelector('.input-take-note').addEventListener('click',addTitle);
	document.querySelector('.image').addEventListener('click',upload);
	document.querySelector('.list_icon').addEventListener('click',showList);
	return div_before;
}

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
		div_input.style.width = "500px";
		div_label.innerHTML = "+";
		div_label.appendChild(div_input);
		div_listItems.appendChild(div_label);
		parent.replaceChild(div_listItems, parent.children[1]);
		document.querySelector('.listInput').addEventListener('keypress',addListItem);
		return;
	}
}

function addListItem(){
	if(!(document.querySelector('.listInput').value == ""))
	{
		let text_value = document.querySelector('.listInput').value;
		document.querySelector('.listInput').value = "";
		parent = document.querySelector('.note-section');
		div_listItemAdded = document.createElement("div");
		div_listItemAdded.classList.add('listItemAdded');
		div_listItemAdded.draggable = "true";
	// ======================== div drag_btn
	div_listItemAdded_drag_btn = document.createElement("div");
	div_listItemAdded_drag_btn.classList.add("drag_btn");
	div_listItemAdded_drag_btn.classList.add("not-visible");
	div_listItemAdded_drag_btn_img = document.createElement("img");
	div_listItemAdded_drag_btn_img.classList.add("drag_icon");
	div_listItemAdded_drag_btn_img.src = "img/drag_icon.png";
	div_listItemAdded_drag_btn.appendChild(div_listItemAdded_drag_btn_img);
	// ================================== div checkbox
	div_listItemAdded_checkbox = document.createElement("div");
	div_listItemAdded_checkbox.classList.add("checkbox");
	div_listItemAdded_checkbox_input = document.createElement("input");
	div_listItemAdded_checkbox_input.type = "checkbox";
	div_listItemAdded_checkbox_input.classList.add("listItemAdded_Checkbox");
	div_listItemAdded_checkbox_input.name = "div_listItemAdded_checkbox_input";
	div_listItemAdded_checkbox.appendChild(div_listItemAdded_checkbox_input);
	// ====================================== div input
	div_listItemAdded_input = document.createElement("div");
	div_listItemAdded_input.classList.add("input");
	div_listItemAdded_input_input = document.createElement("input");
	div_listItemAdded_input_input.type = "text";
	div_listItemAdded_input_input.value = text_value;
	div_listItemAdded_input_input.classList.add("listItemAdded_Input");
	div_listItemAdded_input_input.name = "listItemAdded_Input";
	div_listItemAdded_input.appendChild(div_listItemAdded_input_input);
	// ============================================ div exit
	div_listItemAdded_exit = document.createElement("div");
	div_listItemAdded_exit.classList.add("exit");
	div_listItemAdded_exit.classList.add("not-visible");
	div_listItemAdded_exit_label = document.createElement("label");
	div_listItemAdded_exit_label.classList.add("listItemAdded_Close");
	div_listItemAdded_exit_label.innerText = "x";
	div_listItemAdded_exit.appendChild(div_listItemAdded_exit_label);
	// ========================== appending div's
	div_listItemAdded.appendChild(div_listItemAdded_drag_btn);
	div_listItemAdded.appendChild(div_listItemAdded_checkbox);
	div_listItemAdded.appendChild(div_listItemAdded_input);
	div_listItemAdded.appendChild(div_listItemAdded_exit);
	// =====================append to parent
	parent.insertBefore(div_listItemAdded,parent.children[1]);
	document.querySelector('.listItemAdded_Close').addEventListener('click',deleteListItemAdded);
}

}

function lineThrough(event){
	let check_div = event.target.parentNode
	let inner_check = check_div.nextSibling;
	inner_check.children[0].classList.toggle("lineThrough");
}

function lineThroughDocument(event){
	let label = event.target.nextElementSibling;
	console.log("check box clicked");
	label.classList.toggle("lineThrough");
}

function deleteListItemAdded(event){
	let parentExit = event.target.parentNode.parentNode;
	parentExit.remove();
}

function loadFile(event){
	let p = document.createElement("p");
	let img = document.createElement("img");
	img.id = "output";
	img.style.width = "100%";
	img.src = URL.createObjectURL(event.target.files[0]);
	let img_delete = document.createElement("img");
	img_delete.classList.add("img_delete");
	img_delete.src = "img/bin.png";
	img_delete.addEventListener('click',delete_Output);
	let p_store = document.createElement("p");
	p_store.classList.add("image_store");
	p_store.innerText = "store";
	p.appendChild(img);
	p.appendChild(img_delete);
	p.appendChild(p_store);
	let parent = document.querySelector('.note-section');
	parent.insertBefore(p,parent.children[0]);
	p_store.addEventListener('click',storeData);
}

function delete_Output(event){
	let parent = event.target.parentNode;
	parent.remove();
}

function storeData(event){
	let parent = document.querySelector('.note-section');
	if(parent.contains(document.querySelector("#output"))){
			// alert("image upload");
			let documentContainer = document.querySelector('.documentContainer');
			let documentBox = createDocumentBox();
			let img = document.createElement("img");
			img.style.width = "100%";
			img.src = document.querySelector("#output").src;
			documentBox.insertBefore(img,documentBox.children[1]);
			documentContainer.appendChild(documentBox);
			let p = event.target.parentNode;
			p.remove();
		}
		else if(parent.children[1].className == "before")
		{
			if(!(document.querySelector('.after_click').value == "") || !(document.querySelector('.input-take-note').value == ""))
			{	
				let documentBox = createDocumentBox();
		//=================================================================================================================//
		let title = document.querySelector('.after_click').value;
		let content = document.querySelector('.input-take-note').value;
		let div =document.createElement("div");
		let div_p_title = document.createElement("P");
		div_p_title.innerText = title;
		div_p_title.classList.add("documentBoxTitle");
		div.appendChild(div_p_title);
		let div_p_content = document.createElement("p");
		div_p_content.classList.add("documentBoxContent");
		div_p_content.innerText = content;
		div.appendChild(div_p_title);
		div.appendChild(div_p_content);
		//=================================================================================================================//
		documentBox.insertBefore(div,documentBox.children[1]);
		let documentContainer = document.querySelector('.documentContainer');
		documentContainer.appendChild(documentBox);
	}
	document.querySelector('.close').click();
}
else if(parent.children[1].className == "listItems" || parent.children[1].className == "listItemAdded")
{
	if(!(document.querySelector('.after_click').value == "") || !(document.querySelector('.listItemAdded_Input').value == ""))
	{
			// alert("List class");
			let title = document.querySelector('.after_click').value;
			let div_documentBody = document.createElement("div");
			div_documentBody.classList.add("documentBody");
			div_documentBody_P_title = document.createElement("p");
			div_documentBody_P_title.classList.add("title");
			div_documentBody_P_title.innerText = title;
			let div_documentContent = createDocumentContent();
			div_documentBody.appendChild(div_documentBody_P_title);
			div_documentBody.appendChild(div_documentContent);
			let documentBox = createDocumentBox();
			documentBox.insertBefore(div_documentBody,documentBox.children[1]);
			let documentContainer = document.querySelector('.documentContainer');
			documentContainer.appendChild(documentBox);
			let CheckBoxes = document.querySelectorAll('.documentContentCheckBox');
			for(i=0;i<CheckBoxes.length;i++)
			{
				CheckBoxes[i].addEventListener('click',lineThroughDocument);
			}
			document.querySelector('.close').click();
		}
	}
}

function closeBtn(event){
	let parent = document.querySelector('.note-section');
	if(parent.children[1].className == "before")
	{
		parent.children[0].remove();
		parent.children[1].remove();
		list = document.querySelector('.list');
		drawing = document.querySelector('.drawing');
		image = document.querySelector('.image');
		list.classList.toggle('not-visible');
		drawing.classList.toggle('not-visible');
		image.classList.toggle('not-visible');
		document.querySelector('.input-take-note').addEventListener('click',addTitle);
		document.querySelector('.input-take-note').value = "";

	}
	else if(parent.children[1].className == "listItems" || parent.children[1].className == "listItemAdded"){
		// Lists Should be added
		parent.innerHTML = '<div class="before"><div class="text"><input class="input-take-note" type="text-area" placeholder="Take a note..."></div><div class="list"><img class="list_icon" src="img/note_section/checkbox.png" style="width: 20px;height: 20px;"><span>New list</span></div><a href="canvas/canvas.html" target="_blank"><div class="drawing"><img src="img/note_section/paint_brush.png" style="width: 20px;height: 20px;"><span>New notes with drawing</span></a></div><div class="image"><img src="img/note_section/album.png" class="upload_image" style="width: 20px;height: 20px;"><input id="upload" type="file" style="display: none;z-index: 9999;" accept="image"  oninput="loadFile(event)"><span>New notes with image</span></div></div>';
		document.querySelector('.input-take-note').addEventListener('click',addTitle);
		document.querySelector('.image').addEventListener('click',upload);
		document.querySelector('.list_icon').addEventListener('click',showList);
		document.querySelector('.input-take-note').value = "";		
	}
}

function createDocumentBox(){
	let parent = document.createElement("div");
	parent.classList.add("documentBox");
	let div_tick = document.createElement("div");
	div_tick.classList.add('tick');
	div_tick_img = document.createElement("img");
	div_tick_img.src = "img/tick.svg";
	div_tick.appendChild(div_tick_img);
	let footer = document.createElement("div");
	footer.classList.add("documentBoxFooter");
	// ============================== LI Remind
	let li_remind = document.createElement("li");
	let li_remind_img = document.createElement("img");
	li_remind_img.src = "img/bell3.svg";
	let li_remind_span = document.createElement("span");
	li_remind_span.classList.add("remind_me");
	li_remind_span.innerText = "Remind Me";
	li_remind.appendChild(li_remind_img);
	li_remind.appendChild(li_remind_span);
	// ================================= LI Collabrate
	let li_collabrate = document.createElement("li");
	let li_collabrate_img = document.createElement("img");
	li_collabrate_img.src = "img/collabrate.png";
	li_collabrate_img.style.width = "25px";
	li_collabrate_img.style.height = "25px";
	li_collabrate_img.style.padding = "0px";
	li_collabrate_img.style.marginLeft = "-5px";
	li_collabrate_img.style.marginTop = "-5px";
	let li_collabrate_span = document.createElement("span");
	li_collabrate_span.classList.add("collabrate");
	li_collabrate_span.innerText = "Collabrate";
	li_collabrate.appendChild(li_collabrate_img);
	li_collabrate.appendChild(li_collabrate_span);
	 // ====================================== LI Change color
	 let li_change_color = document.createElement("li");
	 let li_change_color_img = document.createElement("img");
	 li_change_color_img.src = "img/color_pallet.svg";
	 let li_change_color_span  = document.createElement("span");
	 li_change_color_span.classList.add("color_pallet");
	 li_change_color_span.innerText = "Change color";
	 li_change_color.appendChild(li_change_color_img);
	 li_change_color.appendChild(li_change_color_span);
	 // ============================================= LI Add Image
	 let li_add_image = document.createElement("li");
	 let li_add_image_img = document.createElement("img");
	 li_add_image_img.src = "img/albumsvg.svg";
	 let li_add_image_span  = document.createElement("span");
	 li_add_image_span.classList.add("add_image");
	 li_add_image_span.innerText = "Add image";
	 li_add_image.appendChild(li_add_image_img);
	 li_add_image.appendChild(li_add_image_span);
	 // ============================================== LI Archieve
	 let li_archieve = document.createElement("li");
	 let li_archieve_img = document.createElement("img");
	 li_archieve_img.src = "img/archieve.png";
	 let li_archieve_span  = document.createElement("span");
	 li_archieve_span.classList.add("archieve");
	 li_archieve_span.innerText = "Archieve";
	 li_archieve.appendChild(li_archieve_img);
	 li_archieve.appendChild(li_archieve_span);
	 // ============================================= LI More
	 let li_more = document.createElement("li");
	 li_more.classList.add("lastLi");
	 let li_more_img = document.createElement("img");
	 li_more_img.src = "img/vertical_dots.png";
	 let li_more_span = document.createElement("span");
	 li_more_span.classList.add("more");
	 li_more_span.innerText = "More";
	 li_more.appendChild(li_more_img);
	 li_more.appendChild(li_more_span);
	 // ====================================== Appending to footer
	 footer.appendChild(li_remind);
	 footer.appendChild(li_collabrate);
	 footer.appendChild(li_change_color);
	 footer.appendChild(li_add_image);
	 footer.appendChild(li_archieve);
	 footer.appendChild(li_more);
	 // ================================== Appending div's to parent
	 parent.appendChild(div_tick);
	 parent.appendChild(footer);
	 return parent;

	}

	function createDocumentContent()
	{
		let parent = document.createElement("div");
		let inputs = document.querySelectorAll('.listItemAdded_Input');
		let checkboxs = document.querySelectorAll('.listItemAdded_Checkbox');
		let input_count = inputs.length;
		for(i=0;i<input_count;i++)
		{
			let div_documentContent = document.createElement("div");
			div_documentContent.classList.add("documentContent");
			div_documentContent_input = document.createElement("input");
			div_documentContent_input.type = "checkbox";
			div_documentContent_input.classList.add("documentContentCheckBox");
			div_documentContent_input.checked = checkboxs[i].checked;
			div_documentContent_label = document.createElement("label");
			div_documentContent_label.innerText = inputs[i].value;
			if(checkboxs[i].checked){
				div_documentContent_label.classList.add("lineThrough");
			}
			div_documentContent.appendChild(div_documentContent_input);
			div_documentContent.appendChild(div_documentContent_label);
			parent.appendChild(div_documentContent)
		}
		return parent;
	}

	function getImage(){
		if (localStorage.getItem('modalObject')) {
			let object = JSON.parse(localStorage.getItem('modalObject'));
			let documentContainer = document.querySelector('.documentContainer');
			let documentBox = createDocumentBox();
			documentBox.style.float = "left";
			let img = document.createElement("img");
			img.style.width = "100%";
			img.style.backgroundColor = "rgb(250,250,250)";
			img.src = object['image'];
			let div =document.createElement("div");
			let div_p_title = document.createElement("P");
			div_p_title.innerText = object['title'];
			div_p_title.classList.add("documentBoxTitle");
			div.appendChild(div_p_title);
			let div_p_content = document.createElement("p");
			div_p_content.classList.add("documentBoxContent");
			div_p_content.innerText = object['notes'];
			div.appendChild(div_p_title);
			div.appendChild(div_p_content);
			documentBox.insertBefore(img,documentBox.children[1]);
			documentBox.insertBefore(div,documentBox.children[2]);
			documentContainer.appendChild(documentBox);
			localStorage.removeItem('modalObject');
		}
	}
// NAVBAR
function fade(anchor, items){
	for(key in items){
		if(items.hasOwnProperty(key)){
			let item = items[key];
			let div = item.dataset.div;
			let divObject = document.querySelector("."+div);
			$(divObject).fadeOut();
		}
	}
	let div = anchor.dataset.div;
	let divObject = document.querySelector("."+div);
	setTimeout(()=>{
		$(divObject).fadeIn();	
	},500);
}

function fadeWork(liveDiv) {
	let mainParent = document.querySelector(".gallery");
	let children = mainParent.getElementsByTagName("a");
	for (var i = 0; i < children.length; i++) {
		let child = children[i];
		child.setAttribute("class", "workUnselected");
	}
	liveDiv.setAttribute("class", "workSelected");
	showWorkInfo(liveDiv);
} 

function showWorkInfo(liveDiv){
	let childSpan = liveDiv.nextSibling;
	childSpan.setAttribute("class", "gallery-span1");
}

function fadeWorkInfo(oldDiv){
	let childSpan = oldDiv.nextSibling;
	childSpan.setAttribute("class", "gallery-span7");
}

// // PROJECTS
// $(".gallery-1").hover(function(){
//     $('.gallery-span1').show();
// },function(){
//     $('.gallery-span1').hide();
// });
// $(".gallery-7").hover(function(){
//     $('.gallery-span7').show();
// },function(){
//     $('.gallery-span7').hide();
// });

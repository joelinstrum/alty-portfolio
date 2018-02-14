// NAVBAR
function highlight(anchor, items){
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

function highlightWork(liveDiv) {
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
	// childSpan.setAttribute("class", "gallery-span1");
	childSpan.style.opacity = 1;
}

function fadeWorkInfo(oldDiv){
	let childSpan = oldDiv.nextSibling;
	childSpan.style.opacity = 0;
}

function showSkills() {
	let x = document.getElementById('skills-div');
	if (x.style.display === 'block') {
		x.style.display = 'none';
	} else {
		x.style.display = 'block';
	}
}

function setTabs(){
	let q = document.location.href.indexOf('?');
	let s = document.location.href.substr(q+1);
	let v = s.indexOf('=');
	let queryStringValue = s.substr(v+1);
	if(q < 0) {
		queryStringValue = "home";
	}
	let navParent = document.querySelector(".nav");
	let navItems = navParent.getElementsByTagName("a");
	for(let i=0; i<navItems.length; i++){
		let anchor = navItems[i];
		anchor.onclick = () => {
			highlight(anchor, navItems);
		}
		let cssClass = anchor.getAttribute("class");
		if(queryStringValue.toUpperCase() === anchor.textContent){
			anchor.setAttribute("class", `${cssClass} active`);
			highlight(anchor, navItems);
		};
	};

}

function javaFunction() {
	show("javaProjects");
	hide("pythonProjects");
	hide("sqlProjects");
	hide("jsProjects");
}

function pythonFunction() {
	show("pythonProjects");
	hide("javaProjects");
	hide("sqlProjects");
	hide("jsProjects");
}

function sqlFunction() {
	show("sqlProjects");
	hide("javaProjects");
	hide("pythonProjects");
	hide("jsProjects");
}

function jsFunction() {
	show("jsProjects");
	hide("javaProjects");
	hide("pythonProjects");
	hide("sqlProjects");
}

function show(id) {
	document.getElementById(id).classList.toggle("show");
}

function hide(id) {
	document.getElementById(id).classList.remove("show");
}

window.onclick = function(event) {
	if(!event.target.matches('.dropbtn')) {
		var dropdowns = document.getElementsByClassName("dropdown-content");
		var i;
		for(i = 0; i < dropdowns.length; i++) {
			var openDropdown = dropdowns[i];
			if(openDropdown.classList.contains('show')) {
				openDropdown.classList.remove('show');
			}
		}
	}
}
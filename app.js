$(function() {
	goToStart();
});

function remove() {
	document.getElementById("startView").style.display = 'none';
	document.getElementById("aboutView").style.display = 'none';
	document.getElementById("servicesView").style.display = 'none';
	document.getElementById("contactView").style.display = 'none';
	document.getElementById("ourBuildingsView").style.display = 'none';
	document.getElementById("reconstructionView").style.display = 'none';
	document.getElementById("interioursView").style.display = 'none';
	document.getElementById("fromConstructionView").style.display = 'none';
	document.getElementById("bathroomsView").style.display = 'none';	
}
function goToStart(){
	remove();
	document.getElementById("startView").style.display = 'block';
}

function goToServices(){
	remove();
	document.getElementById("servicesView").style.display = 'block';
}

function goToAbout() {
	remove();
	document.getElementById("aboutView").style.display = 'block';	
}

function goToContact() {
	remove();
	document.getElementById("contactView").style.display = 'block';
}

function goToOurBuildings() {
	remove();
	document.getElementById("ourBuildingsView").style.display = 'block';
}

function goToReconstruction() {
	remove();
	document.getElementById("reconstructionView").style.display = 'block';
}

function goToBathroom() {
	remove();
	document.getElementById("bathroomsView").style.display = 'block';
}

function goToInteriours() {
	remove();
	document.getElementById("interioursView").style.display = 'block';
}

function goToFromConstruction() {
	remove();
	document.getElementById("fromConstructionView").style.display = 'block';
}
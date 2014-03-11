$(function() {
	remove();
	goToStart();
});

$(function(){

	$('.nav li a').on('click', function(e){
		remove();
        // e.preventDefault(); // prevent link click if necessary?

        var $thisLi = $(this).parent('li');
        var $ul = $thisLi.parent('ul');

        if (!$thisLi.hasClass('active'))
        {
        	$ul.find('li.active').removeClass('active');
        	$thisLi.addClass('active');
        }

    });
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
	document.getElementById("startView").style.display = 'block';
}

function goToServices(){
	document.getElementById("servicesView").style.display = 'block';
}

function goToAbout() {
	document.getElementById("aboutView").style.display = 'block';	
}

function goToContact() {
	document.getElementById("contactView").style.display = 'block';
}

function goToOurBuildings() {
	document.getElementById("ourBuildingsView").style.display = 'block';
}

function goToReconstruction() {
	document.getElementById("reconstructionView").style.display = 'block';
}

function goToBathroom() {
	document.getElementById("bathroomsView").style.display = 'block';
}

function goToInteriours() {
	document.getElementById("interioursView").style.display = 'block';
}

function goToFromConstruction() {
	document.getElementById("fromConstructionView").style.display = 'block';
}

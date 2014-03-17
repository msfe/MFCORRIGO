//Creates an element with a dishImage and text
function buildingsView(jsonObject) {
        var buildingsDiv = document.getElementById("buildingsPart");

        var table = document.createElement("table");
        table.setAttribute('Class', "buildingsPartey")
        var td = document.createElement("td");
        var tr = document.createElement("tr");

        //Add first image of building
        var img = document.createElement('img');
        img.setAttribute('src', jsonObject.imgrefr);
        img.setAttribute('Class', "buildingPic");
        //img.onclick = func;
        td.appendChild(img);
        tr.appendChild(td);
        table.appendChild(tr);

        //Add name of building
        var td = document.createElement("td");
        var tr = document.createElement("tr");
        td.appendChild(document.createTextNode(jsonObject.name));
        tr.appendChild(td);
        table.appendChild(tr);

		//Add description of building
		var td = document.createElement("td");
        var tr = document.createElement("tr");
        td.appendChild(document.createTextNode(jsonObject.about));
        tr.appendChild(td);
        table.appendChild(tr);

        buildingsDiv.appendChild(table);
    }
//Creates an element with a dishImage and text
function buildingsView(jsonObject) {
        var table = document.createElement("table");
        var td = document.createElement("td");
        var tr = document.createElement("tr");

        //Add first image of building
        var img = document.createElement('img');
        img = jsonObject.IMG1;
        img.onclick = func;
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

        element.appendChild(table);
    }
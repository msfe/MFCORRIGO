//Creates an element with a dishImage and text
function buildingsView(jsonObject, columnNumber) {
        var table = document.createElement("table");
        table.setAttribute('Class', "buildingsPartey")
        var td = document.createElement("td");
        var tr = document.createElement("tr");

        //Add first image of building
        var div = document.createElement("div");
        div.setAttribute('Class', "imageWrapper");
        var img = document.createElement('img');
        img.setAttribute('src', jsonObject.imgrefr);
        img.setAttribute('Class', "buildingPic");
        //img.onclick = func;
        div.appendChild(img);
        td.appendChild(div);
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

        if(columnNumber == 0) {
            var buildingsDiv = document.getElementById("columnnr1");
        }
        else if(columnNumber == 1) {
            var buildingsDiv = document.getElementById("columnnr2");
        }
        else {//(columnNumber == 2) {
            var buildingsDiv = document.getElementById("columnnr3");
        }
        buildingsDiv.appendChild(table);
    }
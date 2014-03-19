//Creates an element with a dishImage and text
function buildingsView(project, columnNumber) {
    var table = document.createElement("table");
    table.setAttribute('Class', "buildingsPartey");
    var td = document.createElement("td");
    var tr = document.createElement("tr");

    //Add first image of building
    var div = document.createElement("div");
    div.setAttribute('Class', "imageWrapper");
    var img = document.createElement('img');
    img.setAttribute('src', 'res/projekt/' + project.imgrefr);
    img.setAttribute('Class', "buildingPic");

    //img.onclick = func;
    div.appendChild(img);
    td.appendChild(div);
    tr.appendChild(td);
    table.appendChild(tr);

    //Add name of building
    var td = document.createElement("td");
    var tr = document.createElement("tr");
    td.appendChild(document.createTextNode(project.name));
    tr.appendChild(td);
    table.appendChild(tr);
    
    //To create popup, we need to set an onclicklistener on the table holding the buildingView
    //the method that will be called on click will need alot of info from the project-object
    //but as the object is fucking with us and not lets us pass it as a parameter,
    //we have to send all "fields" of the object as parameters instead (which for some reason works!!?!?!?)
    table.setAttribute('onclick', "createPopUp('" + project.name + "', '" + project.about + "', '" + project.imgrefr + "', '" + project.imgrefr2 + "', '" + project.imgrefr3 + "', '" + project.imgrefr4 + "', '" + project.imgrefr5 + "', '" + project.type + "', '" + project.id + "');");

     table.setAttribute('onmouseover', "this.style.background='#ddd';");
     table.setAttribute('onmouseout', "this.style.background='#eee';");

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

function createPopUp(name, about, img1, img2, img3, img4, img5, type, id) {
}
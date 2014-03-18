var earlierProjectsView = function() { //listOfJsonObjects) {
    this.json = {
        id:["1"],
        name:["betonghus"],
        type:["byggnader"],
        year:[null],
        imgrefr:["res/projekt/exbild1.jpg"],
        imgrefr2:[null],
        imgrefr3:[null],
        imgrefr4:[null],
        imgrefr5:[null],
        about:["Kalle kalle"]
    };
    this.json2 = {
        id:["4"],
        name:["betonghus2"],
        type:["byggnader"],
        year:[null],
        imgrefr:["res/projekt/exbild2.jpg"],
        imgrefr2:[null],
        imgrefr3:[null],
        imgrefr4:[null],
        imgrefr5:[null],
        about:["Tihi, svensk flagga"]    
    };
    this.json3 = {
        id:["1"],
        name:["betonghus"],
        type:["byggnader"],
        year:[null],
        imgrefr:["res/projekt/exbild3.jpg"],
        imgrefr2:[null],
        imgrefr3:[null],
        imgrefr4:[null],
        imgrefr5:[null],
        about:["Kalle kalle"]
    };
    this.json4 = {
        id:["4"],
        name:["betonghus2"],
        type:["byggnader"],
        year:[null],
        imgrefr:["res/projekt/exbild4.jpg"],
        imgrefr2:[null],
        imgrefr3:[null],
        imgrefr4:[null],
        imgrefr5:[null],
        about:["Tihi, svensk flagga"]    
    };
    this.json5 = {
        id:["1"],
        name:["betonghus"],
        type:["byggnader"],
        year:[null],
        imgrefr:["res/projekt/exbild5.jpg"],
        imgrefr2:[null],
        imgrefr3:[null],
        imgrefr4:[null],
        imgrefr5:[null],
        about:["Kalle kalle"]
    };
    this.json6 = {
        id:["4"],
        name:["betonghus2"],
        type:["byggnader"],
        year:[null],
        imgrefr:["res/projekt/exbild6.jpg"],
        imgrefr2:[null],
        imgrefr3:[null],
        imgrefr4:[null],
        imgrefr5:[null],
        about:["Tihi, svensk flagga"]    
    };
    this.json7 = {
        id:["1"],
        name:["betonghus"],
        type:["byggnader"],
        year:[null],
        imgrefr:["res/projekt/exbild7.jpg"],
        imgrefr2:[null],
        imgrefr3:[null],
        imgrefr4:[null],
        imgrefr5:[null],
        about:["Kalle kalle"]
    };
    this.json8 = {
        id:["4"],
        name:["betonghus2"],
        type:["byggnader"],
        year:[null],
        imgrefr:["res/hus1.jpg"],
        imgrefr2:[null],
        imgrefr3:[null],
        imgrefr4:[null],
        imgrefr5:[null],
        about:["Tihi, svensk flagga"]    
    };
    var jsonList = [this.json, this.json2, this.json3, this.json4, this.json5, this.json6, this.json7, this.json8];
    for(var jsonObject in jsonList) {
        new buildingsView(jsonList[jsonObject], jsonObject%3);
    }
}
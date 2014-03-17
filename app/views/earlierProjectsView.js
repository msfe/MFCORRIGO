var earlierProjectsView = function() { //listOfJsonObjects) {
    this.json = {
        id:["1"],
        name:["betonghus"],
        type:["byggnader"],
        year:[null],
        imgrefr:["res/hus1.jpg"],
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
        imgrefr:["res/swedishflag.jpg"],
        imgrefr2:[null],
        imgrefr3:[null],
        imgrefr4:[null],
        imgrefr5:[null],
        about:["Tihi, svensk flagga"]    
    };
    var jsonList = [this.json, this.json2];
    for(var jsonObject in jsonList) {
        new buildingsView(jsonList[jsonObject]);
    }
}
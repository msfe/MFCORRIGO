var earlierProjectsView = function(listOfJsonObjects) {
	for(var jsonObject : listOfJsonObjects) {
		//div = func buildingsView(jsonObject);
		//display div on this page
		var div = document.getElementById("buildingsPart");
		div = buildingsView(jsonObject);
	}
}

[
    {
        "id": "1",
        "name": "betonghus",
        "type": "byggnader",
        "year": null,
        "imgrefr": "betonghus1",
        "imgrefr2": "betonghus2",
        "imgrefr3": null,
        "imgrefr4": null,
        "imgrefr5": null,
        "about": null
    },
    {
        "id": "4",
        "name": "betonghus2",
        "type": "byggnader",
        "year": null,
        "imgrefr": "betonghus1",
        "imgrefr2": "betonghus2",
        "imgrefr3": null,
        "imgrefr4": null,
        "imgrefr5": null,
        "about": null
    }
]
var earlierProjectsView = function(listOfJsonObjects) {
	for(var jsonObject : listOfJsonObjects) {
		//div = func buildingsView(jsonObject);
		//display div on this page
		var div = document.getElementById("buildingsPart");
		div = buildingsView(jsonObject);
	}
}
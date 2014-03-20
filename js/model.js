// JavaScript Document

// The possible project types
var ProjectType = ["buildings","reconstruction","bathroom","interiours","fromConstruction"];

// This is a project constructor
// When you want to create a new project you call
// var proj = new Project(42,"cool house",1,null,["pic1"], "A nice house");
function Project(project){
	var _id = project.id;
	var _name = project.name;
	var _typeid = ProjectType.indexOf(project.type);
	var _year = project.year;
	var _imageRefrs = project.images;
	var _about = project.about;

	this.getId = function() {
		return _id;
	}
	
	// sets the name of the project
	this.setName = function(name) {
		_name = name;
		model.notifyObservers();
	}

	// get the name of the project
	this.getName = function(name) {
		return _name;
	}
	
	// sets the typeid of the project
	this.setTypeId = function(typeid) {
		_typeid = typeid;
		model.notifyObservers();
	}

	this.setType = function(type) {
		_typeid = ProjectType.indexOf(type);
		model.notifyObservers();
	}

	// get the type id of the project
	this.getTypeId = function() {
		return _typeid;
	}
	
	// sets the year of the project
	this.setYear = function(year) {
		_year = year;
		model.notifyObservers();
	}

	// get the year of the project
	this.getYear = function() {
		return _year;
	}

	// gets an array of the project
	this.getAllImages = function() {
		return _imageRefrs;
	}

	// get the image reference of a specific index
	this.getImage = function(index) {
		return _imageRefrs[index];
	}

	// add a new imagerefr project
	this.addImage = function(imageRefr) {
		_imageRefrs.push(imageRefr);		
		model.notifyObservers();
	}

	// sets the description of the project
	this.setAbout = function(about) {
		_about = about;
		model.notifyObservers();
	}

	// get the description of the project
	this.getAbout = function() {
		return _about;
	}
	
	// This method returns the string representation of the
	// project type.
	this.getType = function () {
		return ProjectType[_typeid];
	};
}


// // this is the main module that contians all projects marked as favorit
// function Model(){
// 	this.favorites = [];
	
// 	this.addProject = function (project) {
// 		if(!project.id || !project.name || !project.type || !project.images || !project.about){
// 			console.log("Not null indata was null, exiting");
// 			return;
// 		}
// 		var projectObj = new Project(project);
// 		this.favorites.push(projectObj);
// 		this.notifyObservers();
// 		return project;
// 	};

// 	this.removeProject = function (project) {
// 		if(!project.id){
// 			console.log("id is null, can't remove project");
// 			return;
// 		}
// 		var remove = -1;
// 		for(var i = 0; i<this.favorites.length; i++){
// 			var curr = this.favorites[i];
// 			if(curr.getId == project.id){
// 				remove = i;
// 				break;
// 			}
// 		}
// 		if(remove != -1){
// 			this.favorites.slice(remove,1);
// 			this.notifyObservers();
// 		}else {
// 			console.log("project is not in favorites");
// 		}
// 	};

		
// 	//*** OBSERVABLE PATTERN ***
// 	var listeners = [];
	
// 	this.notifyObservers = function (args) {
// 		    for (var i = 0; i < listeners.length; i++){
// 			        listeners[i].update(args);
// 		    }
// 	};
	
// 	this.addObserver = function (listener) {
// 		    listeners.push(listener);
// 	};
// 	//*** END OBSERVABLE PATTERN ***
// }

// // this is the instance of our main model
// // this is what you should use in your application
// var model = new Model();

// // you can use this method to create some test data and test your implementation
// // DEPRICATED
// function createTestData(){
// 	model.addProject(42,"cool house",1,null,["pic1"], "A nice house");
// 	console.log("Project ID: " + model.projects[0].getName());
// }
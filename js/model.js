// JavaScript Document

// The possible project types
var ProjectType = ["byggnader","tillbyggnad","badrum","inomhus","byggnadsplats"];

// This is a project constructor
// When you want to create a new project you call
// var proj = new Project(42,"cool house",1,null,["pic1"], "A nice house");
function Project(id,name,typeid,year,imageRefrs,about){
	var _id = id;
	var _name = name;
	var _typeid = typeid;
	var _year = year;
	var _imageRefrs = imageRefrs;
	var _about = about;

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


// this is the main module that contians all projects
function Model(){
	this.projects = [];
	
	// adds a new day. if startH and startM (start hours and minutes)
	// are not provided it will set the default start of the day to 08:00
	this.addProject = function (id,name,typeid,year,imageRefrs,about) {
		if(!id || !name || !typeid || !imageRefrs || !about){
			console.log("Not null indata was null, exiting");
			return;
		}
		var project = new Project(id,name,typeid,year,imageRefrs,about);
		this.projects.push(project);
		this.notifyObservers();
		return project;
	};
		
	//*** OBSERVABLE PATTERN ***
	var listeners = [];
	
	this.notifyObservers = function (args) {
		    for (var i = 0; i < listeners.length; i++){
			        listeners[i].update(args);
		    }
	};
	
	this.addObserver = function (listener) {
		    listeners.push(listener);
	};
	//*** END OBSERVABLE PATTERN ***
}

// this is the instance of our main model
// this is what you should use in your application
var model = new Model();

// you can use this method to create some test data and test your implementation
function createTestData(){
	model.addProject(42,"cool house",1,null,["pic1"], "A nice house");
	console.log("Project ID: " + model.projects[0].getName());
}
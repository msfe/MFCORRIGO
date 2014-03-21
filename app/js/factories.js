angular.module('mfcorrigoApp.factories', [])
.factory('Model', function() {
  var Model = {};
  var favorites = [];
  Model.addProject = function (project) {
    if(!project.id || !project.name || !project.type || !project.images || !project.about){
      console.log("Not null indata was null, exiting");
      return;
    }
    // var projectObj = new Project(project);
    favorites.push(project);
    return project;
  };
  Model.removeProject = function (project) {
    if(!project.id){
      console.log("id is null, can't remove project");
      return;
    }
    var remove = Model.contains(project);
    if(remove != -1){
      favorites.splice(remove,1);
    }else {
      console.log("project is not in favorites");
    }
  };
  Model.size = function() { return favorites.length; };
  Model.getAll = function() { return favorites; };
  Model.contains = function(project) {
    var index = -1;
    for(var i = 0; i<favorites.length; i++){
      var curr = favorites[i];
      if(curr.id == project.id){
        index = i;
        break;
      }
    }
    return index;
  }

  return Model;
});
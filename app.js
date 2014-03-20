$(function(){

	$('.nav li a').on('click', function(e){
		
        // e.preventDefault(); // prevent link click if necessary?

        var $thisLi = $(this).parent('li');
        var $ul = $thisLi.parent('ul');

        if (!$thisLi.hasClass('active'))
        {
        	$ul.find('li.active').removeClass('active');
        	$thisLi.addClass('active');
        }

      });
});

var app = angular.module('mfcorrigoApp', ['ngRoute', 'ui.bootstrap', 'ngDragDrop']);


app.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: '',
		templateUrl:'app/views/startView.html'
	})
	.when('/about', {
		controller: '',
		templateUrl:'app/views/aboutView.html'
	})
	.when('/services', {
		controller: '',
		templateUrl:'app/views/serviceView.html'
	})
	.when('/contact', {
		controller: '',
		templateUrl:'app/views/contactView.html'
	})	
	.when('/buildings', {
		controller: 'filterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/reconstruction', {
		controller: 'filterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/bathroom', {
		controller: 'filterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/interiours', {
		controller: 'filterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/fromConstruction', {
		controller: 'filterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/allProjects', {
		controller: 'filterController',
		templateUrl:'app/views/projectView.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});

app.factory('Model', function() {
  var Model = {};
  var favorites = [];
  Model.addProject = function (project) {
    if(!project.id || !project.name || !project.type || !project.images || !project.about){
      console.log("Not null indata was null, exiting");
      return;
    }
    var projectObj = new Project(project);
    favorites.push(projectObj);
    return project;
  };
  Model.removeProject = function (project) {
    if(!project.id){
      console.log("id is null, can't remove project");
      return;
    }
    var remove = -1;
    for(var i = 0; i<favorites.length; i++){
      var curr = favorites[i];
      if(curr.getId == project.id){
        remove = i;
        break;
      }
    }
    if(remove != -1){
      favorites.slice(remove,1);
    }else {
      console.log("project is not in favorites");
    }
  };
  Model.size = function() { return favorites.length; };
  Model.getAll = function() { return favorites; };

  return ListService;
});

app.controller('LoadModel', function ($scope, $http, $rootScope) {



    $scope.url = 'php/getDbData.php'; // The url of the php-request
    $http.post($scope.url, {}) // Create the http post request
    .success(function(data, status) {
      $scope.status = status;
      $rootScope.data = data;
      if($scope.data.indexOf("mysqli_connect()") != -1){
        console.log("Failed to connect to DB, faking model");
        $rootScope.data = fakeModel();
      }
      makeImageList();
    })
    .error(function(data, status) {
     console.log("No PHP-service found, faking model");
     $rootScope.data = fakeModel();
     $scope.status = status;         
     makeImageList();
   });

    
    function makeImageList(){
      for(project in $rootScope.data){
        var images = [];
        if($rootScope.data[project].imgrefr != null){
          images.push($rootScope.data[project].imgrefr);
        }
        if($rootScope.data[project].imgrefr2 != null){
          images.push($rootScope.data[project].imgrefr2);
        }  
        if($rootScope.data[project].imgrefr3 != null){
          images.push($rootScope.data[project].imgrefr3);
        }  
        if($rootScope.data[project].imgrefr4 != null){
          images.push($rootScope.data[project].imgrefr4);
        }  
        if($rootScope.data[project].imgrefr5 != null){
          images.push($rootScope.data[project].imgrefr5);
        }
        $rootScope.data[project].images = images;    
      }
    }
    

    function fakeModel() {
      var data = [
      {
        "id": "1",
        "name": "byggnader1",
        "type": "buildings",
        "year": null,
        "imgrefr": "betonghus1.png",
        "imgrefr2": "betonghus2.png",
        "imgrefr3": null,
        "imgrefr4": null,
        "imgrefr5": null,
        "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
      },
      {
       "id": "2",
       "name": "bathroom1",
       "type": "bathroom",
       "year": null,
       "imgrefr": "exbild1.jpg",
       "imgrefr2": "betonghus2.png",
       "imgrefr3": null,
       "imgrefr4": null,
       "imgrefr5": null,
       "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
     },
     {
       "id": "3",
       "name": "interiours1",
       "type": "interiours",
       "year": null,
       "imgrefr": "exbild2.jpg",
       "imgrefr2": "betonghus2.png",
       "imgrefr3": null,
       "imgrefr4": null,
       "imgrefr5": null,
       "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
     },
     {
       "id": "4",
       "name": "byggnader2",
       "type": "buildings",
       "year": null,
       "imgrefr": "exbild3.jpg",
       "imgrefr2": "betonghus2.png",
       "imgrefr3": null,
       "imgrefr4": null,
       "imgrefr5": null,
       "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
     },
     {
       "id": "5",
       "name": "fromConstruction1",
       "type": "fromConstruction",
       "year": null,
       "imgrefr": "exbild4.jpg",
       "imgrefr2": "betonghus2.png",
       "imgrefr3": null,
       "imgrefr4": null,
       "imgrefr5": null,
       "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
     },
     {
       "id": "6",
       "name": "bathrooms2",
       "type": "bathroom",
       "year": null,
       "imgrefr": "exbild5.jpg",
       "imgrefr2": "betonghus2.png",
       "imgrefr3": null,
       "imgrefr4": null,
       "imgrefr5": null,
       "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
     },
     {
       "id": "6",
       "name": "bathrooms3",
       "type": "bathroom",
       "year": null,
       "imgrefr": "exbild6.jpg",
       "imgrefr2": "betonghus2.png",
       "imgrefr3": null,
       "imgrefr4": null,
       "imgrefr5": null,
       "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng"
     },

     {
       "id": "7",
       "name": "reconstruction1",
       "type": "reconstruction",
       "year": null,
       "imgrefr": "exbild7.jpg",
       "imgrefr2": "betonghus2.png",
       "imgrefr3": null,
       "imgrefr4": null,
       "imgrefr5": null,
       "about": "Ett betonghus byggt med prefabricerade sandwich betongelement, sidobyggnad klädd med cortenplåt. Villan var med i TV8 programmet \"Hustoppen\" och fick 23 poäng."
     }
     ];
     return data;
   }
 });

var filterController = function ($scope, $rootScope, $modal, $log) {

  $scope.open = function (chosenProject) {

    var modalInstance = $modal.open({
      templateUrl: 'app/views/projectModalView.html',
      controller: ModalInstanceController,
      resolve: {
        project: function(){
          return chosenProject;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };

  $scope.ChangeType= function(type){
    $rootScope.type = type;
  };
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceController = function ($scope, $modalInstance, $rootScope, project) {

  $scope.project = project;
  $scope.myInterval = 5000;
  $scope.list1 = {title: 'AngularJS - Drag Me'};
  $scope.list2 = {};
  $scope.changeTextOnDrop = "Drag to favorites -> -> ->";
  // $scope.dragDropTextChanger = "Drag to add to favorites -> -> ->";
  // $scope.dragDropImageChanger = "res/projekt/" + project.images[0];

  $scope.close = function () {
    $modalInstance.dismiss('close');
  };

  $scope.ChangeType = function(type){
    $rootScope.type = type;
  };

  // $scope.changeDragDropView = function(isFavorite) {
  //   if(isFavorite) {
  //     $scope.dragDropTextChanger = "<- <- <- Drag to remove from favorites";
  //     $scope.dragDropImageChanger = "res/swedishflag.jpg"
  //   }
  //   else {
  //     $scope.dragDropTextChanger = "Drag to att to favorites -> -> ->";
  //     $scope.dragDropImageChanger = "res/projekt/" + project.images[0];
  //   }
  // }
  $scope.hejalert = function() {
    alert("heej");
  }

};
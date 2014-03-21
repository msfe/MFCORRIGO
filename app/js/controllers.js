'use strict';

/* Controllers */

angular.module('mfcorrigoApp.controllers', ['mfcorrigoApp.factories'])
// The startView for the carousel
.controller('StartViewController', function($scope) {
  $scope.myInterval = 5000;
  $scope.slides = [
  {
    image:"res/projects/exbild1.jpg",
    text: 'Över 6000 kvm nyproducerade ytor'
  },
  {
    image:"res/projects/exbild2.jpg",
    text: 'Över 3100 kvm totalt renoverade ytor'
  },
  {
    image:"res/projects/exbild3.jpg",
    text: '90 stycken moderna badrum'
  },
  {
    image:"res/projects/exbild5.jpg",
    text: '37 stycken fristående arkitektritade bostadshus'
  },
  {
    image:"res/projects/exbild6.jpg",
    text: 'Över 6000 kvm nyproducerade ytor'
  },
  {
    image:"res/projects/exbild7.jpg",
    text: 'Fler än 30 stycken tillbyggnader'
  }];
})

.controller('FilterController', function($scope, $rootScope, $modal, $log, Model) {

  $scope.favorites = Model.getAll();

  $scope.chosen = $rootScope.type == 'favorites';

  $scope.favoriteChosen = function(){
    return $rootScope.type == 'favorites';
  };

  $scope.open = function (chosenProject) {

    var modalInstance = $modal.open({
      templateUrl: 'app/views/projectModalView.html',
      controller: 'ProjectViewController',
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
})

.controller('ProjectViewController', function($scope, $modalInstance, $rootScope, project, Model) {
  $scope.project = project;
  $scope.myInterval = 5000;

  if(Model.contains(project) != -1) {
    $scope.righImgDrag = "true";
    $scope.righImgDrop = "false";
    $scope.leftImgDrag = "false";
    $scope.leftImgDrop = "true";

    $scope.changeTextOnDrop = "<- <- <- Drag to remove from favorites";
    $scope.changePic1 = "res/projects/garbage.jpg";
    $scope.changePic2 = "res/projects/"+project.images[0];
  }
  else {
    $scope.righImgDrag = "false";
    $scope.righImgDrop = "true";
    $scope.leftImgDrag = "true";
    $scope.leftImgDrop = "false";

    $scope.changeTextOnDrop = "Drag to add to favorites -> -> ->";
    $scope.changePic1 = "res/projects/"+project.images[0];
    $scope.changePic2 = "res/projects/star.png";
  }

  $scope.close = function () {
    $modalInstance.dismiss('close');
  };

  $scope.ChangeType = function(type){
    $rootScope.type = type;
  };

  $scope.changeDragAndDrop = function() {
    if(Model.contains(project) == -1) {
      Model.addProject(project);
      $scope.righImgDrag = "true";
      $scope.righImgDrop = "false";
      $scope.leftImgDrag = "false";
      $scope.leftImgDrop = "true";

      $scope.changeTextOnDrop = "<- <- <- Drag to remove from favorites";
      $scope.changePic1 = "res/projects/garbage.jpg";
      $scope.changePic2 = "res/projects/"+project.images[0];
    }
    else {
      Model.removeProject(project);
      $scope.righImgDrag = "false";
      $scope.righImgDrop = "true";
      $scope.leftImgDrag = "true";
      $scope.leftImgDrop = "false";

      $scope.changeTextOnDrop = "Drag to add to favorites -> -> ->";
      $scope.changePic1 = "res/projects/"+project.images[0];
      $scope.changePic2 = "res/projects/star.png";
    }
  };
})
.controller('LoadModel', function ($scope, $http, $rootScope) {
  var fakeDb = new FakeDb();

    $scope.url = 'php/getDbData.php'; // The url of the php-request
    $http.post($scope.url, {}) // Create the http post request
    .success(function(data, status) {
      $scope.status = status;
      $rootScope.data = data;
      if($scope.data.indexOf("mysqli_connect()") != -1){
        console.log("Failed to connect to DB, faking model");
        $rootScope.data = fakeDb.getDb();
      }
      makeImageList();
    })
    .error(function(data, status) {
     console.log("No PHP-service found, faking model");
     $rootScope.data = fakeDb.getDb();
     $scope.status = status;         
     makeImageList();
   });

    
    function makeImageList(){
      for( var project in $rootScope.data){
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
 });


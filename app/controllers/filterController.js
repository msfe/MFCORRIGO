function filterController($scope, $rootScope, $modal, $log, Model) {

  $scope.getFavorites = function(){
    return Model.getAll();
  }

  $scope.favorites = Model.getAll();

  $scope.chosen = $rootScope.type == 'favorites';

  $scope.favoriteChosen = function(){
    return $rootScope.type == 'favorites';
  }

  $scope.open = function (chosenProject) {

    var modalInstance = $modal.open({
      templateUrl: 'app/views/projectModalView.html',
      controller: 'projectModalViewController',
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

function projectModalViewController($scope, $modalInstance, $rootScope, project, Model) {
  $scope.project = project;
  $scope.myInterval = 5000;

  if(Model.contains(project) != -1) {
    $scope.righImgDrag = "true";
    $scope.righImgDrop = "false";
    $scope.leftImgDrag = "false";
    $scope.leftImgDrop = "true";

    $scope.changeTextOnDrop = "<- <- <- Drag to remove from favorites";
    $scope.changePic1 = "res/projekt/garbage.jpg";
    $scope.changePic2 = "res/projekt/"+project.images[0];
  }
  else {
    $scope.righImgDrag = "false";
    $scope.righImgDrop = "true";
    $scope.leftImgDrag = "true";
    $scope.leftImgDrop = "false";

    $scope.changeTextOnDrop = "Drag to add to favorites -> -> ->";
    $scope.changePic1 = "res/projekt/"+project.images[0];
    $scope.changePic2 = "res/projekt/star.png";
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
      $scope.changePic1 = "res/projekt/garbage.jpg";
      $scope.changePic2 = "res/projekt/"+project.images[0];
    }
    else {
      Model.removeProject(project);
      $scope.righImgDrag = "false";
      $scope.righImgDrop = "true";
      $scope.leftImgDrag = "true";
      $scope.leftImgDrop = "false";

      $scope.changeTextOnDrop = "Drag to add to favorites -> -> ->";
      $scope.changePic1 = "res/projekt/"+project.images[0];
      $scope.changePic2 = "res/projekt/star.png";
    }
  }
};
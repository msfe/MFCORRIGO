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

var app = angular.module('mfcorrigoApp', ['ngRoute', 'ui.bootstrap']);


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
		controller: 'ModalDemoCtrl',
		templateUrl:'app/views/projectView.html'
	})
	.when('/reconstruction', {
		controller: 'ModalDemoCtrl',
		templateUrl:'app/views/projectView.html'
	})
	.when('/bathroom', {
		controller: 'ModalDemoCtrl',
		templateUrl:'app/views/projectView.html'
	})
	.when('/interiours', {
		controller: 'ModalDemoCtrl',
		templateUrl:'app/views/projectView.html'
	})
	.when('/fromConstruction', {
		controller: 'ModalDemoCtrl',
		templateUrl:'app/views/projectView.html'
	})
	.when('/allProjects', {
		controller: 'ModalDemoCtrl',
		templateUrl:'app/views/projectView.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});

app.controller('filterController', function ($scope, $rootScope){
  var counter = 0;
  for(var projectId in $rootScope.data) {
    if($scope.type === $rootScope.data[projectId].type || $scope.type === 'all'){
      new buildingsView($rootScope.data[projectId], counter%3);
      counter++;
    }
  }

  $scope.ChangeType = function(type){
    $rootScope.type = type;
  };

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
    })
    .error(function(data, status) {
     console.log("No PHP-service found, faking model");
     $rootScope.data = fakeModel();
     $scope.status = status;         
   });


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

var ModalDemoCtrl = function ($scope, $modal, $log) {

  $scope.items = ['item1', 'item2', 'item3'];

  $scope.open = function () {

    var modalInstance = $modal.open({
      templateUrl: 'app/views/projectModalView.html',
      controller: ModalInstanceCtrl,
      resolve: {
        items: function () {
          return $scope.items;
        }
      }
    });

    modalInstance.result.then(function (selectedItem) {
      $scope.selected = selectedItem;
    }, function () {
      $log.info('Modal dismissed at: ' + new Date());
    });
  };
};

// Please note that $modalInstance represents a modal window (instance) dependency.
// It is not the same as the $modal service used above.

var ModalInstanceCtrl = function ($scope, $modalInstance, $rootScope, items) {

  $scope.items = items;
  $scope.selected = {
    item: $scope.items[0]
  };

  $scope.ok = function () {
    $modalInstance.close($scope.selected.item);
  };

  $scope.cancel = function () {
    $modalInstance.dismiss('cancel');
  };

  $scope.ChangeType = function(type){
    $rootScope.type = type;
  };

};
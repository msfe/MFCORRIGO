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
		controller: 'LoadModel',
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
		controller: '',
		templateUrl:'app/views/projectView.html'
	})
	.when('/reconstruction', {
		controller: '',
		templateUrl:'app/views/projectView.html'
	})
	.when('/bathroom', {
		controller: '',
		templateUrl:'app/views/projectView.html'
	})
	.when('/interiours', {
		controller: '',
		templateUrl:'app/views/projectView.html'
	})
	.when('/fromConstruction', {
		controller: '',
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

app.controller('filterController', function ($scope, $rootScope){

    for(var projectId in $rootScope.data) {
        new buildingsView($rootScope.data[projectId], projectId%3);
    }

    $scope.ChangeType = function(type){
        $scope.type = type;
    }
    
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
                "type": "byggnader",
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
             "type": "byggnader",
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
             "type": "bathrooms",
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
             "type": "bathrooms",
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
             "name": "buildings3",
             "type": "buildings",
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
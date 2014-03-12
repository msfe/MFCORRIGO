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

var app = angular.module('mfcorrigoApp', ['ngRoute']);
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
	.when('/projects', {
		controller: '',
		templateUrl:'app/views/projectView.html'
	})
	// .when('/reconstruction', {
	// 	controller: '',
	// 	templateUrl:'app/views/reconstructionView.html'
	// })
	// .when('/interiors', {
	// 	controller: '',
	// 	templateUrl:'app/views/interiorView.html'
	// })
	// .when('/constructions', {
	// 	controller: '',
	// 	templateUrl:'app/views/constructionView.html'
	// })
	// .when('/bathrooms', {
	// 	controller: '',
	// 	templateUrl:'app/views/bathroomView.html'
	// })
.otherwise({
	redirectTo: '/'
})
});

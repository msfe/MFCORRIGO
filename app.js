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
	.when('/projects', {
		controller: '',
		templateUrl:'app/views/projectView.html'
	})
	.otherwise({
		redirectTo: '/'
	})
});

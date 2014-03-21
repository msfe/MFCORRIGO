angular.module('mfcorrigoApp', [
	'ngRoute',
	'ui.bootstrap',
	'ngDragDrop',
	'mfcorrigoApp.factories',
	'mfcorrigoApp.controllers'
	])
.config(function($routeProvider) {
	$routeProvider
	.when('/', {
		controller: 'StartViewController',
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
		controller: 'FilterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/reconstruction', {
		controller: 'FilterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/bathroom', {
		controller: 'FilterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/interiours', {
		controller: 'FilterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/fromConstruction', {
		controller: 'FilterController',
		templateUrl:'app/views/projectView.html'
	})
	.when('/allProjects', {
		controller: 'FilterController',
		templateUrl:'app/views/projectView.html'
	})
    .when('/favorites', {
    controller: 'FilterController',
    templateUrl:'app/views/projectView.html'
  })
	.otherwise({
		redirectTo: '/'
	})
});
var app = angular.module('portfolio-app', ['ngRoute']);


app.config(function($routeProvider){
	
	$routeProvider.when('/',{
		templateUrl : 'pages/main.html',
	})
   .when('/projects',{
       templateUrl : 'pages/projects.html'
   })
   .when('/about', {
       templateUrl : 'pages/about.html'
   })
   .when('/contact', {
       templateUrl : 'pages/contact.html'
   })
	.otherwise({
		templateUrl : 'pages/main.html'
	})
});

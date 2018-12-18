angular.module('app', ['ui.router'])

angular.module('app')
	.config(function($stateProvider){
		$stateProvider
			.state('Home', {
				url: '/',
				templateUrl: './home/home.html',
				controller: 'HomeCtrl'
			})
	})
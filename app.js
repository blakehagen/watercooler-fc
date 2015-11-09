angular.module('waterCoolerFC', ['ui.router']).config(function ($stateProvider, $urlRouterProvider) {

    $stateProvider
        .state('home', {
            url: '/home',
            templateUrl: 'templates/homeTmpl.html',
            controller: 'leagueCtrl'
        })

        .state('league', {
            url: '/leagues/:league',
            templateUrl: 'templates/leagueTemplate.html',
            controller: 'leagueCtrl',
        })

        .state('about', {
            url: '/about',
            templateUrl: 'templates/aboutTemplate.html',
            controller: 'leagueCtrl',
        })

    $urlRouterProvider
        .otherwise('/home');
});
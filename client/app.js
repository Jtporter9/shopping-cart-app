(function() {
    'use strict';
angular
.module('app', ['ui.router'])
.config(appConfig); 

function appConfig ($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');

        $stateProvider
            .state('/', {
                url: '/',
                templateUrl: 'app/home/home.html',
                controller: 'homeCtrl',
                controllerAs: 'vm'
            })

    };
})(); // end of iife

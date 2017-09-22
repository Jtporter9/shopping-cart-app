(function() {
'use strict';

// app.module.js
angular
    .module('app', ['ui.router'])
    .config(config);

    function config($stateProvider, $urlRouterProvider, $httpProvider) {

        $urlRouterProvider.otherwise('/');
        
        $stateProvider
            .when('/', {
                url: '/',
                templateUrl: './app/home/home.html',
                controller: 'HomeController',
                controllerAs: 'vm'
            });
    }

})();
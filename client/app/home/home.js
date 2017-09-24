(function () {
  'use strict';
  angular
    .module('app')
    .controller('homeCtrl', homeCtrl);

  function homeCtrl() {
    /* jshint validthis: true */
    var vm = this;

    vm.test = "TESTING";
  }; // end of controller
})(); // end of iife

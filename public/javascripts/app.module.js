/**
 * Created by ghasbroucq on 10/11/2015.
 */
(function () {
    'use strict';


// declare a module
    var myAppModule = angular.module('myApp', ["restangular", "ui.router"]);

    myAppModule.config(["RestangularProvider", function (RestangularProvider) {
        RestangularProvider.setBaseUrl(document.location.pathname);
    }]);

    myAppModule.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

    }]);

    myAppModule.controller("restAngBadCtrl", ["$scope", "Restangular", function($scope, Restangular){

        var badUsers = Restangular.one("users");
        badUsers.get().then(function(res){
            $scope.badUsers = res;
        });
    }]);

    myAppModule.controller("restAngGoodCtrl", ["$scope", "Restangular", function($scope, Restangular){

        var goodUsers = Restangular.all("users");
        goodUsers.getList().then(function(res){
            $scope.goodUsers = res;
        });
    }]);


})();
/**
 * Created by ghasbroucq on 10/11/2015.
 */
(function () {
    'use strict';


// declare a module
    var myAppModule = angular.module('myApp', ["restangular", "ui.router", "btford.socket-io"]);

    myAppModule.config(["RestangularProvider", function (RestangularProvider) {
        RestangularProvider.setBaseUrl(document.location.pathname);
    }]);

    myAppModule.factory('SocketFactory', ["socketFactory", function (socketFactory) {
        return socketFactory();
    }]);

    myAppModule.config(["$stateProvider", "$urlRouterProvider", function ($stateProvider, $urlRouterProvider) {

        $urlRouterProvider.otherwise("/");

    }]);

    myAppModule.controller("restAngBadCtrl", ["$scope", "Restangular", function ($scope, Restangular) {

        var badUsers = Restangular.one("users");
        badUsers.get().then(function (res) {
            $scope.badUsers = res;
        });
    }]);

    myAppModule.controller("restAngGoodCtrl", ["$scope", "Restangular", function ($scope, Restangular) {

        var goodUsers = Restangular.all("users");
        goodUsers.getList().then(function (res) {
            $scope.goodUsers = res;
        });
    }]);

    myAppModule.controller("socketCtrl", ["$scope", "$http", "SocketFactory", function ($scope, $http, SocketFactory) {

        SocketFactory.on('event', function(value){
            $scope.state = value.status;
        });

        $scope.state = "Nothing";
        $scope.onClick = function () {
            $http.get("/socket").then(function (value) {
                $scope.state = value.data.status
            });
        };

    }]);


})();
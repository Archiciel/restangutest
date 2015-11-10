/**
 * Created by ghasbroucq on 10/11/2015.
 */
(function () {
    'use strict';


// declare a module
    var myAppModule = angular.module('myApp', ["restangular"]);

    myAppModule.config(["RestangularProvider", function (RestangularProvider) {
        RestangularProvider.setBaseUrl(document.location.pathname);
    }]);

    myAppModule.controller("restAngBadCtrl", ["$scope", "Restangular", function($scope, Restangular){

        $scope.badUsers = "En cours...";

        var badUsers = Restangular.one("users");
        badUsers.get().then(function(res){
            $scope.badUsers = res;
        });
    }]);

    myAppModule.controller("restAngGoodCtrl", ["$scope", "Restangular", function($scope, Restangular){

        $scope.goodUsers = "En cours...";

        var goodUsers = Restangular.all("users");
        goodUsers.getList().then(function(res){
            $scope.goodUsers = res;
        });
    }]);


})();
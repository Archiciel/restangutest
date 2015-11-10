/**
 * Created by ghasbroucq on 10/11/2015.
 */
(function () {
    'use strict';


// declare a module
    var myAppModule = angular.module('myApp', ["restangular"]);

    myAppModule.controller("restAngCtrl", ["$scope", "Restangular", function($scope, Restangular){

        $scope.users = "En cours...";

        var goodUsers = Restangular.all("users");
        goodUsers.getList().then(function(res){
            $scope.goodUsers = res;
        });
    }]);

})();
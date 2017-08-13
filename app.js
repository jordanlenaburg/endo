var app = angular.module("mainApp", ["ngRoute"]);

app.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home.html",
            controller: "homeCtrl"
        })

}]);
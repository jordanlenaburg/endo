var app = angular.module("mainApp", []);

app.config(["$routeProvider", function($routeProvider) {

    $routeProvider
        .when("/home", {
            templateUrl: "components/home.html",
            controller: "homeCtrl"
        })

}]);
angular.module("mainApp")
    .directive("banner", function () {
        return {
            templateUrl: "directives/banner/banner.html",
            restrict: "E"
        }
    });
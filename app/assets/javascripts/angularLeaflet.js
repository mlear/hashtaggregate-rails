var leaflet = angular.module("leaflet", ["leaflet-directive"]);

leaflet.controller("Hashtagable", [ '$scope', function($scope) {
    angular.extend($scope, {
        defaults: {
            scrollWheelZoom: false
        }
    });
}]);

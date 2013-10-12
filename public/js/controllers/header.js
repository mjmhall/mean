angular.module('mean.system').controller('HeaderController', ['$scope', 'Global', function ($scope, Global) {
    $scope.global = Global;

    $scope.setMenuData = function(data) {
        $scope.menu = data;
    };

    $scope.menu = [{
        "title": "Articles",
         "link": "articles"
    }, {
        "title": "Create New Article",
        "link": "articles/create"
    },];

    $scope.dropdown_menu_admin = [{
        "title": "Contestants",
        "link": "contestants" 
    }, {
        "title": "Events",
        "link": "events"    
    }];

    $scope.dropdown_menu_start = [{
        "title": "Setup Event",
        "linK": "setupevent"
    }, {
        "title": "Book Judges", 
        "linK": "bookjudges"
    }];

    $scope.dropdown_menu_status = [{
        "title": "Event Status",
        "linK": "setupevent"
    }, {
        "title": "Contestants Status", 
        "linK": "bookjudges"
    }];
}]);
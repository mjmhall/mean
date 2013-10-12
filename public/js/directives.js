  window.angular.module("mean.directives",[])
  .directive("dropdownmenu", function() {
    return {
      scope: {
        menutitle: "@",
        menudata: "="
      },
      restrict: "E",
      templateUrl: "views/interface/dropdownmenu.html",
      replace: true
    };
  });  
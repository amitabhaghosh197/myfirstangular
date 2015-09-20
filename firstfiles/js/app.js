/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */
var myApp = angular.module('myApp',[]);
myApp.controller('MyController',function($scope){
    $scope.clock = {
        now: new Date()
    };
    var updateClock = function(){
        $scope.clock.now = new Date();
    };
    setInterval( function(){
        $scope.$apply(updateClock);
    },1000);
    updateClock();
});

var app = angular.module('Name',[]);

app.controller('ChangeName',function($scope){
     $scope.name = 'World';
});
/* angular.bootstrap is required for creating multiple modules in one page  */
angular.bootstrap(document, ['myApp','Name']);
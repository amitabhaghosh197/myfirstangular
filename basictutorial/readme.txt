Creating multiple Modules in angularjs is possible by bootstrapping.
"To run multiple applications in an HTML document you must manually bootstrap them 
using angular.bootstrap instead. AngularJS applications cannot be nested within each other."--
https://docs.angularjs.org/api/ng/directive/ngApp

So use for it
angular.bootstrap(document, ['myApp','Name']);
reff:https://docs.angularjs.org/api/ng/function/angular.bootstrap
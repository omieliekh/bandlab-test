import angular from 'angular';

import 'angular-route';
import 'angular/angular-csp.css';
import './index.less';

import postsModule from './posts/posts.module';

angular.module('main', [
  postsModule
])
.config(['$locationProvider', '$routeProvider', function($locationProvider, $routeProvider) {
  $locationProvider.hashPrefix('!');

  $routeProvider.otherwise({redirectTo: '/posts'});
}]);

angular.bootstrap(document.documentElement, ['main']);


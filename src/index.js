import angular from 'angular';

import 'angular-route';
import 'angular/angular-csp.css';
import './index.less';

import menuComponent from './menu/menu.component';
import postsModule from './posts/posts.module';
import samplesModule from './samples/samples.module';

export default angular.module('main', [
    postsModule,
    samplesModule
  ])
  .config(['$locationProvider', '$routeProvider', function ($locationProvider, $routeProvider) {
    $locationProvider.hashPrefix('!');

    $routeProvider.otherwise({ redirectTo: '/posts' });
  }])
  .component('menu', menuComponent)
  .name;

angular.bootstrap(document.documentElement, ['main']);


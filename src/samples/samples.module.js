import SamplesController from './samples.controller'

export default angular.module('samples', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/samples', {
      template: require('./samples.html'),
      controller: SamplesController,
      activeTab: 'samples'
    });
  }])
  .name

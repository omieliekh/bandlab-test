import angular from 'angular';
import PostsController from './posts.controller';
import PostsService from './posts.service';
import postsTableComponent from './posts-table/posts-table.component';

export default angular.module('posts', ['ngRoute'])
  .config(['$routeProvider', function($routeProvider) {
    $routeProvider.when('/posts', {
      template: require('./posts.html'),
      // css: 'app/posts/posts.css',
      controller: PostsController
    });
  }])
  .service('PostsService', PostsService)
  .component('postsTable', postsTableComponent)
  .name;
import angular from 'angular';
import 'angular-route';
import PostsController from './posts.controller';
import PostsService from './posts.service';
import postsTableComponent from './posts-table/posts-table.component';

export default angular.module('posts', ['ngRoute'])
  .config(['$routeProvider', function ($routeProvider) {
    $routeProvider.when('/posts', {
      template: require('./posts.html'),
      controller: PostsController,
      activeTab: 'posts'
    });
  }])
  .service('PostsService', PostsService)
  .component('postsTable', postsTableComponent)
  .name;

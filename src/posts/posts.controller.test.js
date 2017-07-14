import angular from 'angular';
import 'angular-mocks';

import mainModule from '../index';
import PostsController from './posts.controller';

const { module, inject } = angular.mock;

const postsList = [
  {
    id: 1,
    title: 'title1',
    user: {
      name: 'name1'
    }
  }
];

const groupedPostsList = [
  {
    groupBy: postsList[0].user,
    posts: postsList
  }
];

const postServiceMock = {
  getTableData: function () {
    return {
      then: function (callback) {
        callback(postsList);
      }
    }
  },
  groupByUser: function () {
    return groupedPostsList;
  }
}

describe('PostsController', () => {
  beforeEach(module(mainModule));

  let ctrl;
  let scope;

  beforeEach(inject(($controller) => {
    scope = {};

    ctrl = $controller(PostsController, {
      PostsService: postServiceMock,
      $scope: scope
    });
  }));

  it('has proper view type', () => {
    expect(scope.viewType).toBe('ungroup');
  });

  it('has proper `posts` object', () => {
    expect(scope.posts).toBe(postsList);
  });

  it('has proper `groupedPosts` object', () => {
    expect(scope.groupedPosts).toBe(groupedPostsList);
  });
});
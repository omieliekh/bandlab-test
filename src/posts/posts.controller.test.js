import angular from 'angular';
import 'angular-mocks';

import postsModule from './posts.module';
import PostsController from './posts.controller';

const { module, inject } = angular.mock;

describe('PostsController', () => {
  it('dummy test', () => {
    expect(1).toBe(1);
  });
});
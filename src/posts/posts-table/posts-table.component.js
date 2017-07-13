import './posts-table.component.less';

function PostsTableController($scope, $element, $attrs) {
  $scope.sortBy = 'id'

  $scope.sortByUser = function () {
    if ($scope.sortBy === 'user.name') {
      $scope.sortBy = '-user.name';
    } else {
      $scope.sortBy = 'user.name';
    }
  }

  $scope.sortByTitle = function () {
    if ($scope.sortBy === 'title') {
      $scope.sortBy = '-title';
    } else {
      $scope.sortBy = 'title';
    }
  }
}

export default {
  template: require('./posts-table.component.html'),
  controller: PostsTableController,
  bindings: {
    posts: '='
  }
}

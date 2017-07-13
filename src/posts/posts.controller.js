export default ['PostsService', '$scope', function (postsService, $scope) {
  $scope.posts = null;
  $scope.groupedPosts = null;
  $scope.viewType = 'ungroup'; // 'ungroup' | 'group'

  postsService.getTableData().then((posts) => {
    $scope.posts = posts;
    $scope.groupedPosts = postsService.groupByUser($scope.posts);
  });

  $scope.groupPosts = function () {
    $scope.viewType = 'group';
  };

  $scope.ungroupPosts = function () {
    $scope.viewType = 'ungroup';
  };
}];

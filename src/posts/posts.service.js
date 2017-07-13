export default ['$http', '$q', function($http, $q) {
  this.getTableData = function() {
    var domain = 'https://jsonplaceholder.typicode.com';
    var defer = $q.defer();

    $q.all([
      $http.get(domain + '/users', {cache: true}),
      $http.get(domain + '/posts', {cache: true})
    ]).then(function(response) {
      var users = response[0].data;
      var posts = response[1].data;

      var tableData = posts.map(function (post) {
        var user = users.filter(function (user) {
          return user.id === post.userId
        })[0]

        return {
          id: post.id,
          title: post.title,
          user: user
        }
      });

      defer.resolve(tableData)
    });

    return defer.promise;
  }
  
  this.groupByUser = function (arr) {
    var result = []

    arr.forEach(function (arrItem) {
      var group = result.filter(function (resultItem) {
        return resultItem.groupBy.id === arrItem.user.id
      })[0];

      if (!group) {
        group = {
          groupBy: arrItem.user,
          posts: []
        }

        result.push(group);
      }

      group.posts.push(arrItem);
    })

    return result;
  }
}];
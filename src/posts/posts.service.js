export default ['$http', '$q', function ($http, $q) {
  this.getTableData = function () {
    const domain = 'https://jsonplaceholder.typicode.com';
    const defer = $q.defer();

    $q.all([
      $http.get(`${domain}/users`, { cache: true }),
      $http.get(`${domain}/posts`, { cache: true })
    ]).then((response) => {
      const users = response[0].data;
      const posts = response[1].data;

      const tableData = posts.map((post) => {
        const matchedUser = users.filter(user => user.id === post.userId)[0];

        return {
          id: post.id,
          title: post.title,
          user: matchedUser
        };
      });

      defer.resolve(tableData);
    });

    return defer.promise;
  };

  this.groupByUser = function (arr) {
    const result = [];

    arr.forEach((arrItem) => {
      let group = result
        .filter(resultItem => resultItem.groupBy.id === arrItem.user.id)[0];

      if (!group) {
        group = {
          groupBy: arrItem.user,
          posts: []
        };

        result.push(group);
      }

      group.posts.push(arrItem);
    });

    return result;
  };
}];

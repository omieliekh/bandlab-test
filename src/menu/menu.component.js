import './menu.component.less';

function MenuController($scope, $element, $attrs, $route) {
  var ctrl = this;

  $scope.$route = $route;
}

export default {
  template: require('./menu.component.html'),
  controller: MenuController,
  bindings: {
    posts: '='
  }
}

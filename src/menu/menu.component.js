import './menu.component.less';

function MenuController($scope, $element, $attrs, $route) {
  $scope.$route = $route;
}

export default {
  template: require('./menu.component.html'),
  controller: MenuController,
  bindings: {
    posts: '='
  }
};

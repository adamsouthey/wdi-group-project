angular
  .module('eventApp')
  .config(Router);

Router.$inject = ['$stateProvider', '$urlRouterProvider', '$locationProvider'];
function Router($stateProvider, $urlRouterProvider, $locationProvider) {
  $locationProvider.html5Mode(true);

  $stateProvider
    .state('home', {
      url: '/',
      templateUrl: 'js/views/static/home.html'
    })
    .state('groupsIndex', {
      url: '/groups',
      templateUrl: '/js/views/groups/index.html',
      controller: 'GroupsIndexCtrl as vm'
    })
    .state('groupsShow', {
      url: '/groups/:groupName/:id',
      templateUrl: '/js/views/groups/show.html',
      controller: 'GroupsShowCtrl as vm'
    })
    .state('login', {
      url: '/login',
      templateUrl: '/js/views/auth/login.html',
      controller: 'LoginCtrl as vm'
    })
    .state('register', {
      url: '/register',
      templateUrl: '/js/views/auth/register.html',
      controller: 'RegisterCtrl as vm'
    })
    .state('usersShow', {
      url: '/users/:id',
      templateUrl: 'js/views/users/show.html',
      controller: 'UsersShowCtrl as vm'
    });

  $urlRouterProvider.otherwise('/');
}

angular
  .module('eventApp')
  .controller('MainCtrl', MainCtrl);

MainCtrl.$inject = ['$transitions', '$rootScope'];
function MainCtrl($transitions, $rootScope) {
  const vm = this;

  $transitions.onSuccess({}, (transition) => {
    // closes the mobile menu each time the state changes
    vm.menuIsOpen = false;
    // attaches the state name to the main controller to be used as a class name on the body
    vm.pageName = transition.to().name;

  });

  $rootScope.$on('error', (e, err) => {
    console.log(e, err);
  });


}

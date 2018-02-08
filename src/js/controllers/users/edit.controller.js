angular
  .module('eventApp')
  .controller('UsersEditCtrl', UsersEditCtrl);

UsersEditCtrl.$inject = ['User', '$state'];
function UsersEditCtrl(User, $state) {
  const vm = this;

  vm.user = {};
  vm.update = update;

  vm.user = User.get($state.params);

  function update(){
    User
      .update({ id: $state.params.id }, vm.user)
      .$promise
      .then(() => $state.go('usersIndex'));
  }
}

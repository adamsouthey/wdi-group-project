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
      .then(user => $state.go('usersShow', { id: user.id }));
  }

  function showInterests(interest) {
    if(vm.user.interests.indexOf(interest) === -1) {
      vm.user.interests.push(interest);
    } else {
      const index = vm.user.interests.indexOf(interest);
      vm.user.interests.splice(index, 1);
    }

    console.log(vm.user.interests);
  }
  vm.showInterests = showInterests;
}

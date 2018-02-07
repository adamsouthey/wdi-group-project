angular
  .module('eventApp')
  .controller('RegisterCtrl', RegisterCtrl);

RegisterCtrl.$inject = ['$auth', '$state'];
function RegisterCtrl($auth, $state) {
  const vm = this;
  vm.user = { interests: []};

  function submit() {
    $auth.signup(vm.user)
      .then(() => $state.go('login'));
  }

  vm.submit = submit;

  function showInterests(interest) {

    if(vm.user.interests.indexOf(interest) === -1) {
      vm.user.interests.push(interest);
    } else {
      const index = vm.user.interests.indexOf(interest);
      vm.user.interests.splice(index, 1);
    }

    console.log(vm.user.interests);
    // console.log('vm.user.interests',vm.user.interests);
  }
  vm.showInterests = showInterests;
}

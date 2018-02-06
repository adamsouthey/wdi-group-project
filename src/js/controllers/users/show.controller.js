angular
  .module('eventApp')
  .controller('UsersShowCtrl', UsersShowCtrl);

UsersShowCtrl.$inject = ['User', '$state', '$http'];
function UsersShowCtrl(User, $state, $http) {
  const vm = this;
  vm.user = User.get($state.params);

  getMembersEvents();

  function getMembersEvents(){

    $http
      .get('/api/groups')
      .then((response) => {
        console.log('response.data.group', response.data);
        // vm.groupInformation = response.data.group;
        // return group;
      });
  }
}

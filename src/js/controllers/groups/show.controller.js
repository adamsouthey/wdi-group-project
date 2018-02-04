angular
  .module('eventApp')
  .controller('GroupsShowCtrl', GroupsShowCtrl);

GroupsShowCtrl.$inject = ['$state', '$stateParams', 'Group'];
function GroupsShowCtrl($state, $stateParams, Group) {
  const vm = this;

  Group.get($state.params)
    .$promise
    .then((group) => {
      vm.group = group;

    });
}

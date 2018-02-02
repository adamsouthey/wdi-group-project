angular
  .module('eventApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = [ 'Group'];
function GroupsIndexCtrl(Group) {
  const vm = this;
  vm.all = Group.query();
}

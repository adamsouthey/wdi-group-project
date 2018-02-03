angular
  .module('eventApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = ['$http'];
function GroupsIndexCtrl($http) {
  const vm = this;

  groupsIndex();

  function groupsIndex() {
    $http
      .get('https://api.meetup.com/find/upcoming_events/?lat=51&lon=-0.12&key=4262f441d125f665b6359c401776')
      .then((res) => {
        vm.all = res.data;
        console.log('hello');
      });
  }
}

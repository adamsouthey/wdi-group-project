// angular
//   .module('eventApp')
//   .controller('GroupsIndexCtrl', GroupsIndexCtrl);
//
// GroupsIndexCtrl.$inject = [ 'Group'];
// function GroupsIndexCtrl(Group) {
//   const vm = this;
//   vm.all = Group.query();
// }
angular
  .module('eventApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);


GroupsIndexCtrl.$inject = ['$http'];
function GroupsIndexCtrl($http) {
  const vm = this;


  $http
    .get('https://api.meetup.com/find/upcoming_events?photo-host=public&page=20&sig_id=240914666&sig=d7ab433738473e8efe8f309096e2d34dd67fd047')
    .then((res) => {
      vm.all = res.data;
      console.log('hello');
    });
}

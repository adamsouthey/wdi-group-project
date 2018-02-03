// angular
//   .module('eventApp')
//   .controller('GroupsIndexCtrl', GroupsIndexCtrl);
//
// GroupsIndexCtrl.$inject = ['$http'];
// function GroupsIndexCtrl($http) {
//   const vm = this;
//
//   groupsIndex();
//
//   function groupsIndex() {
//     $http
//       .get('https://api.meetup.com/find/upcoming_events/?lat=51&lon=-0.12&key=4262f441d125f665b6359c401776')
//       .then((res) => {
//         vm.all = res.data;
//         console.log('hello');
//       });
//   }
// }

angular
  .module('eventApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);


GroupsIndexCtrl.$inject = ['$http', 'Group'];
function GroupsIndexCtrl($http, Group) {
  const vm = this;

  vm.all = Group.query();


  // $http
  //   .get('https://api.meetup.com/find/upcoming_events?photo-host=public&page=20&sig_id=240914666&sig=d7ab433738473e8efe8f309096e2d34dd67fd047')
  //   .then((res) => {
  //     vm.all = res.data;
  //     console.log('hello');
  //   });
}

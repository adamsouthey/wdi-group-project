angular
  .module('eventApp')
  .controller('GroupsShowCtrl', GroupsShowCtrl);

GroupsShowCtrl.$inject = ['$http', 'Group', 'filterFilter', '$scope', '$sce', '$state'];
function GroupsShowCtrl($http, Group, filterFilter, $scope, $sce, $state) {
  const vm = this;
  const eventId = $state.params.id;
  const groupName = $state.params.groupName;

  //   $http
  //     .get($state.params)
  //     .$promise
  //     .then((group) => {
  //       vm.group = group;
  //
  //     });
  // }

  getEventsById();

  function getEventsById(){
    $http
      .get(`/api/events/${groupName}/${eventId}`)
      .then((response) => {
        console.log(response);
        vm.eventInformation = response.data;
        vm.eventInformation.description = $sce.trustAsHtml(vm.eventInformation.description);
        // vm.eventInformation = response.data.events.map(event => {
        //   event.description = $sce.trustAsHtml(event.description);
        //   return event;
        // });
      });
  }
}

angular
  .module('eventApp')
  .controller('GroupsShowCtrl', GroupsShowCtrl);

GroupsShowCtrl.$inject = ['$http', 'Group', 'filterFilter', '$scope', '$sce', '$state'];
function GroupsShowCtrl($http, Group, filterFilter, $scope, $sce, $state) {
  const vm = this;
  const meetupId = $state.params.id;
  const groupName = $state.params.groupName;

  getEventsById();

  function getEventsById(){
    console.log('in getEventsById');
    // console.log('meetupId',meetupId);
    // console.log('groupName',groupName);
    $http
      .get(`/api/events/${groupName}/${meetupId}`)
      .then((response) => {
        console.log('response',response);
        vm.eventInformation = response.data;
        vm.eventInformation.description = $sce.trustAsHtml(vm.eventInformation.description);
        // vm.eventInformation = response.data.events.map(event => {
        //   event.description = $sce.trustAsHtml(event.description);
        //   return event;
        // });
      });
  }
}

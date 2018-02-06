angular
  .module('eventApp')
  .controller('GroupsShowCtrl', GroupsShowCtrl);

GroupsShowCtrl.$inject = ['$http', 'Group', 'filterFilter', '$scope', '$sce', '$state'];
function GroupsShowCtrl($http, Group, filterFilter, $scope, $sce, $state) {
  const vm = this;
  const meetupId = $state.params.id;
  const groupName = $state.params.groupName;

  getEventById();

  function getEventById(){
    $http
      .get(`/api/events/${groupName}/${meetupId}`)
      .then((response) => {
        vm.eventInformation = response.data;
        vm.eventInformation.description = $sce.trustAsHtml(vm.eventInformation.description);
      })
      // second request to get group back from the database
      .then(() => {
        Group
          .get({ meetupId })
          .$promise
          .then((group) => vm.group = group);
      });

  }

  function addComment() {
    Group
      .addComment({ meetupId: meetupId }, vm.newComment)
      .$promise
      .then((comment) => {
        vm.group.comments.push(comment);
        vm.newComment = {};
      });
  }
  vm.addComment = addComment;


}

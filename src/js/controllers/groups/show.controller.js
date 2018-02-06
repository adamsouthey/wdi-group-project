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

  // COMMENTS
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


  function deleteComment(comment) {
    Group
      .deleteComment({ meetupId: meetupId, commentId: comment.id })
      .$promise
      .then(() => {
        const index = vm.group.comments.indexOf(comment);
        vm.group.comments.splice(index, 1);
      });
  }
  vm.deleteComment = deleteComment;


  function foundMember(currentUserId) {
    return vm.group.members.indexOf(currentUserId) > -1;
  }
  vm.foundMember = foundMember;

}

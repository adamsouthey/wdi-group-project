angular
  .module('eventApp')
  .controller('GroupsShowCtrl', GroupsShowCtrl);

GroupsShowCtrl.$inject = ['$http', 'Group', 'filterFilter', '$scope', '$sce', '$state', 'User', '$auth'];
function GroupsShowCtrl($http, Group, filterFilter, $scope, $sce, $state, User, $auth) {
  const vm = this;
  const meetupId = $state.params.id;
  const groupName = $state.params.groupName;
  const currentUserId = $auth.getPayload().userId;

  //  TABS ON SHOW PAGE
  vm.selectTab = selectTab;

  vm.tabs = {
    description: false,
    map: true,
    comments: false
  };

  function selectTab(type) {
    vm.currentTab = type;
    vm.tabs.description = false;
    vm.tabs.map = false;
    vm.tabs.comments = false;
    vm.tabs[type] = true;
  }


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
          .then((group) => {
            vm.group = group;

            if(vm.group.members.indexOf(currentUserId) > -1) {
              vm.isMember = true;
            } else {
              vm.isMember = false;
            }
          });
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

  function joinGroup(group) {
    Group
      .join({ meetupId: group.id, urlname: group.group.urlname })
      .$promise
      .then((group) => {
        vm.currentUser = User.get({ id: currentUserId });
        vm.group = group;
        vm.isMember = true;
      });
  }
  vm.joinGroup = joinGroup;

  function leaveGroup(group) {
    Group
      .leave({ meetupId: group.id })
      .$promise
      .then(() => {
        vm.currentUser = User.get({ id: currentUserId });
        vm.group = group;
        vm.isMember = false;
      });
  }
  vm.leaveGroup = leaveGroup;
}

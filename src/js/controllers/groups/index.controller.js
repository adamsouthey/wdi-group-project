angular
  .module('eventApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = ['$http', 'Group', 'filterFilter', '$scope', '$sce', '$auth', 'User'];
function GroupsIndexCtrl($http, Group, filterFilter, $scope, $sce, $auth, User) {
  const vm = this;

  const currentUserId = $auth.getPayload().userId;
  // inside vm.currentUserId you would have .groups which is an array of populated group objs from your database, which includes the meetupId
  vm.currentUser = User.get({ id: currentUserId });

  function filterGroup() {
    const params = { name: vm.query };
    if(vm.usePrice) params.price = vm.price;
    vm.filtered = filterFilter(vm.eventInformation, params);
  }

  getWeather();

  function getWeather(){
    $http
      .get('/api/weather')
      .then((response) => {
        console.log(response);
        vm.weatherSummary = response.data.minutely.summary;
      });
  }

  vm.getEvents = getEvents;

  function getEvents(){
    $http
      .get('/api/events', { params: vm.location })
      .then((response) => {
        console.log(response);
        vm.eventInformation = response.data.events.map(event => {
          event.description = $sce.trustAsHtml(event.description);
          return event;
        });
        filterGroup();
      });
  }

  $scope.$watchGroup([
    () => vm.query,
    () => vm.price,
    () => vm.usePrice

  ], filterGroup);

  vm.filterGroup = filterGroup;

  function joinGroup(group) {
    const newGroup = {
      name: group.name
    };
    Group
      .join({ meetupId: group.id, urlname: group.group.urlname }, newGroup)
      .$promise
      .then(() => {
        vm.currentUser = User.get({ id: currentUserId });
        // here group is the newly created or updated group object in your db
      });
  }
  vm.joinGroup = joinGroup;

  function leaveGroup(group) {
    Group
      .leave({ meetupId: group.id })
      .$promise
      .then(() => {
        vm.currentUser = User.get({ id: currentUserId });
      });
  }
  vm.leaveGroup = leaveGroup;

  function isInGroup(group) {
    if(!vm.currentUser.groups) return false;
    // if the current user has been returned from the db carry on
    // store the meetup id from the group passed in
    const meetupId = group.id;

    // try and find a group inside the user's groups that matches that id
    const foundGroup = vm.currentUser.groups.some((group) => {
      return group.meetupId === meetupId;
    });

    if (foundGroup) {
      return true;
    } else {
      return false;
    }
  }
  vm.isInGroup = isInGroup;

}

angular
  .module('eventApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = ['$http', 'Group', 'filterFilter', '$scope', '$sce', '$auth', 'User', '$window'];
function GroupsIndexCtrl($http, Group, filterFilter, $scope, $sce, $auth, User, $window) {
  const vm = this;

  const cachedLatLng = $window.localStorage.getItem('location');
  const cachedCity = $window.localStorage.getItem('city');
  vm.city = cachedCity || 'Aldgate East, UK'; // putting the city string into the search box

  if (cachedLatLng) {
    vm.defaultLocation = JSON.parse(cachedLatLng);
  } else {
    vm.defaultLocation ={
      lat: 51.509865,
      lng: -0.118092
    };
  }

  getEvents();

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

  $scope.$watch(() => vm.location, getEvents);

  function getEvents(){
    if (vm.location) $window.localStorage.setItem('location', JSON.stringify(vm.location));
    if (vm.city) $window.localStorage.setItem('city', vm.city);

    $http
      .get('/api/events', { params: vm.location || vm.defaultLocation })
      .then((response) => {
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
      name: group.name,
      localDate: group.local_date,
      city: group.venue.city
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

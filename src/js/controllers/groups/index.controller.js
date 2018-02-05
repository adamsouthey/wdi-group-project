angular
  .module('eventApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = ['$http', 'Group', 'filterFilter', '$scope', '$sce'];
function GroupsIndexCtrl($http, Group, filterFilter, $scope, $sce) {
  const vm = this;

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

  getEvents();

  function getEvents(){
    $http
      .get('/api/events')
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

  // JOINING A GROUP
  function joinGroup(group) {
    Group
      .join({ meetupId: group.id })
      .$promise
      .then((group) => {
        // here group is the newly created or updated group object in your db
        console.log('joined', group);
      });
  }
  vm.joinGroup = joinGroup;

}

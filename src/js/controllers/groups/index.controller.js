angular
  .module('eventApp')
  .controller('GroupsIndexCtrl', GroupsIndexCtrl);

GroupsIndexCtrl.$inject = ['$http', 'Group', 'filterFilter', '$scope'];
function GroupsIndexCtrl($http, Group, filterFilter, $scope) {
  const vm = this;

  Group
    .query()
    .$promise
    .then((groups) => {
      vm.all = groups;
      filterGroup();


    });

  function filterGroup() {
    const params = { name: vm.query };
    if(vm.usePrice) params.price = vm.price;
    vm.filtered = filterFilter(vm.all, params);
    console.log('firing');
  }

  filterGroup();
  getWeather();


  function getWeather(){

    $http
      .get('/api/weather')
      .then((response) => {
        console.log(response);
        console.log('weather firing');
        vm.weatherSummary = response.data.minutely.summary;
      });
  }

  getEvents();

  function getEvents(){
    $http
      .get('/api/events')
      .then((response) => {
        console.log(response);
        console.log('events firing');
        vm.eventInformation = response.data;
        console.log(vm.eventInformation);
      });
  }

  $scope.$watchGroup([
    () => vm.query,
    () => vm.price,
    () => vm.usePrice

  ], filterGroup);

  vm.filterGroup = filterGroup;
}

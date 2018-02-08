angular
  .module('eventApp')
  .directive('googleMap', googleMap);

googleMap.$inject = ['$window'];
function googleMap($window) {
  return {
    restrict: 'E',
    replace: true,
    template: '<div class="google-map"></div>',
    scope: {
      center: '='
    },
    link(scope, element) {

      scope.$watch('center', () => {
        if (!scope.center.lat || !scope.center.lng) return false;

        const map = new $window.google.maps.Map(element[0], {
          zoom: 14,
          center: scope.center,
          styles: [{'stylers': [{'hue': '#dd0d0d'}]},{'featureType': 'road','elementType': 'labels','stylers': [{'visibility':'off'}]},{'featureType': 'road','elementType': 'geometry','stylers': [{'lightness':100},{'visibility': 'simplified'}]}]

        });

        new $window.google.maps.Marker({
          position: scope.center,
          map: map
        });
      });


    }
  };
}

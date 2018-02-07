angular
  .module('eventApp')
  .directive('googleAutocomplete', googleAutocomplete);

googleAutocomplete.$inject = ['$window'];
function googleAutocomplete($window) {
  return {
    restrict: 'A',
    require: 'ngModel',
    scope: {
      location: '='
    },
    link: function(scope, element, attrs, model) {
      var options = {
        types: ['(cities)']
      };
      scope.inputBox = new $window.google.maps.places.Autocomplete(element[0], options);

      $window.google.maps.event.addListener(scope.inputBox, 'place_changed', function() {
        scope.$apply(function() {
          const locationData = scope.inputBox.getPlace();


          const location = {
            lat: locationData.geometry.location.lat(),
            lng: locationData.geometry.location.lng()
          };

          scope.location = location;
          // updating vm.city to be the string
          model.$setViewValue(element.val());
        });
      });
    }
  };
}

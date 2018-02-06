angular
  .module('eventApp')
  .directive('googleAutocomplete', googleAutocomplete);

googleAutocomplete.$inject = ['$window'];
function googleAutocomplete($window) {
  console.log('fire first');
  return {
    restrict: 'A',
    require: 'ngModel',
    link: function(scope, element, attrs, model) {
      var options = {
        types: ['(cities)'],
        componentRestrictions: {country: 'uk'}
      };
      scope.inputBox = new $window.google.maps.places.Autocomplete(element[0], options);

      $window.google.maps.event.addListener(scope.inputBox, 'place_changed', function() {
        scope.$apply(function() {
          const locationData = scope.inputBox.getPlace();


          const location = {
            lat: locationData.geometry.location.lat(),
            lng: locationData.geometry.location.lng()
          };

          console.log(location);

          model.$setViewValue(location);
        });
      });
    }
  };
}

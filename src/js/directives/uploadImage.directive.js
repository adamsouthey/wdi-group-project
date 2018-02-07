angular
  .module('eventApp')
  .directive('uploadImage', uploadImage);

uploadImage.$inject = ['filepickerService'];
function uploadImage(filepickerService) {
  return {
    restrict: 'A',
    require: 'ngModel',

    link: (scope, element, attrs, model) => {
      //add event listener to directive template, changes default behaviour of button when clicked
      element.bind('click', (e) => {
        e.preventDefault();

        //handles ONLY IMAGES
        filepickerService
          .pick({ mimetype: 'image/* '}, data => {
            model.$setViewValue(data.url);
          });
      });
    }
  };
}

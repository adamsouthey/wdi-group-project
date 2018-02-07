angular
  .module('eventApp')
  .config(FileStack);

FileStack.$inject = ['filepickerProvider'];
function FileStack(filepickerProvider) {
  filepickerProvider.setKey('AI85glpMjQZuhWJFfvwtsz');
}

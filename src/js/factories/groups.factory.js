angular
  .module('eventApp')
  .factory('Group', Group);

Group.$inject = ['$resource'];
function Group($resource){
  return $resource('/api/groups/:meetupId', { id: '@_id', meetupId: '@meetupId', urlname: '@urlname'}, {
    'update': { method: 'PUT' },
    'join': { method: 'POST', url: '/api/groups/:urlname/:meetupId/join' },
    'leave': { method: 'DELETE', url: '/api/groups/:meetupId/leave'},
    'addComment': { method: 'POST', url: '/api/groups/:meetupId/comments'},
    'deleteComment': { method: 'DELETE', url: '/api/groups/:meetupId/comments/:commentId'}
  });
}

// angular
//   .module('eventApp')
//   .factory('Group', Group);
//
// Group.$inject = ['$resource', 'API'];
// function Group($resource, API){
//   return $resource(`${API}/groups/:id`, { id: '@_id'}, {
//     'update': { method: 'PUT' }
//     // 'addComment': { method: 'POST', url: `${API}/movies/:id/comments` },
//     // 'deleteComment': { method: 'DELETE', url: `${API}/movies/:movieId/comments/:commentId` }
//   });
// }

angular
  .module('eventApp')
  .factory('Group', Group);

Group.$inject = ['$resource'];
function Group($resource){
  return $resource('/api/groups/:id', { id: '@_id'}, {
    'update': { method: 'PUT' }
  });
}

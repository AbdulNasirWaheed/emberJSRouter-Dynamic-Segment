import Route from '@ember/routing/route';

export default Route.extend({
	model: function(params, transition) {
      return { username: params.username }; 
   },
   
   serialize: function(model) {
      return { username: model.get('username') }; 
   }
});

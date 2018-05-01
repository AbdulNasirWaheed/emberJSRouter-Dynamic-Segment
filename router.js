import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType,
  rootURL: config.rootURL
});

Router.map(function() {
  this.route('nestedroute', function() {
    this.route('fruits');
  });
  this.route('blog-post', { path: '/blog-post/:username'});
});

export default Router;

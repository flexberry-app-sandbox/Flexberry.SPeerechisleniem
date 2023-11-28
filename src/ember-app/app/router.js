import EmberRouter from '@ember/routing/router';
import config from './config/environment';

const Router = EmberRouter.extend({
  location: config.locationType
});

Router.map(function () {
  this.route('i-i-s-s-peerechisleniem-накладная-l');
  this.route('i-i-s-s-peerechisleniem-накладная-e',
  { path: 'i-i-s-s-peerechisleniem-накладная-e/:id' });
  this.route('i-i-s-s-peerechisleniem-накладная-e.new',
  { path: 'i-i-s-s-peerechisleniem-накладная-e/new' });
  this.route('i-i-s-s-peerechisleniem-ответственный-l');
  this.route('i-i-s-s-peerechisleniem-ответственный-e',
  { path: 'i-i-s-s-peerechisleniem-ответственный-e/:id' });
  this.route('i-i-s-s-peerechisleniem-ответственный-e.new',
  { path: 'i-i-s-s-peerechisleniem-ответственный-e/new' });
});

export default Router;

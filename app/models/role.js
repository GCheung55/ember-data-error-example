import Model, { attr, hasMany } from '@ember-data/model';

export default class Role extends Model {
  @attr('string') name;
  @attr privileges;
  @hasMany('user') users;
}

import Model, { attr, belongsTo, hasMany } from '@ember-data/model';
import { readOnly as readOnlyAlias } from '@ember/object/computed';

export default class UserModel extends Model {
	@attr('string') username;
	@attr('string') password;
	
	@belongsTo('role', { inverse: 'users' }) role;
	@hasMany('report-card') reportCards;
	@belongsTo('contact', { inverse: null }) contact;
	@hasMany('project', { inverse: 'userFavourites' }) favourites;
	
	@readOnlyAlias('contact.nameOnly') name;

	@readOnlyAlias('role.privileges') privileges;

	hasPrivilege(privilege) {
		const privileges = this.privileges;
		return privileges && privileges.indexOf(privilege) !== -1;
	}
}

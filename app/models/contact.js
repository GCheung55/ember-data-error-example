import Model, { attr, hasMany } from '@ember-data/model';

export default class ContactModel extends Model {
	@attr('string') firstName;
	@attr('string') lastName;
	@attr('string') title;
	@attr('string') email;
	@attr('string') phone;
	@attr('string') cell;
	@attr('string') fax;
    @attr('string') honorific;
    
	@hasMany('project-staff', { inverse: 'contact' }) projectStaff;
}
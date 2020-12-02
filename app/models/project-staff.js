import Model, { belongsTo, attr } from '@ember-data/model';
import { alias } from '@ember/object/computed';

export default class ProjectStaffModel extends Model {
	@attr('string') role;
	@attr('boolean') projectManager;
	@belongsTo('contact', { inverse: 'projectStaff' }) contact;
	@belongsTo('project', { inverse: 'staff' }) project;
	
	@alias('contact.name') name;
	@alias('contact.nameOnly') nameOnly;
}
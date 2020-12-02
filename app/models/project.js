import Model, { hasMany, attr } from '@ember-data/model';

export default class ProjectStaffModel extends Model {
    @attr('string') name;
	@hasMany('project-staff', { inverse: 'project' }) staff;
}
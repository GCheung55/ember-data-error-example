import ApplicationSerializer from './application';

export default class ProjectSerializer extends ApplicationSerializer {
	attrs = {
		staff: {
			serialize: false,
			deserialize: 'ids'
		},
		labels: {
			serialize: 'records',
			deserialize: 'ids'
		},
		messages: {
			serialize: false,
			deserialize: 'ids'
		}
	}
}
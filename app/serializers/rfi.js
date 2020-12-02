import ApplicationSerializer from './application';

export default class RfiSerializer extends ApplicationSerializer {
	attrs = {
		contacts: {
			serialize: 'records',
			deserialize: 'ids'
		}
	}
}
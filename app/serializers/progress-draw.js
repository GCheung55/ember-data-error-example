import ApplicationSerializer from './application';

export default class ProgressDrawSerializer extends ApplicationSerializer {
	attrs = {
		items: {
			serialize: 'records',
			deserialize: 'ids'
		}
	}
}
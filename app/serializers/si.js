import ApplicationSerializer from './application';

export default class SiSerializer extends ApplicationSerializer {
	attrs = {
		contacts: {
			serialize: 'records',
			deserialize: 'ids'
		}
	}
}
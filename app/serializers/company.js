import ApplicationSerializer from './application';

export default class CompanySerializer extends ApplicationSerializer {
	attrs = {
		contacts: {
			serialize: 'ids',
			deserialize: 'ids'
		},
		costCodes: {
			serialize: 'ids',
			deserialize: 'ids'
		}
	};
}
import ApplicationSerializer from './application';

export default class SubmittalSerializer extends ApplicationSerializer {
	attrs = {
		traceRecords: {
			serialize: 'records',
			deserialize: 'ids'
		}
	}
}
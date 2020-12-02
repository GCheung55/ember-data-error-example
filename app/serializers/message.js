import ApplicationSerializer from './application';

export default class MessageSerializer extends ApplicationSerializer {
	attrs = {
		contacts: {
			serialize: 'records',
			deserialize: 'ids'
		},
		loaMessages: {
			serialize: 'records',
			deserialize: 'ids'
		},
		contractMessages: {
			serialize: 'records',
			deserialize: 'ids'
		}
	}
}
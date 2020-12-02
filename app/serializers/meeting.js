import ApplicationSerializer from './application';

export default class MeetingSerializer extends ApplicationSerializer {
	attrs = {
		absentees: {
			serialize: 'ids',
			deserialize: 'ids'
		},
		attendees: {
			serialize: 'ids',
			deserialize: 'ids'
		},
		oldBusiness: {
			serialize: false,
			deserialize: 'ids'
		},
		newBusiness: {
			serialize: false,
			deserialize: 'ids'
		}
	};
}
import ApplicationSerializer from './application';

export default class PcnSerializer extends ApplicationSerializer {
	attrs = {
		labelValues: { embedded: 'always' },
		items: {
			serialize: 'records',
			deserialize: 'ids'
		}
	};

	pushPayload(store, payload) {
		if(payload.pcns) {
			payload.pcns.forEach(pcn => {
				if(pcn.items && typeof pcn.items[0] === 'object') {
					payload.pcnItems = payload.pcnItems || [];
					pcn.items.forEach((item, idx) => {
						payload.pcnItems.push(item);
						pcn.items[idx] = item.id;
					});
				}
			});
		}

		return super.pushPayload(...arguments);
	}

	normalizeResponse(store, primaryModelClass, payload, id, requestType) {
		if(payload.pcns) {
			payload.pcns.forEach(pcn => {
				pcn.labelValues.forEach(label => {
					label.id = label.label + '-' + pcn.id;
				});
			});
		} else if(payload.pcn) {
			payload.pcn.labelValues.forEach(label => {
				label.id = label.label + '-' + payload.pcn.id;
			});
		}

		return super.normalizeResponse(...arguments);
	}
}
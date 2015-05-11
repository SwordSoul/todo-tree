import React from 'react';
import Marionette from 'backbone.marionette';
import router from 'app/router';
import MasterPage from 'views/MasterPage';
import getData from 'utils/getData';
import injectTapEventPlugin from 'react-tap-event-plugin';

injectTapEventPlugin();
window.React = React;

class Controller extends Marionette.Object {
	async initModel() {
		const data = await getData();
		this.triggerMethod('initModel', data);
	}

	renderModel(view, id) {
		React.render(
			<MasterPage view = {view} formId = {id}/>,
			document.body
		);
	}

	dataRemove(id){
		this.triggerMethod('dataRemove', id);
	}

	dataAdd(parentId, data) {
		this.triggerMethod('dataAdd', parentId, data);
	}

	dataEdit(id, data) {
		this.triggerMethod('dataEdit', id, data);
	}
};

const controller = new Controller();

export {controller as default};

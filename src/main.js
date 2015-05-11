import Backbone from 'backbone';
import Marionette from 'backbone.marionette';
import model from 'models/treeModel';
import router from 'app/router';
import controller from 'app/controller';
import loadInitialData from 'utils/loadInitialData';
import 'app/main.less';

let app = new Marionette.Application();

app.on('start', () => {
	Backbone.history.start({pushState: true});
});

if (!localStorage.data || localStorage.data.length === 0) {
	loadInitialData();
}
controller.initModel();

controller.once('dataLoaded', () => {
	app.start();
});

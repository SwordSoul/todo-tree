import Backbone from 'backbone';
import controller from 'app/controller';
import model from 'models/treeModel';

const routes = {
	''        : 'routeTreeView',
	'tree'    : 'routeTreeView',
	'list'    : 'routeListView',
	'form/:id':     'routeForm'
};

const Router = Backbone.Router.extend({
	routes: routes,

	routeTreeView() {
		controller.renderModel('tree');
	},

	routeListView() {
		controller.renderModel('list');
	},

	routeForm(id) {
		controller.renderModel('form', id);
	}
});

const router = new Router();

export {router as default};

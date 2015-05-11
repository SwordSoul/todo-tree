import Backbone from 'backbone';
import Tree from 'backbone-tree-model';
import controller from 'app/controller';
import generateId from 'utils/generateId';
import getNextDateId from 'utils/getNextDateId';

class TreeModel extends Backbone.Model {
	initialize() {
		this.listenToOnce(controller, 'initModel',    this.loadData);
		this.listenTo    (controller, 'dataAdd',       this.dataAdd);
		this.listenTo    (controller, 'dataRemove', this.dataRemove);
		this.listenTo    (controller, 'dataEdit',     this.dataEdit);
		this.listenTo    (controller, 'updateData', this.updateView);
	}

	dataAdd(parentId, data) {
		data.id = generateId();
		let parent;
		if (parentId === null) {
			parent = this.tree.findWhere({title: 'root'});
		} else {
			parent = this.tree.findWhere({id: parentId});
		}
		console.log(parent);
		const neighborNodes = parent.get('nodes');
		const nextId = getNextDateId(neighborNodes, data.date);
		if (!nextId) {
			parent.add(data);
		} else {
			this.tree.findWhere({id: nextId}).insertBefore(data);
		}
	}

	async dataRemove(id) {
		await this.tree.remove({id: id}, true);
		this.trigger('updateView');
	}

	dataEdit(id, data) {
		data.id = id;
		data.nodes = this.tree.findWhere({id: id}).get('nodes');
		const parent = this.tree.findWhere({id: id}).parent();
		this.tree.remove({id: id}, true);
		const neighborNodes = parent.get('nodes');
		const nextId = getNextDateId(neighborNodes, data.date);
		if (!nextId) {
			parent.add(data);
		} else {
			this.tree.findWhere({id: nextId}).insertBefore(data);
		}
	}

	loadData(data) {
		this.tree = new Tree(data);
		controller.triggerMethod('dataLoaded');
	}
};

const model = new TreeModel();

export {model as default};

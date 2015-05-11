import React from 'react';
import Backbone from 'backbone';
import {FontIcon} from 'material-ui';
import controller from 'app/controller';
import router from 'app/router';

const DeleteButton = React.createClass({
	propTypes: {
		id: React.PropTypes.string.isRequired
	},

	handleDelete() {
		controller.dataRemove(this.props.id);
		const route = Backbone.history.getFragment() + 'Update';
		controller.renderModel(route, {trigger: true});
	},

	render() {
		return (
			<FontIcon className = 'md-delete' onClick = {this.handleDelete}/>
		);
	}
});

export {DeleteButton as default};

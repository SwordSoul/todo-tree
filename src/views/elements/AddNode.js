import React from 'react';
import router from 'app/router';
import {FontIcon} from 'material-ui';

const AddNode = React.createClass({
	propTypes: {
		parentId: React.PropTypes.string.isRequired,
		style: React.PropTypes.object
	},

	handleAdd() {
		router.navigate('form/' + this.props.parentId + 'parent', {trigger: true});
	},

	render() {
		return (
			<FontIcon className = 'md-playlist-add' style = {this.props.style} onClick = {this.handleAdd}/>
		);
	}
});

export {AddNode as default};

import React from 'react';
import router from 'app/router';
import {FontIcon} from 'material-ui';

const EditButton = React.createClass({
	propTypes: {
		id: React.PropTypes.string.isRequired
	},

	handleClick() {
		router.navigate('form/' + this.props.id, {trigger: true});
	},

	render() {
		return (
			<FontIcon className = 'md-edit' onClick = {this.handleClick}/>
		);
	}
});

export {EditButton as default};

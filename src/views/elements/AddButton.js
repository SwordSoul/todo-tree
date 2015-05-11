import React from 'react';
import router from 'app/router';
import {RaisedButton} from 'material-ui';

export default class AddButton extends React.Component {
	handleClick() {
		router.navigate('form/addroot', {trigger: true});
	}

	render() {
		return (
			<RaisedButton
				secondary = {true}
				onClick = {this.handleClick}
				className = 'add-button'
				label = 'Add'
			/>
		);
	}
};

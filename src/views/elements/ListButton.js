import React from 'react';
import router from 'app/router';
import {RaisedButton} from 'material-ui';

export default class ListButton extends React.Component {
	handleClick() {
		router.navigate('list', {trigger: true});
	}

	render() {
		return (
			<RaisedButton
				secondary = {true}
				onClick = {this.handleClick}
				className = 'list-button'
				label = 'List'
			/>
		);
	}
};
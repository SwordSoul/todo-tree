import React from 'react';
import router from 'app/router';
import {RaisedButton} from 'material-ui';

export default class TreeButton extends React.Component {
	handleClick() {
		router.navigate('tree', {trigger: true});
	}

	render() {
		return (
			<RaisedButton
				secondary = {true}
				onClick = {this.handleClick}
				className = 'tree-button'
				label = 'Tree'
			/>
		);
	}
};
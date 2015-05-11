import React from 'react';
import AddButton from 'elements/AddButton';
import TreeButton from 'elements/TreeButton';
import ListButton from 'elements/ListButton';

export default class ViewLayout extends React.Component {
	render() {
		return (
			<div className = 'body-wrap'>
				<div className = 'button-row'>
					<AddButton/>
					<TreeButton/>
					<ListButton/>
				</div>
				{this.props.children}
			</div>
		);
	}
}

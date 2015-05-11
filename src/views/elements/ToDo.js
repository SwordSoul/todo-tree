import React from 'react';
import {FontIcon, IconButton, FlatButton, Toolbar, ToolbarGroup, Paper} from 'material-ui';
import formatDate from 'utils/formatDate';
import DeleteButton from 'elements/DeleteButton';
import EditButton from 'elements/EditButton';
import AddNode from 'elements/AddNode';

const ToDo = React.createClass({
	propTypes: {
		id: React.PropTypes.string.isRequired,
		title: React.PropTypes.string.isRequired,
		description: React.PropTypes.string.isRequired,
		date: React.PropTypes.string.isRequired,
		size: React.PropTypes.number.isRequired,
		onToggle: React.PropTypes.func
	},

	getInitialState() {
		return {
			showChildren: true
		};
	},

	onNodeToggle () {
		this.props.onToggle();
		this.setState((state, props) => {
			return {
				showChildren: !state.showChildren
			};
		});
	},

	render() {
		let toggleArrow;
		let moveLeft;
		let arrowIconClass = (this.state.showChildren) ? 'md-arrow-drop-up' : 'md-arrow-drop-down';
		if (this.props.onToggle) {
			toggleArrow = (<FontIcon className = {arrowIconClass} onClick = {this.onNodeToggle}/>);
		} else {
			moveLeft = {marginRight: 56 + 'px'};
		}
		const date = formatDate(this.props.date);
		return (
			<Paper zDepth = {1} style = {{width: (this.props.size) + '%'}} className = 'todo-container'>
				<Toolbar>
					<ToolbarGroup key = {0} float = 'left'>
						<FlatButton className = 'toolbar-text' disabled = {true} label = {this.props.title}/>
					</ToolbarGroup>
					<ToolbarGroup key = {1} float = 'right'>
						<FlatButton className = 'toolbar-text toolbar-date' disabled = {true} label = {date}/>
						<DeleteButton id = {this.props.id}/>
						<EditButton id = {this.props.id}/>
						<AddNode parentId= {this.props.id} style = {moveLeft}/>
						{toggleArrow}
					</ToolbarGroup>
				</Toolbar>
			</Paper>
		);
	}
});

export {ToDo as default};

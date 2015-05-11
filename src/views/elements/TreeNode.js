import React from 'react';
import ToDo from 'elements/ToDo';

const TreeNode = React.createClass({
	propTypes: {
		node: React.PropTypes.object.isRequired,
		size: React.PropTypes.number.isRequired,
		isTree: React.PropTypes.bool.isRequired
	},

	getInitialState() {
		return {
			showChildren: true
		};
	},

	onNodeToggle() {
		this.setState((state, props) => {
			return {
				showChildren: !state.showChildren
			}
		});
	},

	render() {
		let toDo;
		let size = this.props.size;
		let onToggle;
		if (this.props.node.nodes) {
			onToggle = this.onNodeToggle;
		}
		if (this.props.node.id) {
			toDo = (<ToDo
				id = {this.props.node.id}
				title = {this.props.node.title}
				description = {this.props.node.description}
				date = {this.props.node.date}
				size = {this.props.size}
				onToggle = {onToggle}
			/>);
			if (this.props.isTree) size = size/1.1;
		}
		console.log(this.props.isTree);
		const hideOnClick = (this.state.showChildren) ? 'block' : 'none';
		return (
			<div>
				{toDo}
				<div style = {{display: hideOnClick}}>
					{(this.props.node.nodes) ? this.props.node.nodes.map((node, key) => {
						return (<TreeNode
							key = {key}
							node = {node}
							size = {size}
							isTree = {this.props.isTree}
						/>);
					}) : null}
				</div>
			</div>
		);
	}
});

export {TreeNode as default};

import React from 'react';
import model from 'models/treeModel';
import TreeNode from 'elements/TreeNode';

export default class RootNode extends React.Component {
	propTypes: {
		view: React.props.string.isRequired
	}

	render() {
		const treeData = model.tree.toJSON();
		const isTree = (this.props.view !== 'list' && 'listUpdate') ? true : false;
		return (
			<TreeNode node = {treeData} size = {100} isTree = {isTree}/>
		);
	}
}

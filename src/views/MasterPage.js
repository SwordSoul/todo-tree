import React from 'react';
import Loader from 'blocks/Loader';
import RootNode from 'blocks/RootNode';
import ViewLayout from 'blocks/ViewLayout';
import Form from 'blocks/Form';

const MasterPage = React.createClass({
	propTypes: {
		view: React.PropTypes.string.isRequired,
		formId: React.PropTypes.string
	},

	getInitialState() {
		return {
			layout: <Loader/>
		};
	},

	componentDidMount() {
		this.setState({layout: <ViewLayout><RootNode view = {this.props.view}/></ViewLayout>});
	},

	componentWillReceiveProps(nextProps) {
		this.setState((state, props) => {
			let newLayout;
			if (nextProps.view === 'form') {
				newLayout = <ViewLayout><Form id = {nextProps.formId}/></ViewLayout>;
			} else {
				newLayout = <ViewLayout><RootNode view = {nextProps.view}/></ViewLayout>
			}
			return {
				layout: newLayout
			};
		});
	},

	render() {
		return (
			<div className = 'background'>
				{this.state.layout}
			</div>
		);
	}
});

export {MasterPage as default};

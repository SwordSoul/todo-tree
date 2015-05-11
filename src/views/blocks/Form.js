import React from 'react';
import _ from 'lodash';
import controller from 'app/controller';
import router from 'app/router';
import formatDate from 'utils/formatDate';
import returnNextDate from 'utils/returnNextDate';
import getMaxDate from 'utils/getMaxDate';
import model from 'models/treeModel';
import {TextField} from 'material-ui';
import {DatePicker} from 'material-ui';
import {RaisedButton} from 'material-ui';

const Form = React.createClass({
	propTypes: {
		id: React.PropTypes.string.isRequired
	},

	handleApply() {
		let data = {};
		data.title = this.refs.title.getValue();
		data.date = this.refs.date.getDate();
		data.description = this.refs.description.getValue();
		if (data.title !== '') {
			if (this.props.id === 'addroot') {
				controller.dataAdd(null, data);
			} else {
				if (this.props.id.match(/parent$/)) {
					controller.dataAdd(this.props.id.slice(0, -6), data);
				} else {
					controller.dataEdit(this.props.id, data);
				}
			}
			router.navigate('tree', {trigger: true});
		} else {
			this.refs.title.setErrorText('Title is required');
		}
	},

	titleFocus() {
		this.refs.title.setErrorText('');
	},

	componentWillReceiveProps(nextProps) {
		if (nextProps.id === 'addroot') {
			this.refs.title.clearValue();
			this.refs.description.clearValue();
			const newDate = new Date();
			this.refs.date.setDate(newDate);
		}
	},

	render() {
		let defTitle;
		let defDesc;
		let defDate;
		let parentDate;
		let childDate;
		if (this.props.id === 'addroot') {
			defTitle = '';
			defDesc = '';
			defDate = new Date();
		} else if (this.props.id.match(/parent$/)){
			defTitle = '';
			defDesc = '';
			parentDate = new Date(model.tree.findWhere({id: this.props.id.slice(0, -6)}).get('date'));
			defDate = parentDate;
		} else {
			const data = model.tree.findWhere({id: this.props.id});
			defTitle = data.get('title');
			defDate = new Date(data.get('date'));
			defDesc = data.get('description');
			childDate = getMaxDate(data.get('nodes'));
			if (data.parent().get('date')) parentDate = new Date(data.parent().get('date'));
		}
		return (
			<div className = 'form-wrap'>
				<TextField
					onFocus = {this.titleFocus}
					ref = 'title'
					defaultValue = {defTitle}
	                floatingLabelText = 'Todo title'
	            />
	            <DatePicker
					defaultDate = {defDate}
					floatingLabelText = 'Date'
					ref = 'date'
					maxDate = {parentDate}
					minDate = {childDate}
				/>
	            <TextField
					ref = 'description'
					defaultValue = {defDesc}
	                floatingLabelText = 'Description'
	                multiLine = {true}
	            />
	            <div>
		            <RaisedButton
						secondary = {true}
						label = 'Save'
						onClick = {this.handleApply}
					/>
				</div>
			</div>
		);
	}
});

export {Form as default};

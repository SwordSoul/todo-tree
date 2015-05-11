const formatDate = dateString => {
	const date = new Date(dateString);
	const dateResString =
	('0' + date.getDate()).slice(-2) + '.' +
	('0' + (date.getMonth() + 1)).slice(-2) + '.' +
	date.getFullYear();
	return dateResString;
};

export {formatDate as default};

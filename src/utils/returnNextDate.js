const returnNextDate = (date) => {
	if (!date) return null;
	let nextDate = date;
	nextDate.setDate(date.getDate() + 1);
	console.log(nextDate);
	return nextDate;
}

export {returnNextDate as default};

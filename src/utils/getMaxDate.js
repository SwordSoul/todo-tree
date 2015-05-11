const getMaxDate = (entriesArray) => {
	if (!entriesArray) return null;
	let maxDate = new Date(0);
	entriesArray.forEach(entry => {
		const entryDate = new Date(entry.date);
		console.log(entry.date);
		if (entryDate > maxDate) maxDate = entryDate;
	});
	return maxDate;
};

export {getMaxDate as default};

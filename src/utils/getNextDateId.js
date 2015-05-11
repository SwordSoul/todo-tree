const getNextDateId = (nodesArray, date) => {
	if (!nodesArray) return null;
	let id;
	let i = 0;
	while (!id && (i < nodesArray.length)) {
		const nodeDate = new Date(nodesArray[i].date);
		if (nodeDate > date) id = nodesArray[i].id;
		i++;
	}
	return id;
}

export {getNextDateId as default};

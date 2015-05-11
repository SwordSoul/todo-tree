const getData = () => {
	return JSON.parse(localStorage.data);
};

export {getData as default};

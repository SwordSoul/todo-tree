import generateId from 'utils/generateId';

const localStorageInit = () => {
	localStorage.clear();
	const data = {
		title: 'root',
		nodes: [
			{
				id: generateId(),
				title: 'root 1',
				description: 'lorem ipsum',
				date: new Date('2015-05-10T03:00:37.229Z'),
				nodes: [
					{
						id: generateId(),
						title: 'child 1.1',
						description: 'lorem ipsum',
						date: new Date('2015-05-07T03:00:37.229Z'),
						nodes: [
							{
								id: generateId(),
								title: 'child 1.1.1',
								description: 'lorem ipsum',
								date: new Date('2015-05-04T03:00:37.229Z'),
								nodes: []
							},
							{
								id: generateId(),
								title: 'child 1.1.2',
								description: 'lorem ipsum',
								date: new Date('2015-05-05T03:00:37.229Z'),
								nodes: []
							},
							{
								id: generateId(),
								title: 'child 1.1.3',
								description: 'lorem ipsum',
								date: new Date('2015-05-06T03:00:37.229Z'),
								nodes: []
							}							
						]
					},
					{
						id: generateId(),
						title: 'child 1.2',
						description: 'lorem ipsum',
						date: new Date('2015-05-08T03:00:37.229Z'),
						nodes: []
					},
					{
						id: generateId(),
						title: 'child 1.3',
						description: 'lorem ipsum',
						date: new Date('2015-05-09T03:00:37.229Z'),
						nodes: []
					}
				]
			},
			{
				id: generateId(),
				title: 'root 2',
				description: 'lorem ipsum',
				date: new Date('2015-05-11T03:00:37.229Z'),
				nodes: []
			}	
		]
	};
	localStorage.data = JSON.stringify(data);
};

export {localStorageInit as default};

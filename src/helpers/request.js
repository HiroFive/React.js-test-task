
const APIGetCall = async (urlParams) => {
	return await fetch(`https://rickandmortyapi.com/api${urlParams}`, {
		method: 'GET',
		headers: {
			'Content-Type': 'application/json',
		},
	});
};
export { APIGetCall };


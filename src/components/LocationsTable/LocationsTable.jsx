import React, { useState, useEffect } from 'react';
import { API } from '../../helpers';
import Pagination from '../Pagination';
import Table from '../Table';

const LocationsTable = () => {
	const [loading, setLoading] = useState(false);
	const [locations, setLocations] = useState([{}]);
	const [pages, setPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const columnTitle = ['Name', 'Type', 'Dimension'];
	useEffect(() => {
		setLoading(true);
		API.get(`/location?page=${currentPage}`)
			.then((response) => response.data)
			.then((res) => {
				console.log(res);

				setLocations(res.results);
				setPages(res.info.pages);
				setLoading(false);
			});
	}, [currentPage]);
	return (
		<>
			{!loading ? (
				<div>
					<Table title='Locations' data={locations} column={columnTitle} />
					<div className='flex items-center justify-center p-4'>
						<Pagination
							maxPages={pages}
							currentPage={currentPage}
							setCurrentPage={setCurrentPage}
						/>
					</div>
				</div>
			) : (
				<p>loading</p>
			)}
		</>
	);
};
export default LocationsTable;

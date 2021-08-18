import React, { useState, useEffect } from 'react';
import { APIGetCall } from '../../helpers';
import Pagination from '../Pagination';
import Table from '../Table';

const LocationsTable = () => {
	const [loading, setLoading] = useState(false);
	const [locations, setLocations] = useState([{}]);
	const [pages, setPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [filterErrors, setFilterErrors] = useState('');
	const columnTitle = ['Name', 'Type', 'Dimension'];
	useEffect(() => {
		setLoading(true);
		APIGetCall(`/location?page=${currentPage}`)
			.then((response) => response.json())
			.then((res) => {
				setLocations(res.results);
				setPages(res.info.pages);
				setLoading(false);
			})
			.catch(() => setFilterErrors('Sorry, data not found'));
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
				<div className='container-center'>
					<p>loading...</p>
					<div>{filterErrors}</div>
				</div>
			)}
		</>
	);
};
export default LocationsTable;

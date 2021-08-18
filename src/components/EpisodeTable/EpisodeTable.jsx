import React, { useState, useEffect } from 'react';
import { APIGetCall } from '../../helpers';
import Pagination from '../Pagination';
import FilterBar from '../FilterBar';
import filterElements from './filterElements';
import Table from '../Table';

const EpisodesTable = () => {
	const [loading, setLoading] = useState(false);
	const [episodes, setEpisodes] = useState([{}]);
	const [pages, setPages] = useState(1);
	const [currentPage, setCurrentPage] = useState(1);
	const [filterValues, setFilterValues] = useState('');
	const [filterErrors, setFilterErrors] = useState('');
	const columnTitle = ['Name', 'Air date', 'Episode'];
	useEffect(() => {
		setLoading(true);
		APIGetCall(`/episode?page=${currentPage}${filterValues}`)
			.then((response) => response.json())
			.then((res) => {
				setEpisodes(res.results);
				setPages(res.info.pages);
				setLoading(false);
			})
			.catch(() => setFilterErrors('Sorry, data not found'));
	}, [currentPage, filterValues]);

	return (
		<>
			<FilterBar
				filterElements={filterElements}
				filterValues={filterValues}
				setFilterValues={setFilterValues}
			/>
			{!loading ? (
				<div>
					<Table title='Episodes' data={episodes} column={columnTitle} />
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
export default EpisodesTable;

import React, { useState, useEffect } from 'react';
import { API } from '../../helpers';
import Pagination from '../Pagination';
import Modal from '../Modal';
import FilterBar from '../FilterBar';
import filterElements from './filterElements';
import Table from '../Table';

const EpisodesTable = () => {
	const [loading, setLoading] = useState(false);
	const [episodes, setEpisodes] = useState([{}]);
	const [pages, setPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [filterValues, setFilterValues] = useState('');
	const columnTitle = ['Name', 'Air date', 'Episode'];
	useEffect(() => {
		setLoading(true);
		API.get(`/episode?page=${currentPage}${filterValues}`)
			.then((response) => response.data)
			.then((res) => {
				console.log(res);

				setEpisodes(res.results);
				setPages(res.info.pages);
				setLoading(false);
			});
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
				<p>loading</p>
			)}
		</>
	);
};
export default EpisodesTable;

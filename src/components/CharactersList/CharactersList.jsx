import React, { useState, useEffect } from 'react';
import { API } from '../../helpers';
import ListItem from './ListItem';
import Pagination from '../Pagination';
import Modal from '../Modal';
import FilterBar from '../FilterBar';
import filterElements from './filterElements';

const CharactersList = () => {
	const [loading, setLoading] = useState(false);
	const [characters, setCharacters] = useState([{}]);
	const [pages, setPages] = useState(0);
	const [currentPage, setCurrentPage] = useState(1);
	const [modalData, setModalData] = useState({});
	const [filterValues, setFilterValues] = useState('');
	const modalParams = [
		modalData.name,
		modalData
	];

	const handleCloseModal = () => {
		setModalData({});
	};
	useEffect(() => {
		setLoading(true);
		API.get(`/character?page=${currentPage}${filterValues}`)
			.then((response) => response.data)
			.then((res) => {
				setCharacters(res.results);
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
					<div className='grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 2xl:grid-cols-7 gap-2'>
						{characters.map((item, index) => (
							<ListItem key={index} data={item} setModalData={setModalData} />
						))}
					</div>
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
			{Object.keys(modalData).length !== 0 ? (
				<Modal
					params={modalParams}
					closeModal={handleCloseModal}
				/>
			) : null}
		</>
	);
};
export default CharactersList;

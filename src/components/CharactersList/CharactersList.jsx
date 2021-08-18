import React, { useState, useEffect } from 'react';
import { APIGetCall } from '../../helpers';
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
	const [filterErrors, setFilterErrors] = useState('');
	const modalParams = [
		modalData.name,
		modalData
	];

	const handleCloseModal = () => {
		setModalData({});
	};
	useEffect(() => {
		setLoading(true);
		APIGetCall(`/character?page=${currentPage}${filterValues}`)
			.then((response) => response.json())
			.then((res) => {
				setCharacters(res.results);
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
					<div className='grid-container'>
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
				<div className='container-center'>
					<p>loading...</p>
					<div>{filterErrors}</div>
				</div>
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

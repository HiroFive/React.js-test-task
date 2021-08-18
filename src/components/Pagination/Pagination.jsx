import React from 'react';
import PropTypes from 'prop-types';
const Pagination = (props) => {
	const { maxPages= '1', currentPage, setCurrentPage } = props;
    
	const numberArray = Array.apply(null, { length: maxPages + 1 }).map(
		Number.call,
		Number
	);
	const pages = numberArray.slice(1);

	const handleNextPage = () => {
		if (currentPage < maxPages) {
			setCurrentPage(currentPage + 1);
		}
	};
	const handlePrevPage = () => {
		if (currentPage > 1) {
			setCurrentPage(currentPage - 1);
		}
	};
	const handlePageChange = (e) => {
		const selectedPage = Number(e.target.innerHTML);
		setCurrentPage(selectedPage);
	};
	return (
		<div>
			<ul className='flex pl-0 list-none rounded my-2'>
				<li
					onClick={handlePrevPage}
					className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-700 border-r-0 ml-0 rounded-l hover:bg-gray-200'
				>
					Prev
				</li>
				{pages.map((item, index) => {
					if (
						item === 1 ||
						item === maxPages ||
						item === currentPage ||
						item === currentPage + 1 ||
						item === currentPage - 1
					) {
						const selctedStyle =
							currentPage === item
								? 'text-white bg-green-500'
								: 'text-gray-700';
						return (
							<li
								key={index}
								onClick={(e) => handlePageChange(e)}
								className={`cursor-pointer relative block py-2 px-3 leading-tight bg-white border border-gray-300 ${selctedStyle} border-r-0 hover:bg-gray-200`}
							>
								{item}
							</li>
						);
					} else if (item === currentPage - 2 || item === currentPage + 2) {
						return (
							<li
								key={index}
								className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-700 border-r-0'
							>
								...
							</li>
						);
					}
				})}
				<li
					onClick={handleNextPage}
					className='relative block py-2 px-3 leading-tight bg-white border border-gray-300 text-gray-700 rounded-r hover:bg-gray-200'
				>
					Next
				</li>
			</ul>
		</div>
	);
};
Pagination.propTypes = {
	currentPage: PropTypes.number.isRequired,
	maxPages: PropTypes.number.isRequired,
	setCurrentPage: PropTypes.func.isRequired,
};
export default Pagination;

import React, { useState } from 'react';
import PropTypes from 'prop-types';
import ArrowDown from '../../assets/icons/ArrowDown.svg';
import Search from '../../assets/icons/Search.svg';

const FilterBar = ({ filterValues, filterElements, setFilterValues }) => {
	const [typingTimeout, setTypingTimeout] = useState(0);
	const handleSelectChanges = (e) => {
		const id = e.target.id;
		const newValue = `${id}=${e.target.value}`;
		let filterStrung = filterValues;
		if (filterStrung.includes(id)) {
			const regex = new RegExp(`${id}`);
			filterStrung = filterStrung.split('&');
			filterStrung.forEach((item, index) => {
				if (item.search(regex) > -1) {
					filterStrung[index] = newValue;
				}
			});
			filterStrung = filterStrung.join('&');
		} else {
			filterStrung += `&${newValue}`;
		}
		setFilterValues(filterStrung);
	};
	const searchByName = (name) => {
		setFilterValues(`&name=${name}`);
	};
	const handleKeyDown = (e) => {
		if (e.key === 'Enter') {
			clearTimeout(typingTimeout);
			searchByName(e.target.value);
		}
	};
	const handleChangeSearchingName = (e) => {
		if (typingTimeout) {
			clearTimeout(typingTimeout);
		}
		setTypingTimeout(
			setTimeout(() => {
				searchByName(e.target.value);
			}, 400)
		);
	};
	return (
		<div className='container flex items-center justify-center mx-auto p-2'>
			<div>
				<h2 className='text-2xl font-semibold leading-tight mr-1'>Filters: </h2>
			</div>
			<div className='my-2 flex sm:flex-row flex-col'>
				<div className='flex flex-row mb-1 sm:mb-0'>
					{filterElements.map((item, index) => {
						const { placeholder, option = '', id } = item;
						return (
							<div key={`${index} + ${item}`}>
								{id === 'search' ? (
									<div className='block relative mx-1'>
										<span className='h-full absolute inset-y-0 left-0 flex items-center pl-2'>
											<img src={ArrowDown} className='h-4 w-4' />
										</span>
										<input
											placeholder={placeholder}
											onChange={handleChangeSearchingName}
											onKeyDown={handleKeyDown}
											className='appearance-none rounded border border-gray-400 border-b block pl-8 pr-6 py-2 w-full bg-white text-sm placeholder-gray-400 text-gray-700 focus:bg-white focus:placeholder-gray-600 focus:text-gray-700 focus:outline-none'
										/>
									</div>
								) : (
									<div className='relative mx-1'>
										<select
											id={id}
											onChange={handleSelectChanges}
											defaultValue={placeholder}
											className='appearance-none h-full rounded-l border block appearance-none w-full bg-white border-gray-400 text-gray-700 py-2 px-4 pr-8 leading-tight focus:outline-none focus:bg-white focus:border-gray-500'
										>
											<option disabled>{placeholder}</option>
											{option.map((item, index) => (
												<option key={`${index} + ${item}`}>{item}</option>
											))}
										</select>
										<div className='pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700'>
											<img src={Search} className='h-4 w-4' />
										</div>
									</div>
								)}
							</div>
						);
					})}
				</div>
			</div>
		</div>
	);
};
FilterBar.propTypes = {
	filterValues: PropTypes.string.isRequired,
	filterElements: PropTypes.array.isRequired,
	setFilterValues: PropTypes.func.isRequired,
};

export default FilterBar;

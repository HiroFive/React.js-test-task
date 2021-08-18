import React, { useState } from 'react';
import PropTypes from 'prop-types';
import DoneArrow from '../../assets/icons/DoneArrow.svg';

const ListItem = ({ data, setWatchListData, watchListData }) => {
	const [done, setDone] = useState(data.done);

	const handleOnChangeCheckbox = (e) => {
		setDone(e.target.checked);
		const updateValue = watchListData.map((item) => {
			if (item.id === data.id) {
				item.done = e.target.checked;
			}
			return item;
		});
		setWatchListData(updateValue);
	};

	return (
		<div className='m-3 max-w-lg'>
			<div className='w-full max-w-xl border border-gray-200 shadow-lg rounded-xl bg-white px-4 pt-2'>
				<div className='block flex-wrap -mx-3 mb-3'>
					<h2 className='px-4 text-gray-800 text-lg font-medium'>
						<span className='text-green-500'>Watch:</span> {data.description}
					</h2>
					<div className='grid grid-cols-2 pt-2 w-full text-green-500 px-4'>
						<label className='py-1 flex justify-start items-start'>
							<div
								className={`bg-white border-2 rounded ${
									done ? 'border-green-500' : 'border-gray-400'
								}  w-5 h-5 flex flex-shrink-0 justify-center items-center mr-2`}
							>
								<input
									type='checkbox'
									checked={done}
									className='opacity-0 absolute'
									onChange={handleOnChangeCheckbox}
								/>
								{done ? <img src={DoneArrow} className='h-3 w-3' /> : null}
							</div>
							<div className='select-none text-gray-800 text-sm'>Done</div>
						</label>
						<div className='flex justify-end'>
							<button className='bg-red-500 border border-red-500 px-3 py-1 text-sm shadow-sm font-medium tracking-wider text-white rounded-full hover:shadow-lg hover:bg-red-600'>
								Delete
							</button>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
ListItem.propTypes = {
	data: PropTypes.object.isRequired,
	watchListData: PropTypes.array.isRequired,
	setWatchListData: PropTypes.func.isRequired,
};
export default ListItem;

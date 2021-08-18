import React, { useState } from 'react';
import PropTypes from 'prop-types';
import uniqid from 'uniqid';
import I from '../../assets/icons/I.svg';
const AddItemForm = ({ watchListData, setWatchListData, closeForm }) => {
	const [areaText, setAreaText] = useState('');
	const handleAreaChange = (e) => {
		setAreaText(e.target.value);
	};
	const handleSubmit = (e) => {
		e.preventDefault();
		const newToDoObject = { id: uniqid(), description: areaText, done: false };
		setWatchListData([...watchListData, newToDoObject]);
		closeForm();
	};
	return (
		<div className='m-3 mb-6 max-w-lg'>
			<form
				onSubmit={handleSubmit}
				className='w-full max-w-xl border border-gray-200 shadow-lg rounded-xl bg-white px-4 pt-2'
			>
				<div className='block flex-wrap -mx-3 mb-3'>
					<h2 className='px-4 py-2 text-gray-800 text-lg font-medium'>
						<span className='text-green-500'>Add</span> a new item
					</h2>
					<div className='w-full px-3 mt-2'>
						<textarea
							className='bg-gray-100 rounded border border-gray-400 resize-none w-full h-20 py-2 px-3 placeholder-gray-700 focus:outline-none focus:bg-white'
							name='body'
							value={areaText}
							onChange={handleAreaChange}
							placeholder='Type episode(s) name'
							required
						></textarea>
					</div>
					<div className='w-full md:w-full items-start md:w-full px-3'>
						<div className='flex -pt-0.5 items-start w-full text-green-500 mr-auto'>
							<img src={I} className='h-5 w-5 mr-1 text-green-500' />
							<p className='text-xs pt-px'>
								Enter which episode(s) you want to watch
							</p>
						</div>
						<div className='flex flex-row-reverse mt-1 items-start'>
							<input
								type='submit'
								className='mb-2 rounded-md cursor-pointer md:mb-0 bg-green-500 px-5 py-2 text-sm shadow-sm font-medium tracking-wider hover:bg-green-600 text-white hover:shadow-lg'
								value='Add item'
							/>
                            <p
								onClick={closeForm}
								className='cursor-pointer text-gray-700 py-1 px-4 hover:text-green-500'
							>
								Cancel
							</p>
						</div>
					</div>
				</div>
			</form>
		</div>
	);
};
AddItemForm.propTypes = {
	setWatchListData: PropTypes.func.isRequired,
	watchListData: PropTypes.oneOfType([PropTypes.string, PropTypes.array])
		.isRequired,
	closeForm: PropTypes.func.isRequired,
};

export default AddItemForm;

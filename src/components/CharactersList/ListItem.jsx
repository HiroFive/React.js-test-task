import React from 'react';
import PropTypes from 'prop-types';

const ListItem = ({ data, setModalData}) => {
	return (
		<div className=' max-w-sm w-full sm:w-full lg:w-full py-6 px-3'>
			<div className=' h-full border-2 border-gray-200 bg-white shadow-xl rounded-lg overflow-hidden'>
				<div className='flex items-center justify-center'>
					<img src={data.image} className='h-56 w-full' />
				</div>

				<div className='p-4'>
					<p className='text-2xl text-gray-900'>{data.name}</p>
				</div>
				<div className='p-4 border-t border-gray-300 text-gray-700'>
					<p>
						<span className='text-green-500 font-bold'>Status:</span>{' '}
						{data.status}
					</p>

					<p>
						<span className='text-green-500 font-bold'>Species:</span>{' '}
						{data.species}
					</p>
				</div>
				<div className='px-4 h-full pt-3 pb-4 border-t border-gray-300 '>
					<div className='relative flex items-center justify-center'>
						<button onClick={()=> setModalData(data)} className='bg-transparent hover:bg-green-500 text-blue-dark font-semibold hover:text-white py-2 px-4 border border-green-500 hover:border-transparent rounded'>
							Read more
						</button>
					</div>
				</div>
			</div>
		</div>
	);
};

ListItem.propTypes = {
	data: PropTypes.object.isRequired,
	setModalData: PropTypes.func.isRequired,
};

export default ListItem;

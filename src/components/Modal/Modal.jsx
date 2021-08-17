import React from 'react';
import PropTypes from 'prop-types';
import Close from '../../assets/icons/Close.svg';

const Modal = ({ params, closeModal }) => {
	const title = params[0];
	const data = params[1];
	return (
		<div className='fixed top-0 left-0 flex justify-center w-full h-screen items-center bg-opacity-50 bg-gray-500 antialiased'>
			<div className='flex flex-col w-11/12 sm:w-5/6 lg:w-1/2 max-w-2xl mx-auto rounded-lg border border-gray-300 shadow-xl'>
				<div className='flex flex-row justify-between p-6 bg-white border-b border-gray-200 rounded-tl-lg rounded-tr-lg'>
					<p className='font-semibold text-gray-800'>About {title}</p>
					<div onClick={closeModal}>
						<img
							src={Close}
							alt='Close modal'
							title='Close modal'
							className='h-6 w-6'
						/>
					</div>
				</div>
				<div className='bg-white p-3 shadow-sm rounded-sm text-gray-700'>
					<div className='grid md:grid-cols-2 gap-1 text-sm'>
						<div className='grid grid-cols-2'>
							<div className='px-4 py-2 font-semibold'>Full Name</div>
							<div className='px-4 py-2'>{data.name}</div>
						</div>
						<div className='grid grid-cols-2'>
							<div className='px-4 py-2 font-semibold'>Location</div>
							<div className='px-4 py-2'>{data.location.name}</div>
						</div>
						<div className='grid grid-cols-2'>
							<div className='px-4 py-2 font-semibold'>Gender</div>
							<div className='px-4 py-2'>{data.gender}</div>
						</div>

						<div className='grid grid-cols-2'>
							<div className='px-4 py-2 font-semibold'>Species</div>
							<div className='px-4 py-2'>{data.species}</div>
						</div>
						<div className='grid grid-cols-2'>
							<div className='px-4 py-2 font-semibold'>Status</div>
							<div className='px-4 py-2'>{data.status}</div>
						</div>
						<div className='grid grid-cols-2'>
							<div className='px-4 py-2 font-semibold'>Origin</div>
							<div className='px-4 py-2'>{data.origin.name}</div>
						</div>
					</div>
				</div>
			</div>
		</div>
	);
};
Modal.propTypes = {
	params: PropTypes.array.isRequired,
	closeModal: PropTypes.func.isRequired,
};

export default Modal;

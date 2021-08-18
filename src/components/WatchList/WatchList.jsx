import React, { useState, useEffect } from 'react';
import AddItemForm from './AddItemForm';
import ListItem from './ListItem';
const WatchList = () => {
	const [watchListData, setWatchListData] = useState(
		JSON.parse(localStorage.getItem('watchListData')) || ''
	);
	const [formOpen, setFormOpen] = useState(false);
	const isWatchListDataEmpty = watchListData.length === 0;
	const handleOpenForm = () => {
		setFormOpen(!formOpen);
	};
	useEffect(() => {
		localStorage.setItem('watchListData', JSON.stringify(watchListData));
	}, [watchListData]);
	return (
		<div
			className={`${
				isWatchListDataEmpty
					? 'mx-auto items-center justify-center max-w-lg text-center mt-5'
					: 'grid-container-sm'
			}`}
		>
			{isWatchListDataEmpty ? (
				<div className='text-xl font-bold'>List is empty</div>
			) : (
				watchListData.map((item) => (
					<ListItem
						key={item.id}
						data={item}
						watchListData={watchListData}
						setWatchListData={setWatchListData}
					/>
				))
			)}
			{formOpen ? (
				<AddItemForm
					closeForm={handleOpenForm}
					watchListData={watchListData}
					setWatchListData={setWatchListData}
				/>
			) : (
				<div className='max-w-xl m-3'>
					<button onClick={handleOpenForm} className='add-new-item-btn'>
						New item
					</button>
				</div>
			)}
		</div>
	);
};
export default WatchList;

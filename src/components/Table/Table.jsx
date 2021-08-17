import React from 'react';
import PropTypes from 'prop-types';

const Table = (props) => {
	const { data, column, title } = props;
	return (
		<div className='container overflow-x-auto mt-6 flex items-center justify-center mx-auto p-2'>
			<table className='border-2 border-gray-200 table-auto border-collapse w-full'>
				<thead>
					<tr className='rounded-lg text-sm font-medium text-gray-700 text-left'>
						{column.map((item, index) => (
							<th className='px-4 py-2' key={index}>
								{item}
							</th>
						))}
					</tr>
				</thead>
				<tbody className='text-sm font-normal text-gray-700'>
					{data.map((item, index) => {
						const { name, air_date, episode, type, dimension } = item;
						switch (title) {
							case 'Episodes':
								return (
									<tr
										key={`${index} ${item}`}
										className='hover:bg-gray-100 border-b border-gray-200 py-10'
									>
										<td className='px-4 py-4'>{name}</td>
										<td className='px-4 py-4'>{air_date}</td>
										<td className='px-4 py-4'>{episode}</td>
									</tr>
								);
							case 'Locations':
								return (
									<tr
										key={`${index} ${item}`}
										className='hover:bg-gray-100 border-b border-gray-200 py-10'
									>
										<td className='px-4 py-4'>{name}</td>
										<td className='px-4 py-4'>{type}</td>
										<td className='px-4 py-4'>{dimension}</td>
									</tr>
								);
							default:
								return;
						}
					})}
				</tbody>
			</table>
		</div>
	);
};
Table.propTypes = {
	title: PropTypes.string.isRequired,
	data: PropTypes.array.isRequired,
	column: PropTypes.array.isRequired,
};
export default Table;

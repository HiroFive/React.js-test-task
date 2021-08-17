import React, { useState } from 'react';
import { Link, useHistory } from 'react-router-dom';
import links from './links';

import RickAndMorty from '../../assets/icons/RickAndMorty.svg';
const Navbar = () => {
	const [mobileMenuOpen, setOpenMobileMenu] = useState(false);
	const history = useHistory();

	const refreshPage = () => {
		history.go(0);
	};
	return (
		<nav className='bg-white shadow' role='navigation'>
			<div className='container mx-auto p-3 flex flex-wrap items-center md:flex-no-wrap'>
				<div
					title='Refresh page'
					className='mr-4 md:mr-8 cursor:pointer'
					onClick={refreshPage}
				>
					<img src={RickAndMorty} alt='Logo' title='Refresh' />
				</div>
				<div className='ml-auto md:hidden'>
					<button
						className='flex items-center px-3 py-2 border rounded'
						type='button'
					>
						<svg
							className='h-3 w-3'
							viewBox='0 0 20 20'
							xmlns='http://www.w3.org/2000/svg'
						>
							<title>Menu</title>
							<path d='M0 3h20v2H0V3zm0 6h20v2H0V9zm0 6h20v2H0v-2z' />
						</svg>
					</button>
				</div>
				<div className='w-full md:w-auto md:flex-grow md:flex md:items-center'>
					<ul className='flex flex-col mt-4 -mx-4 pt-4 border-t md:flex-row md:items-center md:mx-0 md:mt-0 md:pt-0 md:mr-4 lg:mr-8 md:border-0'>
						{links.map(({ title, to }, index) => (
							<li key={index}>
								<Link
									to={to}
									className='block px-4 py-1 md:p-2 lg:px-4 hover:text-green-400'
								>
									{title}
								</Link>
							</li>
						))}
					</ul>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;

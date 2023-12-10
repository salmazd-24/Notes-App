import React from 'react';
import { MdDarkMode } from "react-icons/md";

const Header = ({ handleToggleDarkMode }) => {
	return (
		<div className='header'>
			<h1>Notes</h1>
			<button
				onClick={() =>
					handleToggleDarkMode(
						(previousDarkMode) => !previousDarkMode
					)
				}
				className='save'
			>
				<MdDarkMode size={25}/>
			</button>
		</div>
	);
};

export default Header;

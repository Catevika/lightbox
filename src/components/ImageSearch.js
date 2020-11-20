import { useState } from 'react';
import './ImageSearch.css';

const ImageSearch = ({ searchText }) => {
	const [text, setText] = useState('');

	const onSubmit = (e) => {
		e.preventDefault();
		searchText(text);
	};

	return (
		<div className='search-container'>
			<p className='search-paragraph'>
				Find the perfect photo - Free to download and use in your personal or
				commercial projects! See more on{' '}
				<a className='search-pixabay-link' href='https://pixabay.com/'>
					Pixabay
				</a>
			</p>
			<form onSubmit={onSubmit} className='search-form'>
				<div className='search-input'>
					<input
						type='text'
						className='search-text'
						placeholder='Search Image term...'
						onChange={(e) => setText(e.target.value)}
					/>
					<button className='button' type='submit'>
						<img
							src='https://upload.wikimedia.org/wikipedia/commons/5/55/Magnifying_glass_icon.svg'
							alt='Magnifying glass'
							className='search-icon'
						/>{' '}
						Search
					</button>
				</div>
			</form>
		</div>
	);
};

export default ImageSearch;

import { useState } from 'react';
import ImageCard from './ImageCard';
import UpArrow from '../assets/uparrow.svg';
import './ImageCardList.css';

const ImageCardList = ({ images }) => {
	const [showScroll, setShowScroll] = useState(false);

	const checkScrollTop = () => {
		if (!showScroll && window.pageYOffset > 400) {
			setShowScroll(true);
		} else if (showScroll && window.pageYOffset <= 400) {
			setShowScroll(false);
		}
	};

	window.addEventListener('scroll', checkScrollTop);

	const handleClick = () => {
		window.scrollTo({ top: 0, behavior: 'smooth' });
	};

	return (
		<>
			<div className='imageCard-container'>
				{images.map((image) => (
					<ImageCard key={image.id} image={image} />
				))}
			</div>
			<img
				src={UpArrow}
				alt='Arrow to top'
				id='up-arrow'
				className='up-arrow'
				onClick={handleClick}
			/>
		</>
	);
};

export default ImageCardList;

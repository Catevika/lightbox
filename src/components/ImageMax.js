import { useState, useEffect } from 'react';
import { useHistory, useParams } from 'react-router-dom';
import './ImageMax.css';

const ImageMax = () => {
	const params = useParams();

	const [imageUrl, setImageUrl] = useState('');

	const history = useHistory();

	const handleClick = () => {
		history.goBack();
	};

	useEffect(() => {
		fetch(
			`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&id=${params.id}`
		)
			.then((res) => res.json())
			.then((data) => {
				setImageUrl(data.hits[0].largeImageURL);
			});
	}, [params]);

	useEffect(() => {
		const onCloseImageMax = () => {
			history.goBack();
		};

		const close = (e) => {
			if (e.keyCode === 27) {
				onCloseImageMax();
			}
		};
		window.addEventListener('keydown', close);
		return () => window.removeEventListener('keydown', close);
	}, [history]);

	return (
		<button className='image-max-container' onClick={handleClick}>
			<img src={imageUrl} alt='' className='image-max' />
			<span className='close-button'>X</span>
		</button>
	);
};

export default ImageMax;

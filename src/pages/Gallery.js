import { useState, useEffect } from 'react';
import { useQueryState } from 'react-router-use-location-state';
import ImageCardList from '../components/ImageCardList';
import ImageSearch from '../components/ImageSearch';

const Gallery = () => {
	const [images, setImages] = useState([]);
	const [isLoading, setIsLoading] = useState(true);
	const [term, setTerm] = useQueryState('search', '');

	useEffect(() => {
		fetch(
			`https://pixabay.com/api/?key=${process.env.REACT_APP_PIXABAY_API_KEY}&q=${term}&safesearch&page=3&per-page=50&image_type=photo`
		)
			.then((res) => res.json())
			.then((data) => {
				setImages(data.hits);
				setIsLoading(false);
			})
			.catch((err) => console.log(err));
	}, [term]);

	return (
		<div className='app-container'>
			<ImageSearch searchText={(text) => setTerm(text)} />
			{isLoading ? (
				<h1 className='loading'>Loading</h1>
			) : (
				<ImageCardList images={images} />
			)}
			{!isLoading && images.length === 0 && (
				<h1 className='no-image'>No image found</h1>
			)}
		</div>
	);
};

export default Gallery;

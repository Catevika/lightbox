import { Route, Link } from 'react-router-dom';
import './ImageCard.css';
import ImageMax from './ImageMax';

const ImageCard = ({ image }) => {
	const tags = image.tags.split(',');
	return (
		<div className='card-container'>
			<Link to={`/image/${image.id}`}>
				<img src={image.webformatURL} alt='' className='image' />
			</Link>
			<div className='details-container'>
				<h2 className='author'>Photo by {image.user}</h2>
				<ul>
					<li className='detail'>
						<strong>Views: </strong>
						{image.views}
					</li>
					<li className='detail'>
						<strong>Downloads: </strong>
						{image.downloads}
					</li>
					<li className='detail'>
						<strong>Likes: </strong>
						{image.likes}
					</li>
				</ul>
				<div className='tag-container'>
					{tags.map((tag, index) => {
						return (
							<span key={index} className='tag'>
								#{tag}
							</span>
						);
					})}
				</div>
			</div>
			<Route path='/image/:id' component={ImageMax} />
		</div>
	);
};

export default ImageCard;

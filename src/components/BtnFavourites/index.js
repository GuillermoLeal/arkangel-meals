import './BtnFavourites.css';
import { useNavigate } from 'react-router-dom';

function BtnFavourites() {
	const navigate = useNavigate();

	const handleRefFavorites = () => {
		navigate('/favorites', { replace: false });
	};

	return (
		<button onClick={handleRefFavorites} className="btn-favorite">
			<span className="mdi mdi-book-heart"></span>
		</button>
	);
}

export { BtnFavourites };

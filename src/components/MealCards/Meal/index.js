import './Meal.css';

function Meal({ title, image, mealInFavs, onRefDetails, onToggleFav }) {
	return (
		<article className="card-category">
			<span
				onClick={onToggleFav}
				className={`mdi ${
					mealInFavs ? 'mdi-cards-heart' : 'mdi-cards-heart-outline'
				} icon-fav`}
			></span>
			<img onClick={onRefDetails} src={image} alt={'meal-' + title} />
			<h3 onClick={onRefDetails}>{title}</h3>
		</article>
	);
}

export { Meal };

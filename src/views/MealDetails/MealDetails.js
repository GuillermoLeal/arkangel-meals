import './MealDetails.css';
import { useState, useEffect } from 'react';
import { useLocation, useParams } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMealFavorite } from '../../hooks/useMealFavorite';
import { Loading } from '../../components/loading';

function MealDetails() {
	const { pathname } = useLocation();
	let params = useParams();

	const [meal, setMeal] = useState({});

	const [mealsFavs, saveMealsFavs] = useLocalStorage('favMeals', []);
	const [mealInFavs, toggleMealFav] = useMealFavorite();

	const { data, error, loading } = useFetch(
		`/lookup.php?i=${params.mealId}`,
		'GET'
	);

	useEffect(() => {
		if ((data.meals || []).length) {
			setMeal(data.meals[0]);
		}
	}, [data]);

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const getIngredients = () => {
		const ingredients = [];
		Object.keys(meal).map((key) => {
			if (key.includes('strIngredient') && meal[key]) {
				ingredients.push(meal[key]);
			}
		});

		const measures = [];
		Object.keys(meal).map((key) => {
			if (key.includes('strMeasure') && meal[key]) {
				measures.push(meal[key]);
			}
		});

		return ingredients.map(
			(ingredient, index) => ingredient + ' ' + measures[index]
		);
	};

	return (
		<>
			<h4 className="title-small">{meal.strMeal}</h4>
			{loading && <Loading />}
			{!loading && error && <div>Error: {error.message}</div>}
			{meal.strMeal && (
				<section className="section-details">
					<aside className="aside-details">
						<div className="group-image-details">
							<img
								src={meal.strMealThumb}
								alt={meal.strMeal || 'meal-image'}
								className="meal-image"
							/>
							<span
								onClick={() => toggleMealFav(meal, mealsFavs, saveMealsFavs)}
								className={`mdi ${
									mealInFavs(meal.idMeal, mealsFavs)
										? 'mdi-cards-heart'
										: 'mdi-cards-heart-outline'
								} icon-fav`}
							></span>
						</div>
						<h5 className="title-details">Category</h5>
						<p className="paragraph-details">{meal.strCategory}</p>
						<h5 className="title-details">Area</h5>
						<p className="paragraph-details">{meal.strArea}</p>
					</aside>
					<div>
						<h5 className="title-details">Ingredients</h5>
						<ul className="list-details">
							{getIngredients().map((ingredient, key) => (
								<li key={ingredient + '-' + key}>{ingredient}</li>
							))}
						</ul>

						<h5 className="title-details">Instructions</h5>
						<p className="paragraph-details">{meal.strInstructions}</p>
					</div>
				</section>
			)}
		</>
	);
}

export { MealDetails };

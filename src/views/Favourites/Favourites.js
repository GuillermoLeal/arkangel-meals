import { useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMealFavorite } from '../../hooks/useMealFavorite';
import { Meal } from '../../components/MealCards/Meal/index';

function Favourites() {
	const { pathname } = useLocation();
	const navigate = useNavigate();

	const [mealsFavs, saveMealsFavs] = useLocalStorage('favMeals', []);
	const [mealInFavs, toggleMealFav] = useMealFavorite();

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	const handleRefDetails = (idMeal) => {
		navigate(`/meal/${idMeal}`, { replace: false });
	};

	return (
		<>
			<h4 className="title-small">My Favourites</h4>
			{mealsFavs.length === 0 ? (
				<section className="error-page">
					<h5 className="error-title">You have no saved meals!</h5>
					<p className="error-text">
						You don't have any favourite meals.
						<br />
						Go to the search page and add some!
					</p>
				</section>
			) : (
				<section className="grid-meals">
					{(mealsFavs || []).map((meal) => (
						<Meal
							key={meal.idMeal}
							title={meal.strMeal}
							image={meal.strMealThumb}
							mealInFavs={mealInFavs(meal.idMeal, mealsFavs)}
							onRefDetails={() => handleRefDetails(meal.idMeal)}
							onToggleFav={() => toggleMealFav(meal, mealsFavs, saveMealsFavs)}
						/>
					))}
				</section>
			)}
		</>
	);
}

export { Favourites };

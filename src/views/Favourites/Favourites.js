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
		</>
	);
}

export { Favourites };

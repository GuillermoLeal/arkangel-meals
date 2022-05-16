import './ListMeals.css';
import { useEffect } from 'react';
import { useLocation, useParams, useNavigate } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { useLocalStorage } from '../../hooks/useLocalStorage';
import { useMealFavorite } from '../../hooks/useMealFavorite';
import { Meal } from '../../components/MealCards/Meal/index';
import { Loading } from '../../components/loading';

function ListMeals() {
	const { pathname } = useLocation();
	const navigate = useNavigate();
	let params = useParams();

	const { data, error, loading } = useFetch(
		`/filter.php?c=${params.categoryId}`,
		'GET'
	);

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
			<h4 className="title-small">{params.categoryId}</h4>
			{loading && <Loading />}
			{!loading && error && <div>Error: {error.message}</div>}
			<section className="grid-meals">
				{(data.meals || []).map((meal) => (
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

export { ListMeals };

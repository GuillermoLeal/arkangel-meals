function useMealFavorite() {
	const mealInFavs = (idMeal, mealsFavs) => {
		return mealsFavs.some((meal) => meal.idMeal === idMeal);
	};

	const toggleMealFav = (meal, mealsFavs, saveMealsFavs) => {
		if (!mealInFavs(meal.idMeal, mealsFavs)) {
			const mealEdit = {
				strMeal: meal.strMeal,
				strMealThumb: meal.strMealThumb,
				idMeal: meal.idMeal,
			};
			saveMealsFavs([...mealsFavs, mealEdit]);
		} else {
			saveMealsFavs(
				mealsFavs.filter((mealFav) => mealFav.idMeal !== meal.idMeal)
			);
		}
	};

	return [mealInFavs, toggleMealFav];
}

export { useMealFavorite };

import { useState, useEffect } from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { useFetch } from './hooks/useFetch';
import { Header } from './components/Header';
import { Footer } from './components/Footer';
import { Search } from './components/Search';
import { Home } from './views/Home/Home';
import { ListMeals } from './views/ListMeals/ListMeals';
import { MealDetails } from './views/MealDetails/MealDetails';
import { BtnFavourites } from './components/BtnFavourites';
import { Favourites } from './views/Favourites/Favourites';
import { Error404 } from './views/Error/Error404';

function App() {
	const [search, setSearch] = useState('');

	const handleSearch = (e) => {
		setSearch(e.target.value);
	};

	const handleResetSearch = () => setSearch('');

	const { data } = useFetch(`/search.php?s=${search}`, 'GET');

	return (
		<BrowserRouter>
			<Header />
			<BtnFavourites />
			<div className="d-flex justify-center">
				<h2 className="title">The most delicious meals you can find!</h2>
			</div>
			<div className="d-flex justify-center">
				<Search
					placeholder="Search Meal..."
					onChange={handleSearch}
					value={search}
					items={data.meals || []}
					reset={handleResetSearch}
				/>
			</div>
			<main>
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="category">
						<Route index element={<Error404 />} />
						<Route path=":categoryId" element={<ListMeals />} />
					</Route>
					<Route path="meal">
						<Route index element={<Error404 />} />
						<Route path=":mealId" element={<MealDetails />} />
					</Route>
					<Route path="/favorites" element={<Favourites />} />
					<Route path="*" element={<Error404 />} />
				</Routes>
			</main>
			<Footer />
		</BrowserRouter>
	);
}

export { App };

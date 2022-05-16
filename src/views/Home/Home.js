import './Home.css';
import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useFetch } from '../../hooks/useFetch';
import { Category } from '../../components/MealCards/Category';
import { Loading } from '../../components/loading';

function Home() {
	const { pathname } = useLocation();

	const { data, error, loading } = useFetch('/categories.php', 'GET');

	useEffect(() => {
		window.scrollTo(0, 0);
	}, [pathname]);

	return (
		<>
			<h4 className="title-small">Categories</h4>
			{loading && <Loading />}
			{!loading && error && <div>Error: {error.message}</div>}
			<section className="grid-categories">
				{(data.categories || []).map((category) => (
					<Link
						key={category.idCategory}
						to={`/category/${category.strCategory}`}
					>
						<Category
							title={category.strCategory}
							image={category.strCategoryThumb}
						/>
					</Link>
				))}
			</section>
		</>
	);
}

export { Home };

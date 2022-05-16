import './Search.css';
import { useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';

function Search({ placeholder, onChange, value, items = [], reset }) {
	const { pathname } = useLocation();

	const inputRef = useRef();
	const listSearch = useRef();

	if (listSearch.current) {
		!!value && items.length
			? listSearch.current.classList.remove('d-none')
			: listSearch.current.classList.add('d-none');
	}

	useEffect(() => {
		if (inputRef.current) {
			inputRef.current.value = '';
			reset();
			window.scrollTo(0, 400);
		}
	}, [pathname]);

	return (
		<div className="search-container">
			<input
				ref={inputRef}
				onChange={onChange}
				className="input-search"
				type="search"
				placeholder={placeholder}
			/>
			<ul ref={listSearch} className="search-list">
				{items.map((meal, index) =>
					index < 10 ? (
						<li key={meal.idMeal} className="search-item">
							<Link to={`/meal/${meal.idMeal}`}>{meal.strMeal}</Link>
						</li>
					) : (
						''
					)
				)}
			</ul>
		</div>
	);
}

export { Search };

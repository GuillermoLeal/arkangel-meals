import { useState, useEffect } from 'react';
import { BASE_URL } from '../api/settings';

function useFetch(urlData, method = 'GET', body = {}) {
	const [data, setData] = useState({});
	const [error, setError] = useState(null);
	const [loading, setLoading] = useState(false);

	useEffect(() => {
		setLoading(true);

		let config = {
			method: method,
		};

		if (!urlData) {
			setError(new Error('No url provided'));
			return { data, error, loading };
		}

		let url = new URL(BASE_URL + urlData);

		// if the method is GET we adjust the parameters
		// if (method === 'GET') {
		// 	Object.keys(params).forEach((key) =>
		// 		url.searchParams.append(key, params[key])
		// 	);
		// } else {
		// 	config.body = JSON.stringify(params);
		// }
		if (!method === 'GET') {
			config.body = JSON.stringify(body);
		}

		setData({});

		fetch(url, config)
			.then((response) => response.json())
			.then((data) => {
				setData(data);
				setLoading(false);
			})
			.catch((error) => {
				setError(error);
				setLoading(false);
			});
	}, [urlData]);

	return { data, error, loading };
}

export { useFetch };

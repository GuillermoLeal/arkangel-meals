import { useState } from 'react';

function useLocalStorage(key, initialValue) {
	const [item, setItem] = useState(() => {
		const localStorageItem = localStorage.getItem(key);
		if (localStorageItem) {
			return JSON.parse(localStorageItem);
		} else {
			localStorage.setItem(key, JSON.stringify(initialValue));
			return initialValue;
		}
	});

	const saveItem = (value) => {
		localStorage.setItem(key, JSON.stringify(value));
		setItem(value);
	};

	return [item, saveItem];
}

export { useLocalStorage };

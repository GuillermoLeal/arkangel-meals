function useFetch(urlData, method, body) {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(false);

  let url = new URL(urlData);
  // if the method is GET we adjust the parameters
  if (method === 'GET') {
    Object.keys(params).forEach((key) =>
      url.searchParams.append(key, params[key])
    );
  }

  useEffect(() => {
    setLoading(true);
    fetch(url, {
      method: method,
      body: body,
    })
      .then((response) => response.json())
      .then((data) => {
        setData(data);
        setLoading(false);
      })
      .catch((error) => {
        setError(error);
        setLoading(false);
      });
  });

  return { data, error, loading };
}

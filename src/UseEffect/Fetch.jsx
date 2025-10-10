import { useEffect, useState } from "react";

const Fetch = () => {
  const [data, setData] = useState(null);
  const [error, setError] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("https://jsonplaceholder.typicode.com/users"); // example API
        const result = await response.json();
        setData(result);
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData(); 
  }, []);

  // if (loading) return <h2>Loading...</h2>;
  // if (error) return <h2>Error: {error}</h2>;

  return (
    <>
      <h1>Fetched Data:</h1>
      <pre>{JSON.stringify(data, null, 2)}</pre>
    </>
  );
};

export default Fetch;

import React, { useState } from 'react';
import axios from 'axios';
import SearchForm from './components/SearchForm';
import SearchResults from './components/SearchResults';
import LoadingSpinner from './components/LoadingSpinner';

const App = () => {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(false);
    const [prices, setPrices] = useState([]);


    const handleSearch = async (searchParams) => {
        setLoading(true);
        try {
            const response = await axios.post('https://flightsearch-backend-2.onrender.com/flights/search', searchParams);
            const { itineraries, prices } = response.data;
              setResults(itineraries || []);
              setPrices(prices || []);
              console.log("first", itineraries , "Second" , prices)
        } catch (error) {
            console.error('Error fetching flight data:', error);
        } finally {
            setLoading(false);
        }
    };

    return (
        <div>
            {!loading && results.length === 0 && <SearchForm onSearch={handleSearch} disabled={loading} />}
            {loading && <LoadingSpinner />}
            {!loading && results.length > 0 && <SearchResults results={results} prices={prices}/>}
        </div>
    );
};

export default App;

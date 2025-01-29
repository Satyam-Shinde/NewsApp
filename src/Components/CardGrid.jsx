import React, { useState, useEffect } from 'react';
import Card from './Card';

const CardGrid = ({ searchTerm }) => {
    const [newsData, setNewsData] = useState([]);
    const api_key = import.meta.env.VITE_API_KEY;

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const query = searchTerm || 'India'; // Default to 'India' if searchTerm is empty
                const response = await fetch(`https://newsapi.org/v2/everything?q=${query}&apiKey=${api_key}`);
                const jsonData = await response.json();
                setNewsData(jsonData.articles || []);
            } catch (error) {
                console.error("Error fetching news:", error);
            }
        };

        fetchNews();
    }, [searchTerm]); // Refetch news whenever the search term changes

    return (
        <div className="container mt-4">
            <div className="row row-cols-1 row-cols-md-3 g-4">
                {newsData.length > 0 ? (
                    newsData.map((article, index) => (
                        <div className="col" key={index}>
                            <Card data={article} />
                        </div>
                    ))
                ) : (
                    <p>No news found. Try a different search term.</p>
                )}
            </div>
        </div>
    );
};

export default CardGrid;

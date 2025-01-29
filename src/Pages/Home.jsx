import React, { useState } from 'react'
import Header from '../Components/Header'
import CardGrid from '../Components/CardGrid'

const Home = () => {
    const [searchTerm, setSearchTerm] = useState('India'); // Default search term is 'India'

    return (
        <>
            <Header onSearch={(term) => setSearchTerm(term || 'India')} /> {/* Pass 'India' if the search is empty */}
            <CardGrid searchTerm={searchTerm} /> {/* Pass search term to CardGrid */}
        </>
  )
}

export default Home
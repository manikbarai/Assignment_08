import React, { useState } from 'react';
import Banner from '../Components/Banner';
import StarTerm from '../Components/StarTerm';
import TrendingApps from '../Components/TrendingApps';
import LoadingSpinner from '../Components/LoadingSpinner';

const Home = () => {
    const [loading, setLoading] = useState(true)
    setTimeout(() => {
        setLoading(false);
    }, 600);
    return (
        <div>
            {loading ? (
                <LoadingSpinner />
            ) : (
                <>
                    <Banner />
                    <StarTerm />
                    <TrendingApps />
                </>
            )}
        </div>
    );
};

export default Home;
import React from 'react';
import { Link} from 'react-router';
import AppCard from './AppCard';
import useApps from '../hooks/useApps';

const TrendingApps = () => {
    const {apps} =useApps()
    const trendingApps = apps.slice(0, 8)
    return (
        <div>
            <div className="text-center mt-20 mb-10">
                <h1 className="text-5xl font-bold">Trending Apps</h1>
                <p className="text-[#627382] text-lg  mt-4 mx-auto">
                    Explore All Trending Apps on the Market developed by us
                </p>
            </div>
                 <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 mx-5 md:mx-14 lg:mx-20'>
                {
                    trendingApps.map(app => (
                        <AppCard key={app.id} app={app} />
                    ))
                }
            </div>
            <div className="flex justify-center mt-8 mb-10">
                <Link
                    to={"/apps"}
                    className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2]  text-lg text-white px-10 py-6 mt-5 rounded-md mb-24"
                >
                    Show All
                </Link>
            </div>
        </div>
    );
};

export default TrendingApps;
import React, { useState } from 'react';
import useApps from '../hooks/useApps';
import AppCard from '../Components/AppCard';
import SkeletonLoader from '../Components/SkeletonLoader';
import AppNotFound from './AppNotFound';
import LoadingSpinner from '../Components/LoadingSpinner';


const Apps = () => {
    const { apps, loading } = useApps()
    const [search, setSearch] = useState('')
    const [pageLoading, setPageLoading] = useState(true);

    const term = search.trim().toLocaleLowerCase()
    const searchedApps = term ? apps.filter(app => app.title.toLocaleLowerCase().includes(term)) : apps

    const [searchLoading, setSearchLoading] = useState(false);

    if (pageLoading) {
        setTimeout(() => {
            setPageLoading(false);
        }, 600);

        return <LoadingSpinner />;
    }

    return (
        <div>
            <div className="text-center mt-20 mb-10">
                <h1 className="text-5xl font-bold">Our All Applications</h1>
                <p className="text-[#627382] text-lg  mt-4 mx-auto">
                    Explore All Apps on the Market developed by us. We code for Millions
                </p>
            </div>
            <div className='flex max-sm:flex-col justify-between items-center mb-4  mx-5 md:mx-14 lg:mx-20'>
                <h4 className='text-2xl font-semibold mb-4 md:mb-0 lg:mb-0'>({searchedApps.length}) Apps Found</h4>
                <label className="input bg-transparent">
                    <svg className="h-[1em] opacity-50" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                        <g
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2.5"
                            fill="none"
                            stroke="currentColor"
                        >
                            <circle cx="11" cy="11" r="8"></circle>
                            <path d="m21 21-4.3-4.3"></path>
                        </g>
                    </svg>
                    <input
                        value={search}
                        onChange={(e) => {
                            setSearchLoading(true);
                            setSearch(e.target.value);

                            setTimeout(() => {
                                setSearchLoading(false);
                            }, 300);
                        }}
                        type="search" placeholder="Search Apps" />
                </label>
            </div>
            {
                loading || searchLoading ? <SkeletonLoader count='31' /> : searchedApps.length ? (<div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 mt-3 mx-5 md:mx-14 lg:mx-20 mb-20'>
                    {
                        searchedApps.map(app => (
                            <AppCard key={app.id} app={app} />
                        ))
                    }
                </div>) : <div className="mb-8">
                    <AppNotFound />
                </div>
            }

        </div>
    );
};

export default Apps;
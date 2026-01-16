import React, { useState } from 'react';
import { useParams } from 'react-router';
import useApps from '../hooks/useApps';
import LoadingSpinner from '../Components/LoadingSpinner';
import iconRating from '../assets/icon-ratings.png'
import iconDownload from '../assets/icon-downloads.png'
import iconReview from '../assets/icon-review.png'
import { Bar, BarChart, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { loadInstallApps, updateList } from '../utils/localStorage';
import { toast } from 'react-toastify';

const AppDetails = () => {
    const { id } = useParams()
    const { apps, loading } = useApps()
    const app = apps.find(a => String(a.id) === id)
    const installApps = loadInstallApps()
    const isInstall =installApps.some((a) => String(a.id) === id)
    const [isDisabled , setIsDisabled] = useState(isInstall)

    if (loading) return <LoadingSpinner />

    const { image, title, companyName, downloads,ratingAvg, reviews, size, description, ratings,
    } = app || {}


    const handleInstallApps = (app) =>{
      setIsDisabled(true)
      updateList(app)
      toast.success(`${app.title} installed successfully!`);
    }

    return (
        <div className='px-5 lg:px-20'>
      <div className="flex flex-col md:flex-row items-center gap-10 mt-20">
        <div>
          <img src={image} alt="" />
        </div>
        <div className='w-full'>
          <div>
            <h1 className="font-bold text-3xl">
              {title}: {title}
            </h1>
            <p className="text-[#627382] text-xl font-light">
              Developed by{" "}
              <span className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] bg-clip-text text-transparent font-semibold">{companyName}</span>
            </p>
          </div>

          <div className="divider "></div>

          <div className="flex gap-20">
            <div className="flex flex-col justify-between gap-3">
              <img className="w-12" src={iconDownload} alt="" />
              <p className="text-[#001931]  font-light">Downloads</p>
              <span className="text-4xl font-extrabold">{downloads}</span>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <img className="w-12" src={iconRating} alt="" />
              <p className="text-[#001931]  font-light">
                Average Ratings
              </p>
              <span className="text-4xl font-extrabold">{ratingAvg}</span>
            </div>

            <div className="flex flex-col justify-between gap-3">
              <img className="w-12" src={iconReview} alt="" />
              <p className="text-[#001931]  font-light">Total Reviews</p>
              <span className="text-4xl font-extrabold">{reviews}</span>
            </div>
          </div>

          <button onClick={() => handleInstallApps(app)}
          disabled={isDisabled}
            className="btn bg-[#00D390] text-white mt-7
             disabled:bg-gray-300 
             disabled:cursor-not-allowed 
             disabled:opacity-60">{isDisabled ? "Installed" : `Install Now (${size}) MB`}</button>
        </div>
      </div>

      <div className="divider"></div>

      <h2 className="text-2xl font-semibold text-[#001931]">Ratings</h2>
      <div className="rounded-xl my-6">
        <ResponsiveContainer width="100%" height={300}>
          <BarChart data={ratings} layout="vertical">
            <XAxis type="number" />
            <YAxis dataKey="name" type="category" reversed /> <Tooltip />
            <Bar dataKey="count" fill="#FF8811" barSize={28} />
          </BarChart>
        </ResponsiveContainer>
      </div>

      <div className="divider"></div>

      <div>
        <h2 className="text-2xl font-semibold text-[#001931] my-8">Description</h2>
        <p className="text-[#627382] text-xl font-light mb-20">{description}</p>
      </div>
    </div>
    );
};

export default AppDetails;
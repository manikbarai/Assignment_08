import React from 'react';
import { FaStar } from 'react-icons/fa';
import { LuDownload } from 'react-icons/lu';
import { Link } from 'react-router';

const AppCard = ({app}) => {
    const {id, image, title, downloads,companyName, ratingAvg} = app;
    return (
        <Link to={`/appDetails/${id}`} className="card  bg-base-100 shadow-sm pt-4  cursor-pointer hover:scale-105 transition ease-in-out">
      <figure>
        <img className='w-80% ' src={image} alt="Shoes" />
      </figure>
      <div className="card-body justify-between">
        <h2 className="font-semibold text-lg ">{title}: {companyName}</h2>
        <div className="card-actions justify-between">
          <div className="badge rounded-md bg-emerald-50 text-emerald-500 font-medium flex">
            <LuDownload  size={16} className="stroke-emerald-500" />
            {downloads}
          </div>
          <div className="badge rounded-md bg-orange-50 text-orange-500 font-medium flex">
            <FaStar size={16} className="stroke-orange-500" />
            {ratingAvg}
          </div>
        </div>
      </div>
    </Link>
    );
};

export default AppCard;
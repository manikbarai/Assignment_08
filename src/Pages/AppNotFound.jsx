import React from 'react';
import appError from '../assets/App_Error.png'
import { Link } from 'react-router';
const AppNotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center text-center mt-16">
            <img className="w-80" src={appError} alt="" />

            <h1 className="text-5xl font-bold mt-3">OPPS!! APP NOT FOUND</h1>
            <p className="text-[#627382] text-xl mt-2">
                The App you are requesting is not found on our system. please try
                another apps
            </p>
            <Link
                to={-1}
                className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-lg text-white px-10 py-6 mt-5 rounded-md"
            >
                Go Back!
            </Link>
        </div>
    );
};

export default AppNotFound;
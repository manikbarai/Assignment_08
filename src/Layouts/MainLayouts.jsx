import React from 'react';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
import { Outlet } from 'react-router';
import { ToastContainer } from 'react-toastify';


const MainLayouts = () => {
    return (
        <div className='flex flex-col min-h-screen '>
            <Navbar/>
            <div className=' flex-1 bg-neutral-100'>
                <Outlet/>
            </div>
            <Footer />
            <ToastContainer autoClose={2000} position='top-center'/>
        </div>
    );
};

export default MainLayouts;
import React from 'react';
import errorImg from '../assets/error-404.png'
import { useNavigate} from 'react-router';
import Navbar from '../Components/Navbar';
import Footer from '../Components/Footer';
const ErrorPage = () => {
    const navigate =useNavigate()
    
    return (
        <>
        <Navbar/>
        <div className='flex justify-center items-center flex-col px-4 py-10'>
           <img src={errorImg} alt="" />
           <h2 className='font-bold text-5xl/[60px]'>Oops, page not found!</h2>
           <p className='text-[20px] font-medium text-[#627382] m-2'>The page you are looking for is not available.</p>
           <button onClick={() => navigate(-1) } className='bg-linear-to-r from-[#632EE3] to-[#9F62F2] btn text-white m-2 py-5 px-10 text-lg'>Go Back !</button>
        </div>
        
        <Footer/>
        </>
    );
};

export default ErrorPage;
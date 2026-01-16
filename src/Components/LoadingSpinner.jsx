import React from 'react';
import logoImg from '../assets/logo.png'
const LoadingSpinner = () => {
    return (
        <div className='flex items-center justify-center '>
      <h1 className='text-6xl font-semibold flex  items-center gap-2 my-96'>L<img className='w-20 animate-spin' src={logoImg} alt="" />ading...</h1>
    </div>
    );
};

export default LoadingSpinner;
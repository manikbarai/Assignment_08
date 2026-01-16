import React from 'react';

const StarTerm = () => {
    return (
        <div className="bg-linear-to-r from-[#632EE3] to-[#9F62F2] py-20 text-white">
            <h1 className="text-center text-5xl font-bold mb-10">Trusted by Millions, Built for You</h1>
            <div className="md:flex md:flex-row flex-col justify-center items-center gap-44">
                <div className="text-center mb-10 lg:mb-0">
                    <p className='opacity-80'>Total Downloads</p>
                    <h1 className="text-7xl font-extrabold mb-6 mt-6">29.6M</h1>
                    <p className='opacity-80'>21% More Than Last Month</p>
                </div>

                <div className="text-center  mb-10 lg:mb-0">
                    <p className='opacity-80'>Total Reviews</p>
                    <h1 className="text-7xl font-extrabold mb-6 mt-6" >906k</h1>
                    <p className='opacity-80'>46% More Than Last Month</p>
                </div>

                <div className="text-center mb-10 lg:mb-0">
                    <p className='opacity-80'>Active Apps</p>
                    <h1 className="text-7xl font-extrabold mb-6 mt-6">132+</h1>
                    <p className=' opacity-80'>31 More Will Launch</p>
                </div>
            </div>
        </div>
    );
};

export default StarTerm;
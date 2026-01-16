import React from 'react';
import heroImg from '../assets/hero.png'
import playStoreImg from '../assets/play_store.png'
import appStoreImg from '../assets/app_store.png'
import { Link } from 'react-router';
const Banner = () => {
    return (
        <div className="text-center  px-4 pt-14 ">
            <div className="max-w-7xl mx-auto space-y-6">
                <h1 className="text-5xl sm:text-7xl font-bold flex flex-col text-[#192f45]"><span>We Build</span><span><span className="bg-linear-to-br from-[#632ee3] to-[#9f62f2] text-transparent bg-clip-text">Productive</span> Apps</span></h1>
                <p className="text-[#627382]">At HERO.IO, we craft innovative apps designed to make everyday life simpler, smarter, and more exciting. <br /> Our goal is to turn your ideas into digital experiences that truly make an impact.</p>
                <div className="flex gap-3 justify-center flex-wrap">
                    <Link to="https://play.google.com/store/apps?hl=en" target="_blank" className="btn text-[#001931] bg-transparent border-[#d2d2d2]">
                        <img src={playStoreImg} alt="Play Store" className="w-6" />
                        <span className="font-semibold text-xl">Google Play</span>
                    </Link>
                    <Link to="https://apps.apple.com/" target="_blank" className="btn text-[#001931] bg-transparent border-[#d2d2d2]">
                        <img src={appStoreImg} alt="App Store" className="w-6" />
                        <span className="font-semibold text-xl">App Store</span>
                    </Link>
                </div>
                <img src={heroImg} alt="Hero image" className="mx-auto" />
            </div>
        </div>
    );
};

export default Banner;
import React from 'react';
import heroImg from '../assets/logo.png'
import { FaGithub } from 'react-icons/fa';
import { Link, NavLink } from 'react-router';

const Navbar = () => {
    return (
        <div className="navbar bg-base-100 shadow-sm lg:px-20">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow">
                        <li className='font-semibold'><NavLink to='/'>Home</NavLink></li>
                        <li className='font-semibold'><NavLink to='/apps'>Apps</NavLink></li>
                        <li className='font-semibold'><NavLink to='/installation'>Installation</NavLink></li>
                    </ul>
                </div>
                <Link to='/' className="flex items-center border-0 bg-white cursor-pointer">
                    <img className='w-10' src={heroImg} alt="" />
                    <h1 className=' text-xl font-bold'>HERO.IO</h1>
                </Link>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1">
                    <li className='font-semibold'><NavLink to='/'><span>Home</span></NavLink></li>
                    <li className='font-semibold'><NavLink to='/apps'><span>Apps</span></NavLink></li>
                    <li className='font-semibold'><NavLink to='/installation'><span>Installation</span></NavLink></li>
                </ul>
            </div>
            <div className="navbar-end">
                <a href='https://github.com/manikbarai' target="_blank" className="btn bg-linear-to-r from-[#632EE3] to-[#9F62F2] text-white"><FaGithub /> Contribute</a>
            </div>
        </div>
    );
};

export default Navbar;
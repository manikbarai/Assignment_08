import React from 'react';
import { BsTwitterX } from 'react-icons/bs';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa6';
import { Link } from 'react-router';

const Footer = () => {
    return (
        <div className='bg-[#001931] '>
            <footer className=" footer sm:footer-horizontal  p-10">
                <nav className='text-white lg:ml-7'>
                    <h6 className="footer-title">Services</h6>
                    <a className="link link-hover">Branding</a>
                    <a className="link link-hover">Design</a>
                    <a className="link link-hover">Marketing</a>
                    <a className="link link-hover">Advertisement</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="footer-title">Company</h6>
                    <a className="link link-hover">About us</a>
                    <a className="link link-hover">Contact</a>
                    <a className="link link-hover">Jobs</a>
                    <a className="link link-hover">Press kit</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="footer-title">Legal</h6>
                    <a className="link link-hover">Terms of use</a>
                    <a className="link link-hover">Privacy policy</a>
                    <a className="link link-hover">Cookie policy</a>
                </nav>
                <nav className='text-white'>
                    <h6 className="footer-title">Social links</h6>
                    <div className="flex gap-4">
                        <div className="bg-white text-black rounded-full p-1">
                            <Link target="_blank" to="https://x.com">
                                <BsTwitterX />
                            </Link>
                        </div>
                        <div className="bg-white text-black rounded-full p-1">
                            <Link target="_blank" to="https://linkedin.com">
                                <FaLinkedinIn />
                            </Link>
                        </div>
                        <div className="text-white">
                            <Link target="_blank" to="https://facebook.com">
                                <FaFacebook size={22} />
                            </Link>
                        </div>
                    </div>
                </nav>
            </footer>
            <hr className=" text-[#2e4256] m-0" />
            <div className="footer sm:footer-horizontal footer-center p-5">
                <aside className='text-white '>
                    <p>Copyright © {new Date().getFullYear()} - All right reserved by HERO.IO</p>
                </aside>
            </div>
        </div>
    );
};

export default Footer;
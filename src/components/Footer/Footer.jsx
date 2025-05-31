import React from 'react';
import logo from '../../assets/logo-footer.png'; // Adjust the path as necessary
import { FaFacebook } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
    return (
        <footer className='bg-black text-white py-10 mt-10'>
            <div className='flex mx-auto justify-center items-center gap-5 mb-10'>
                <img src={logo} alt="" />
                <h1 className='text-4xl font-bold'>Law.BD</h1>
            </div>
            <div className='flex justify-center items-center gap-10 text-lg mx-auto border-b-2 border-dotted w-[70%] pb-5 mb-10 border-gray-500'>
                <a href="/">Home</a>
                <a href="/my-bookings">My Bookings</a>
                <a href="/blogs">Blogs</a>
                <a href="/contact-us">Contact Us</a>
            </div>
             <div className="container mx-auto flex justify-center space-x-6">
                <a
                href="https://www.facebook.com/rakibul13631/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-500 transition "
                >
                <FaFacebook className='text-3xl' />
                </a>
                <a
                href="https://github.com/rakibul263"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-gray-400 transition "
                >
                <FaGithub  className='text-3xl'/>
                </a>
                <a
                href="https://www.linkedin.com/in/rakibul13631/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-xl hover:text-blue-400 transition "
                >
                <FaLinkedin  className='text-3xl'/>
                </a>
            </div>
        </footer>
    );
};

export default Footer;
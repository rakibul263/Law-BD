import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Banner from '../../components/Hero/Banner';
import Footer from '../../components/Footer/Footer';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
            <Footer />
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Root;
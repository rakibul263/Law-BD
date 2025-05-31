import React from 'react';
import { Outlet } from 'react-router';
import Navbar from '../../components/Header/Navbar';
import Banner from '../../components/Hero/Banner';

const Root = () => {
    return (
        <div className='max-w-7xl mx-auto'>
            <Navbar />
            <Outlet />
            {/* <Banner></Banner> */}
        </div>
    );
};

export default Root;
import React from 'react';
import Banner from '../../components/Hero/Banner';
import Lawyers from '../Lawyers/Lawyers';

const Home = () => {
    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <Banner></Banner>
            <Lawyers></Lawyers>
        </div>
    );
};

export default Home;
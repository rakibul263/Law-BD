import React from 'react';
import Banner from '../../components/Hero/Banner';
import Lawyers from '../Lawyers/Lawyers';
import { useLoaderData } from 'react-router';

const Home = () => {
    const data = useLoaderData();

    return (
        <div className='max-w-7xl mx-auto mt-10'>
            <Banner></Banner>
            <Lawyers data={data}></Lawyers>
        </div>
    );
};

export default Home;
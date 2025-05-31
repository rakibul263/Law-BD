import React from 'react';
import Lawyer from '../Lawyer/Lawyer';
import { useState } from 'react';

const Lawyers = ({data}) => {
    const [showAll, setShowAll] = useState(false);
    const visibleData = showAll ? data : data.slice(0, 6);
    return (
        <div>
            <div className='text-center my-10 w-[70%] mx-auto'>
                <h1 className='text-5xl font-bold '>Our Best Lawyers</h1>
                <p className='mt-5 text-gray-500'>Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.</p>
            </div>
            <div className='grid lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1 gap-10 max-w-7xl mx-auto'>
                {
                    visibleData.map(lawyer => <Lawyer key={lawyer.id} lawyer={lawyer} ></Lawyer>)
                }
                <button onClick={() => setShowAll(!showAll)} className='btn btn-primary text-lg text-white rounded-2xl shadow-xl border-1 mx-auto mt-10 col-span-2 mb-10'>
                    {showAll ? "Show Less" : "Show All Lawyer"}
                </button>
            </div>
        </div>
    );
};

export default Lawyers;
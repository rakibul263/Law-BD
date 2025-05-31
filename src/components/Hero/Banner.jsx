import React from 'react';
import banner from '../../assets/banner-img-1.png';

const Banner = () => {
    return (
        <div
        className="hero w-[1280px] h-[550px] shadow-2xl mx-auto my-10"
            style={{
                backgroundImage: `url(${banner})`,
                backgroundSize: 'cover',
                borderRadius: '20px',
            }}
            >
            <div className="hero-overlay rounded-3xl"></div>
            <div className="hero-content text-neutral-content text-center">
                <div className="w-[917px]">
                <p className=" text-4xl font-bold">
                    It avoids subjective claims or exaggeration that might raise red flags legally
                </p>
                <br />
                <p className='w-[900px] mx-auto text-gray-400'>
                    Our platform connects you with verified, experienced doctors across various specialties — all at your convenience. Whether it's a routine checkup or urgent consultation, book appointments in minutes and receive quality care you can trust.
                </p>
                </div>
            </div>
        </div>
    );
};

export default Banner;
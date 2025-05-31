import React from 'react';

const Lawyer = ({lawyer}) => {
    const {name, image, expert_category, license_no, available, experience} = lawyer;
    return (
        <div className="card card-side bg-white shadow-xl rounded-2xl hover:shadow-2xl transition duration-300 ease-in-out p-4 border border-gray-200">
        <figure className="w-[220px] h-[220px] bg-gray-100 flex items-center justify-center p-4 overflow-hidden rounded-xl shadow">
            <img
                className="w-full h-auto object-top"
                src={image}
                alt="Lawyer Image"
            />
        </figure>

        <div className="card-body">
            <div className='flex items-center gap-4'>
                <div className={`badge badge-soft ${available ? "badge-success" : "badge-secondary"}`}>{available ? "Available" : "Unavailable"}</div>
                <div className="badge badge-soft badge-info">{experience} Experience</div>
            </div>
            <h2 className="card-title text-2xl">{name}</h2>
            <h2 className="text-xl text-gray-500">{expert_category}</h2>
            <p className='text-gray-500'> <span className='text-xl'>®</span> License No: {license_no}</p>
            <button className='btn btn-outline btn-primary rounded-2xl shadow-xl border-1'>View Details</button>
            </div>
        </div>
    );
};

export default Lawyer;
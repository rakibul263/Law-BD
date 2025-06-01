import React, { useEffect, useState } from 'react';
import { useLoaderData, useParams } from 'react-router';
import toast, { Toaster } from 'react-hot-toast';

const ProfileDetails = () => {
  const { id } = useParams();
  const lawyerId = parseInt(id);
  const data = useLoaderData();
  const singleLawyer = data.find((lawyer) => lawyer.id === lawyerId);

  const {
    name,
    image,
    expert_category,
    license_no,
    availability_day,
    experience,
    consultation_fee,
    about,
    available,
  } = singleLawyer;

  const [isBooked, setIsBooked] = useState(false);

  // Load booking status from localStorage on mount
  useEffect(() => {
    const booked = JSON.parse(localStorage.getItem('bookedConsultations')) || [];
    setIsBooked(booked.includes(lawyerId));
  }, [lawyerId]);

  const handleBooking = () => {
    const booked = JSON.parse(localStorage.getItem('bookedConsultations')) || [];

    if (booked.includes(lawyerId)) {
      // Cancel consultation
      const updated = booked.filter((id) => id !== lawyerId);
      localStorage.setItem('bookedConsultations', JSON.stringify(updated));
      setIsBooked(false);
      toast.success('Consultation cancelled successfully!');
    } else {
      // Book consultation
      booked.push(lawyerId);
      localStorage.setItem('bookedConsultations', JSON.stringify(booked));
      setIsBooked(true);
      toast.success('Consultation booked successfully!');
    }
  };

  return (
    <div>
      <Toaster position="top-center" />
      <div className="text-center my-10 mx-auto bg-gray-200 p-10 rounded-2xl shadow-lg">
        <h1 className="text-4xl font-bold">Lawyer's Profile Details</h1>
        <p className="text-gray-500 mt-5">
          Lorem ipsum dolor sit amet consectetur. Sit enim blandit orci tortor amet ut.
          Suscipit sed est fermentum magna. Quis vitae tempus facilisis turpis imperdiet
          mattis donec dignissim volutpat.
        </p>
      </div>

      <div className="card card-side bg-base-100 shadow-sm">
        <figure className="w-[400px] h-[400px] bg-gray-100 flex items-center justify-center p-4 overflow-hidden rounded-xl shadow">
          <img
            className="object-cover rounded-xl shadow-lg top-0 left-0 w-full h-full object-top"
            src={image}
            alt="Lawyer Image"
          />
        </figure>

        <div className="card-body bg-base-100 shadow-lg p-10">
          <div className="flex items-center gap-4">
            <div className="badge badge-soft badge-info">{experience} Experience</div>
            <div className={`badge badge-soft ${available ? 'badge-success' : 'badge-secondary'}`}>
              {available ? 'Available' : 'Unavailable'}
            </div>
          </div>

          <h1 className="text-3xl mt-4 font-bold">{name}</h1>
          <div className="flex items-center gap-10 mt-2">
            <h2 className="text-gray-500">{expert_category}</h2>
            <p className="text-gray-500">
              <span className="text-xl">®</span> License No: {license_no}
            </p>
          </div>

          <div>
            <span className="font-bold">Availability: </span>
            {availability_day.map((day, index) => (
              <div key={index} className="badge badge-soft badge-success shadow-sm mr-2 mt-2">
                {day}
              </div>
            ))}
          </div>

          <p className="text-gray-500 mt-2">{about}</p>
          <h1 className="font-bold">
            Consultation Fee : <span className="text-green-400">{consultation_fee}</span>
          </h1>

          <button
            className={`btn mt-4 rounded-3xl ${
              isBooked ? 'btn-error' : 'btn-outline btn-primary'
            }`}
            onClick={handleBooking}
          >
            {isBooked ? 'Cancel Consultation' : 'Book Consultation'}
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProfileDetails;

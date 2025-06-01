import React, { useEffect, useState } from 'react';
import { useLoaderData } from 'react-router-dom';
import {
  BarChart, Bar, XAxis, YAxis, Tooltip, CartesianGrid, ResponsiveContainer, Legend
} from 'recharts';
 

const BookedConsultations = () => {
  const allLawyers = useLoaderData();
  const [bookedLawyers, setBookedLawyers] = useState([]);

  useEffect(() => {
    const bookedIds = JSON.parse(localStorage.getItem('bookedConsultations')) || [];
    const booked = allLawyers.filter(lawyer => bookedIds.includes(lawyer.id));
    setBookedLawyers(booked);
  }, [allLawyers]);

  const handleCancel = (id) => {
    const updatedBookedIds = JSON.parse(localStorage.getItem('bookedConsultations'))?.filter(bookedId => bookedId !== id) || [];
    localStorage.setItem('bookedConsultations', JSON.stringify(updatedBookedIds));

    const updatedList = bookedLawyers.filter(lawyer => lawyer.id !== id);
    setBookedLawyers(updatedList);
  };

  const chartData = bookedLawyers.map(lawyer => ({
    name: lawyer.name,
    fee: Number(lawyer.consultation_fee.replace(/[^0-9.-]+/g, '')),
    formattedFee: `${lawyer.consultation_fee}`
  }));

  return (
    <div className="p-10">
      <h1 className="text-3xl font-bold mb-6">My Booked Consultations</h1>

      {bookedLawyers.length === 0 ? (
        <p className="text-gray-500">You haven't booked any consultations yet.</p>
      ) : (
        <>
          <div className="bg-white p-5 rounded-xl shadow-md mb-10">
            <h2 className="text-2xl font-semibold mb-4">Consultation Fee Comparison</h2>
            <ResponsiveContainer width="100%" height={400}>
              <BarChart data={chartData} margin={{ top: 20, right: 30, left: 40, bottom: 60 }}>
                <defs>
                  <linearGradient id="colorGradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="5%" stopColor="#4f46e5" stopOpacity={0.8}/>
                    <stop offset="95%" stopColor="#818cf8" stopOpacity={0.8}/>
                  </linearGradient>
                </defs>
                <CartesianGrid strokeDasharray="3 3" stroke="#e5e7eb" />
                <XAxis 
                  dataKey="name" 
                  angle={-45}
                  textAnchor="end"
                  height={100}
                  tick={{ fontSize: 12 }}
                />
                <YAxis 
                  label={{ 
                    value: 'Consultation Fee', 
                    angle: -90, 
                    position: 'insideLeft',
                    style: { fontSize: 14 }
                  }}
                  tick={{ fontSize: 12 }}
                  tickFormatter={(value) => `${value}`}
                />
                <Tooltip 
                  formatter={(value) => [`${value}`, 'Fee']}
                  contentStyle={{
                    backgroundColor: 'white',
                    border: '1px solid #e5e7eb',
                    borderRadius: '8px',
                    padding: '10px'
                  }}
                />
                <Legend />
                <Bar 
                  dataKey="fee" 
                  fill="url(#colorGradient)" 
                  name="Consultation Fee"
                  radius={[4, 4, 0, 0]}
                  label={{ 
                    position: 'top', 
                    fill: '#4f46e5',
                    fontSize: 12,
                    formatter: (value) => `${value}`
                  }}
                />
              </BarChart>
            </ResponsiveContainer>
          </div>

          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6">
            {bookedLawyers.map(lawyer => (
              <div key={lawyer.id} className="bg-white p-5 rounded-xl shadow-md hover:shadow-lg transition-shadow duration-300">
                <div className="w-[300px] h-[300px] bg-gray-100 flex items-center justify-center p-4 overflow-hidden rounded-xl shadow">
                  <img className="w-full h-auto object-top"
                    src={lawyer.image} 
                    alt={lawyer.name} 
                    onError={(e) => {
                      e.target.onerror = null;
                      e.target.src = 'https://via.placeholder.com/400x300?text=Lawyer+Image';
                    }}
                  />
                </div>
                <div className="mt-4">
                  <h2 className="text-xl font-bold text-gray-800">{lawyer.name}</h2>
                  <p className="text-indigo-600 font-medium mt-1">{lawyer.expert_category}</p>
                  <div className="mt-4 flex items-center justify-between">
                    <button
                      onClick={() => handleCancel(lawyer.id)}
                      className="btn btn-error hover:bg-red-600 transition-colors duration-300 w-full rounded-full"
                    >
                      Cancel Consultation
                    </button>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </>
      )}
    </div>
  );
};

export default BookedConsultations;

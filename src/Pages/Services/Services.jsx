import React from 'react';
import CountUp from 'react-countup';

const stats = [
  {
    icon: "👨‍⚖️",
    count: 199,
    label: "Total Lawyer"
  },
  {
    icon: "⭐️⭐️⭐️⭐️⭐️",
    count: 467,
    label: "Total Reviews"
  },
  {
    icon: "🔨",
    count: 1900,
    label: "Cases Initiated"
  },
  {
    icon: "👥",
    count: 300,
    label: "Total Staffs"
  }
];

const Services = () => {
  return (
    <div>
      <div className='text-center my-10 w-[70%] mx-auto'>
        <h1 className="text-5xl font-bold">We Provide Best Law Services</h1>
        <p className='mt-5 text-gray-500'>
          Our platform connects you with verified, experienced Lawyers across various specialties — all at your convenience.
        </p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 p-8">
        {stats.map((item, index) => (
          <div key={index} className="bg-gray-100 rounded-xl p-6 flex flex-col items-center shadow hover:shadow-md transition duration-300">
            <div className="text-4xl mb-3">{item.icon}</div>
            <h2 className="text-3xl font-bold text-black">
              <CountUp start={0} end={item.count} duration={2} />+
            </h2>
            <p className="text-gray-600 text-sm mt-1">{item.label}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Services;

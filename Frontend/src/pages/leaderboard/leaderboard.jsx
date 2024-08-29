import React from 'react';

const userData = [
  {
    name: 'John Doe',
    department: 'Computer Science',
    rollNo: 'CS101',
    avatar: 'profile_avtar.png',
  },
  {
    name: 'Jane Smith',
    department: 'Mechanical Engineering',
    rollNo: 'ME202',
    avatar: 'profile_avtar.png',
  },
  {
    name: 'Jane Smith',
    department: 'Mechanical Engineering',
    rollNo: 'ME202',
    avatar: 'profile_avtar.png',
  },
  {
    name: 'Jane Smith',
    department: 'Mechanical Engineering',
    rollNo: 'ME202',
    avatar: 'profile_avtar.png',
  },
  {
    name: 'Jane Smith',
    department: 'Mechanical Engineering',
    rollNo: 'ME202',
    avatar: 'profile_avtar.png',
  },
  {
    name: 'Jane Smith',
    department: 'Mechanical Engineering',
    rollNo: 'ME202',
    avatar: 'profile_avtar.png',
  },
  // Add more users here
];

const Leaderboard = () => {
  return (
    <div className="flex flex-col items-center gap-6 p-6 mt-24"> {/* Adjusted top margin and centered content */}
      <h1 className="text-4xl font-bold mb-6 text-blue-600">Our Team</h1> {/* Heading */}
      <div className="flex flex-wrap justify-center gap-6">
        {userData.map((user, index) => (
          <div
            key={index}
            className="bg-gray-100 shadow-md rounded-lg p-4 w-full sm:w-1/2 md:w-1/3 lg:w-1/4 text-center"
          >
            <img
              src={user.avatar}
              alt={`${user.name}'s avatar`}
              className="w-24 h-24 mx-auto rounded-full mb-4"
            />
            <h2 className="text-xl font-semibold">{user.name}</h2>
            <p className="text-gray-600">{user.department}</p>
            <p className="text-gray-600">{user.rollNo}</p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Leaderboard;

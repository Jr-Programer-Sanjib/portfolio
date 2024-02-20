// Experience.jsx

import React from 'react';

const Experience = () => {
  return (
    <div id="Experience" className="py-10 bg-[#232325]">
        <h2 className="mb-8 text-3xl text-white text-center">My <span>Experience</span></h2>

        <div className="mb-[20px] text-white bg-gray-700/20 p-4 rounded-3xl max-w-[300px] sm:max-w-[600px] mx-auto">
            <p>FirstCompaney</p>
            <p className="text-gray-400">(2020 - Present)</p>
            <p className="text-gray-500">
                Description of your Experience in this company
            </p>
        </div>
        <div className="h-[50px] w-[4px] bg-slate-400 my-1 mx-auto rounded-3xl"></div>

    </div>
  )
}

export default Experience;

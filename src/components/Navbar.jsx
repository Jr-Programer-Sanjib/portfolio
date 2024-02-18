import React, { useState } from 'react';


import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai'; // Corrected import for react-icons

const Navbar = () => {
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  }

  return (
    <div className=' z-10 text-gray-500 flex justify-between items-center max-w-[1240px] mx-auto h-24 px-4 text-1'>

      <h1 className='w-full text-3xl font-bold primary-color ml-4'><span>S.Maity</span></h1>
      <ul className='hidden md:flex'>
  <li className='p-5 '><a href='#home' id='home-link'>Home</a></li>
  <li className='p-5'><a href='#about' id='about-link'>About</a></li>
  <li className='p-5'><a href='#work' id='work-link'>Work</a></li>
  <li className='p-5'><a href='#Experience' id='experience-link'>Experience</a></li>
  <li className='p-5'><a href='#contact' id='contact-link'>Contact</a></li>
</ul>



      <div onClick={handleNav} className='block md:hidden'> {/* Corrected className */}
        {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
      </div>

      <div className={nav ? 'text-gray-300 fixed h-full left-0 backdrop-blur-lg top-0 w-[50%] border-r border-r-gray-900 bg-[#41174e] ease-in-out duration-500' 
                               : 'fixed left-[-100%]'}>
      <h1 className=' text-3xl  primary-color m-4'><span>S.Maity</span></h1>
      <ul className='p-8 text-2xl'>
      <li className='p-2'><a href='#home' id='home-link'>Home</a></li>
  <li className='p-2'><a href='#about' id='about-link'>About</a></li>
  <li className='p-2'><a href='#work' id='work-link'>Work</a></li>
  <li className='p-2'><a href='#Experience' id='experience-link'>Experience</a></li>
  <li className='p-2'><a href='#contact' id='contact-link'>Contact</a></li>
        
      </ul>
      
      </div>





    </div>
  );
}

export default Navbar; // Corrected export statement

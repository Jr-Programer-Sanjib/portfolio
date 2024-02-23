import React from 'react';
import pro from '../assets/pro.png';
import { AiFillLinkedin, AiFillGithub, AiFillInstagram } from 'react-icons/ai';

import { TypeAnimation } from 'react-type-animation';
import SanjibResume from '../assets/SanjibResume.pdf'

const Hero = () => {
  return (
    <div>
      <div id="home" className='my-7 sm:my-7 max-w-[1200px] h-[80vh] mx-auto flex flex-col-reverse sm:flex-row justify-center align-center'>

        <div className='flex-col my-auto mx-auto md:mx-0'>
          <p className='md:text-5xl sm:text-4xl text-xl font-bold text-gray-200'>Hi I am Sanjib Maity</p>
          <h1 className='md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            <TypeAnimation
              sequence={[
                "Frontend Dev",
                1000,
                "Webdesigner",
                1000,
                "Backend Dev",
                1000,
                "Game Dev",
                1000,
                
              ]}
              wrapper="span"
              speed={50}
              repeat={Infinity}
            />
          </h1>
          <div className="text-5xl flex justify-center items-center">
            <p className="md:text-5xl sm:text-4xl text-xl font-bold text-gray-500">with a 3+ years experience</p>
          </div>
          
          
          <div className="text-5xl flex justify-start gap-16 my-7 text-purple-600 ">
            <a href="https://www.linkedin.com/in/sanjib-maity-" target="blank" className="hover:text-white hover:scale-105 hover:opacity-75 transition duration-300">
              <AiFillLinkedin />
            </a>


            <a href="https://github.com/Jr-Programer-Sanjib" target="blank" className="hover:text-white hover:scale-105 hover:opacity-75 transition duration-300">
              <AiFillGithub/>
            </a>
           

            <a href="https://www.instagram.com/jr_programer_sanjib/" target="blank" className="hover:text-white hover:scale-105 hover:opacity-75 transition duration-300">
              <AiFillInstagram />
            </a>

          
           
          </div>
          <div className="relative inline-flex group my-3">
          <div className="absolute inset-0 bg-gradient-to-r from-[#44BCFF] via-[#FF44EC] to-[#FF675E] rounded-xl blur-lg opacity-70 transition-all duration-1000">

            </div>
            <a href={SanjibResume} download="SanjibResume.pdf" target='blank' title="Download CV" role="button"
              className="w-[190px] h-[60px] relative inline-flex items-center justify-center px-8 py-4 text-lg
               font-bold text-white transition-all duration-200 bg-primary-color font-pj rounded-xl
                focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-gray-900">Download CV
            </a>
          </div>
        </div>
        <div className='my-auto'>
          <img className='w-[300px] sm:w-[500px] mx-auto h-auto ' src={pro} alt="profile" />
        </div>
      </div>
    </div>
  );
}

export default Hero;

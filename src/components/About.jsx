import React from 'react'
import about4 from '../assets/about4.jpeg'

const About = () => {
  return (
    <div id="about" className="py-10 text-white bg-[#232325] h-auto">
        <div className="flex sm:flex-row flex-col-reverse items-center md:gap-6 gap-12 px-10 max-w-6xl mx-auto">
          <div>
            <div className="w-[400px] h-full">
              <img
                src={about4}
                alt='about'
                className="object-cover rounded-xl h-[300px] filter grayscale
                           brightness-50"
              />

            </div>
          </div>

          <div>
            <div className="p-2">
              <div className="text-gray-300 my-3">
                <h3 className=" text-4xl font-semibold mb-5">About <span>Me</span></h3>
                <p className="text-justify leading-7  w-11/12 max-auto ">
                Sanjib, a 15-year-old creator from India, , currently in school. i specializing in frontend development, backend wizardry, web design, and Godot game development. Crafting digital experiences is my passion, and I thrive on challenges. Welcome to my world of creativity and innovation! 
                </p>

              </div>
            </div>
            <div className="flex mt-10 items-center gap-7">

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl  text-2xl font-semibold text-white">11
              <span className=" primary-text">+</span>{" "}
              </h3>
              <p><span className=" md:text-base text-xs">Projects</span></p>

              

            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl  text-2xl font-semibold text-white">3
              <span className=" primary-text">+</span>{" "}
              </h3>
              <p><span className=" md:text-base text-xs">years experience</span></p>

              

            </div>

            <div className="bg-[#333333]/40 p-5 rounded-lg">
              <h3 className="md:text-4xl  text-2xl font-semibold text-white">2
              <span className=" primary-text">+</span>{" "}
              </h3>
              <p><span className=" md:text-base text-xs">happy clints</span></p>

              

            </div>
            </div>
          </div>


        </div>

    </div>
  )
}
export default About;
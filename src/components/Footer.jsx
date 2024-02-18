import React from 'react'
import { FaGithubSquare, FaInstagram, FaLinkedin } from 'react-icons/fa'

const Footer = () => {
  return (
    <div className="mt-12 w-max-[800px] border-t border-gray-500 text-center">
      <p className="my-5 text-gray-500">33 test <br/>Test Blevd./ 3000</p>
      <div className="inline-flex gap-4 text-3xl">
        <a href="https://github.com" className="hover:text-white  hover:shadow-lg">
          <FaGithubSquare className="text-blue-500 transition duration-300 ease-in-out hover:text-white  hover:shadow-lg hover:glow-white" />
        </a>
        <a href="https://instagram.com" className="hover:text-white hover:shadow-lg">
          <FaInstagram className="text-blue-500 transition duration-300 ease-in-out hover:text-white hover:shadow-lg hover:glow-white" />
        </a>
        <a href="https://www.linkedin.com/in/sanjib-maity-a450432b6/" className="hover:text-white hover:shadow-lg">
          <FaLinkedin className="text-blue-500 transition duration-300 ease-in-out hover:text-white hover:shadow-lg hover:glow-white" />
        </a>
      </div>
    </div>
  )
}

export default Footer

import { MdOutlineKeyboardArrowRight } from 'react-icons/md';
import heroImage from '../assets/heroImage.png'
import { Link } from 'react-scroll';
import { FaDownload } from 'react-icons/fa';
import Aos from 'aos';
import 'aos/dist/aos.css';
import { useEffect } from 'react';

const Home = () => {

  useEffect(() => {
    Aos.init();
  }, []);

  return (
      <div
        name="home"
        className="h-screen w-screen bg-gradient-to-b from-black via-black to-gray-800"
      >
        <div className="max-w-screen-lg mx-auto flex flex-col items-center justify-center h-full px-4 md:flex-row">
          <div
            data-aos="fade-right"
            data-aos-duration="3000"
            className="flex flex-col justify-center h-full mt-14"
          >
            <p className="text-gray-400 sm:text-2xl text-base">
              Hi, my name is
            </p>
            <h1 className="text-4xl md:text-7xl font-bold text-white">
              Soikat Saha
            </h1>
            <h2 className="text-2xl md:text-7xl font-bold text-[#ccd6f6]">
              I'm a MERN Stack Developer
            </h2>
            <p className="text-gray-500 py-4 max-w-md">
              I love to work on web application using MERN Stack technologies
              like MongoDB, Express.JS, React, Node.JS .
            </p>

            <div>
              <Link
                to="portfolio"
                smooth
                duration={500}
                className="group text-white w-fit px-6 py-3 my-2 hidden md:flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer"
              >
                Portfolio
                <span className="group-hover:rotate-90 duration-300">
                  <MdOutlineKeyboardArrowRight size={25} className="ml-1" />
                </span>
              </Link>
              <button className="group text-white w-fit px-6 py-3 my-2 md:hidden flex items-center rounded-md bg-gradient-to-r from-cyan-500 to-blue-500 cursor-pointer hover:scale-105">
                <a href="./SoikatSaha_Resume.pdf" download={true}>
                  Resume
                </a>
                <span>
                  <FaDownload size={15} className="ml-4" />
                </span>
              </button>
            </div>
          </div>

          <div>
            <img
              src={heroImage}
              data-aos="fade-left"
              data-aos-duration="3000"
              alt="my profile"
              className="rounded-2xl mx-auto w-2/3 md:w-full"
            />
          </div>
        </div>
      </div>
  );
};

export default Home;

import { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';
import { Link } from 'react-scroll';

const Navbar = () => {
  
  const [nav, setNav] = useState(false);
  const [active, setActive] = useState('');

  const navList = [
    {
      id: 1,
      title: "home"
    },
    {
      id: 2,
      title: "about"
    },
    {
      id: 3,
      title: "portfolio"
    },
    {
      id: 4,
      title: "experience"
    },
    {
      id: 5,
      title: "contact"
    }
  ];
  
  return (
    <div className="flex justify-between items-center text-white bg-black fixed z-10 w-screen md:w-full h-20 px-4">
      <div>
        <h1 className="text-5xl font-signature ml-2">Soikat</h1>
      </div>

      <ul className="hidden md:flex">
        {navList.map(({ id, title }) => (
          <li
            key={id}
            className={`${
              active === title ? 'text-white' : 'text-gray-500'
            } px-4 cursor-pointer capitalize font-medium hover:scale-105 duration-200 hover:text-white`}
          >
            <Link
              onClick={() => setActive(title)}
              to={title}
              smooth
              duration={500}
            >
              {title}
            </Link>
          </li>
        ))}
      </ul>
      <div
        onClick={() => setNav(!nav)}
        className="cursor-pointer text-gray-500 pr-4 z-10 md:hidden"
      >
        {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
      </div>
      {nav && (
        <ul className="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-500">
          {navList.map(({ id, title }) => (
            <li
              key={id}
              className="px-4 cursor-pointer capitalize py-6 text-4xl"
            >
              <Link
                onClick={() => setNav(!nav)}
                to={title}
                smooth
                duration={500}
              >
                {title}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </div>
  );
};

export default Navbar;
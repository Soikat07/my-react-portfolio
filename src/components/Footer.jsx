import { FaGithub, FaLinkedin } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';

const Footer = () => {
  return (
    <div className="text-center bg-gradient-to-b from-gray-700 to-black text-white w-full p-4">
      <p className='px-2 md:px-0'>Copyright © 2023 - All right reserved by Soikat Saha</p>
      <div className="flex sm:hidden justify-center items-center mt-3 space-x-3">
        <p>Connect Me</p>
        <a href="https://github.com/Soikat07" target="_blank" rel="noreferrer">
          <FaGithub className="cursor-pointer hover:scale-110" size={25} />
        </a>
        <a
          href="https://www.linkedin.com/in/soikat-saha-090389270/"
          target="_blank"
          rel="noreferrer"
        >
          <FaLinkedin className="cursor-pointer hover:scale-110" size={25} />
        </a>
        <a
          href="mailto:sahasoikat94@gmail.com"
          target="_blank"
          rel="noreferrer"
        >
          <HiOutlineMail className="cursor-pointer hover:scale-110" size={25} />
        </a>
      </div>
    </div>
  );
};

export default Footer;

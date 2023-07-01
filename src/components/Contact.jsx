import { FaArrowUp } from "react-icons/fa";
import { Link } from "react-scroll";


const Contact = () => {
  return (
    <div
      name="contact"
      className="w-full md:h-screen bg-gradient-to-b from-black to-gray-800 p-4 text-white"
    >
      <div className="flex flex-col p-4 justify-center max-w-screen-lg mx-auto h-full">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="pb-8 mt-16 md:mt-0"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Contact
          </p>
          <p className="py-6">Submit the form below to get in touch with me.</p>
        </div>

        <div className=" flex justify-center items-center">
          <form
            action="https://getform.io/f/280f13a2-c098-4eec-ae31-aee0735e3c1e"
            method="POST"
            className=" flex flex-col w-full md:w-1/2"
          >
            <input
              data-aos="fade-right"
              data-aos-duration="2000"
              type="text"
              name="name"
              placeholder="Enter your name"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <input
              data-aos="fade-left"
              data-aos-duration="2000"
              type="text"
              name="email"
              placeholder="Enter your email"
              className="my-4 p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            />
            <textarea
              data-aos="fade-up-right"
              data-aos-duration="3000"
              name="message"
              placeholder="Enter your message"
              rows="10"
              className="p-2 bg-transparent border-2 rounded-md text-white focus:outline-none"
            ></textarea>

            <button data-aos="fade-down"
                    data-aos-easing="linear"
                    data-aos-duration="1500" className="text-white bg-gradient-to-b from-cyan-500 to-blue-500 px-6 py-3 my-8 mx-auto flex items-center rounded-md hover:scale-110 duration-300">
              Let's talk
            </button>
          </form>
        </div>
      </div>
      <div className="relative">
        <Link
          to="home"
          smooth
          duration={500}
          className="cursor-pointer absolute right-5 -top-10"
        >
          <FaArrowUp size={25} />
        </Link>
      </div>
    </div>
  );
};

export default Contact;
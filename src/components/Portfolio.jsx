import nonnasKitchen from '../assets/projects/nonnasKitchen.png'
import languageHub from '../assets/projects/languageHub.png'
import toyWheeler from '../assets/projects/toyWheeler.png'

const Portfolio = () => {

  const portfolios = [
    {
      id: 1,
      src: nonnasKitchen,
      href: 'https://zippy-mooncake-62e55d.netlify.app/',
      code:'https://github.com/Soikat07/Chef-Recipe-Client'
    },
    {
      id: 2,
      src: languageHub,
      href:'https://summer-camp-school-89bc2.web.app/',
      code:'https://github.com/Soikat07/Language-Hub-Client'
    },
    {
      id: 3,
      src: toyWheeler,
      href:'https://toy-marketplace-c6693.web.app/',
      code:'https://github.com/Soikat07/Toy-MartketPlace-Client'
    },
  ];

  return (
    <div
      name="portfolio"
      className="bg-gradient-to-b from-black to-gray-800 w-full text-white md:h-screen"
    >
      <div className="max-w-screen-lg p-4 mx-auto flex flex-col justify-center w-full h-full">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="pb-8 mt-16 md:mt-0"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            Portfolio
          </p>
          <p className="py-6">Check out some of my work right here</p>
        </div>

        <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-8 px-12 sm:px-0">
          {portfolios.map(({ id, src, href, code }) => (
            <div
              key={id}
              data-aos="zoom-in-up"
              data-aos-duration="3000"
              className="shadow-md shadow-gray-600 rounded-lg"
            >
              <img
                src={src}
                alt=""
                className="rounded-md duration-200 hover:scale-105"
              />
              <div className="flex items-center justify-center">
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={href} target="_blank" rel="noreferrer">
                    Demo
                  </a>
                </button>
                <button className="w-1/2 px-6 py-3 m-4 duration-200 hover:scale-105">
                  <a href={code} target="_blank" rel="noreferrer">
                    Code
                  </a>
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Portfolio;
import html from '../assets/html.png'
import css from '../assets/css.png'
import firebase from '../assets/firebase.png'
import github from '../assets/github.png'
import javascript from '../assets/javascript.png'
import mongo from '../assets/mongo.png'
import nodejs from '../assets/nodejs.png'
import react from '../assets/react.png'
import tailwind from '../assets/tailwind.png'

const Experience = () => {

  const techs = [
    {
      id: 1,
      src: html,
      title: 'HTML',
      style: 'shadow-orange-500',
    },
    {
      id: 2,
      src: css,
      title: 'CSS',
      style: 'shadow-blue-500',
    },
    {
      id: 3,
      src: javascript,
      title: 'JavaScript',
      style: 'shadow-yellow-500',
    },
    {
      id: 4,
      src: react,
      title: 'React',
      style: 'shadow-blue-600',
    },
    {
      id: 5,
      src: tailwind,
      title: 'Tailwind',
      style: 'shadow-sky-400',
    },
    {
      id: 6,
      src: nodejs,
      title: 'Node JS',
      style: 'shadow-green-400',
    },
    {
      id: 7,
      src: mongo,
      title: 'Mongo DB',
      style: 'shadow-green-700',
    },
    {
      id: 8,
      src: github,
      title: 'GitHub',
      style: 'shadow-gray-300',
    },
    {
      id: 9,
      src: firebase,
      title: 'Firebase',
      style: 'shadow-yellow-400',
    },
  ];

  return (
    <div
      name="experience"
      className="w-screen bg-gradient-to-b from-gray-800 to-black md:h-screen"
    >
      <div className="max-w-screen-lg mx-auto p-4 flex flex-col justify-center w-full h-full text-white">
        <div
          data-aos="fade-right"
          data-aos-duration="3000"
          className="mt-16 md:mt-0"
        >
          <p className="text-4xl font-bold border-b-4 border-gray-500 p-2 inline">
            Experience
          </p>
          <p className="py-6">These are the technologies I've worked with</p>
        </div>

        <div className="w-full grid grid-cols-2 sm:grid-cols-3 gap-8 text-center py-8 px-12 sm:px-0">
          {techs.map(({ id, src, title, style }) => (
            <div
              data-aos="flip-left"
              data-aos-easing="ease-out-cubic"
              data-aos-duration="2000"
              key={id}
              className={`shadow-md hover:scale-105 duration-500 py-2 rounded-lg ${style}`}
            >
              <img src={src} alt="" className="w-20 mx-auto" />
              <p className="mt-4">{title}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Experience;
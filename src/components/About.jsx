

const About = () => {
  return (
    <div
      name="about"
      className="w-screen md:h-screen bg-gradient-to-b from-gray-800 to-black text-white"
    >
      <div className="max-w-screen-lg p-2 mx-auto flex flex-col justify-center w-full h-full">
        <div
          data-aos="fade-left"
          data-aos-duration="3000"
          className="mt-16 md:mt-0"
        >
          <p className="text-4xl font-bold inline border-b-4 border-gray-500">
            About
          </p>
        </div>

        <p
          data-aos="fade-right"
          data-aos-duration="3000"
          className="md:text-xl mt-10 px-2 md:px-0"
        >
          Welcome to my portfolio! I'm Soikat, a junior MERN Stack Developer who
          is enthusiastic about creating dynamic web applications. I have
          recently completed an intensive Web Development course at Programming
          Hero, where I honed my skills in the MERN Stack field. Equipped with a
          solid foundation in React, I thrive on crafting interactive, user
          friendly and responsive user interfaces.
        </p>
        <br />
        <p
          data-aos="fade-right"
          data-aos-duration="2000"
          className="md:text-xl px-2 md:px-0"
        >
          I have expertise in HTML, CSS and CSS Frameworks like Bootstrap and
          Tailwind. I have a intermediate knowledge in JavaScript and good
          knowledge in React. I have worked with MongoDB for Database,
          Express.js and Node.js for backend.In my projects I uses this tools:
          Firebase, Figma, Netlify, Vercel, GitHub. I am passionate about
          staying up-to-date with the latest industry trends and continuously
          expanding my knowledge to deliver cutting-edge projects.
        </p>
      </div>
    </div>
  );
};

export default About;
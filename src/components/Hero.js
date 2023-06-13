import GithubIcon from "../resources/github.png";
import LinkedinIcon from "../resources/linkedin.png";
import MailIcon from "../resources/mail.png";

import SocialIcon from "./SocialMediaIcon";

function Hero() {
  return (
    <>
      <div className=" text-center mb-10">
        <h2 className="text-5xl font-bold text-transparent bg-clip-text bg-gradient-to-tl from-blue-600 to-green-300 pb-3">
          Haider Jirrie
        </h2>
        <h3 className="text-2xl text-bold pb-3">
          Student ICT Software Engineering
        </h3>
        <p className="text-md  text-slate-950 font-medium max-w-lg mx-auto leading-8">
          Welcome! As an HBO-ICT student at The Hague University of Applied
          Sciences, I am currently looking for a third-year internship at a
          company where I can take my first steps as a junior Software Engineer.
          Below you will find my CV, and you can also contact me via LinkedIn or
          email.
        </p>
        {/* <a href="https://haiderjirrie.com/CV Haider Jirrie.pdf" download> */}
        <a>
          <button className=" text-lg cursor-pointer mt-4 px-4 bg-gradient-to-tr from-sky-500 to-yellow-300 text-white font-bold rounded-md hover:scale-125 transition ease-in-out duration-300">
            Download CV
          </button>
        </a>
      </div>
      <div className="max-w-xs gap-14 flex justify-center mx-auto mb-24">
        <SocialIcon
          name="LinkedIn"
          image={LinkedinIcon}
          link="https://www.linkedin.com/in/haiderjirrie/"
        />
        <SocialIcon
          name="GitHub"
          image={GithubIcon}
          link="https://github.com/HaiderJirrie"
        />
        <SocialIcon
          name="E-mail"
          image={MailIcon}
          link="mailto: haiderjirrie@gmail.com"
        />
      </div>
    </>
  );
}

export default Hero;

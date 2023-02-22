import { Link } from "react-router-dom";
import { Title } from "../components";

const About = () => {
  return (
    <section
      id="about"
      className="about-me px-8 tablet:px-10 laptop:px-48 min-w-[470px]"
    >
      <Title>About me</Title>
      <div className="mt-7 laptop:mt-10">
        <p className="text-body-1 about-description font-IBM">
          I’m a Software Developer looking for a new role in an exciting
          company, a place where I can build, learn and grow along side people
          that are much smarter than me. I’m based in Montreal, Canada, but I’m
          happy working remotely and have experience in remote teams. When I’m
          not coding, you’ll find me outdoors. I love being out in nature
          whether that’s going for a walk, run or cycling. I’d love you to check
          out my work.
        </p>
        <Link to="/projects">
          <button className="w-60 h-12 mt-8 self-end border-FAFAFA border hover:border-00aecb hover:text-00aecb transition-colors  duration-300 font-IBM">
            Go to projects
          </button>
        </Link>
      </div>
    </section>
  );
};

export default About;

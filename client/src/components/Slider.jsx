import AwesomeSlider from "react-awesome-slider";
import "react-awesome-slider/dist/styles.css";
import "react-awesome-slider/dist/custom-animations/cube-animation.css";
import projectsInfo from "../data/data";
import { Invoice, Devjobs } from "../components";

export const Slider = () => {
  return (
    <AwesomeSlider animation="cubeAnimation">
      <div className="bg-121c30 h-full w-full flex items-center">
        <Invoice />
      </div>
      <div className="bg-121c30 h-full w-full flex items-center">
        <Devjobs />
      </div>
    </AwesomeSlider>
  );
};

import "react-awesome-slider/dist/styles.css";
import { Devjobs, Divider, Footernav, Invoice } from "../components";
import { Slider } from "../components/Slider";

function Projects() {
  return (
    <div className="projects-container">
      <div
        className="projects-content-container mt-10
    laptop:-mt-20 mx-[3%] tablet:mx-[5%] min-w-[460px] 
    font-IBM mb-20"
      >
        <section className="projects-list flex flex-col">
          <div className="title flex justify-center mb-10 laptop:mb-20">
            <div className="flex justify-center border border-dashed w-fit px-5 py-5">
              <h2 className=" text-heading-2 font-monoton">Projects</h2>
            </div>
          </div>
          <hr className="h-[2px] bg-FAFAFA opacity-10 hidden xl:block"></hr>

          <div className="content px-6 tablet:px-0">
            <div className="projects hidden xl:block">
              <Slider />
            </div>
            <div className="projects flex flex-col gap-10 xl:hidden ">
              <Invoice />
              <Devjobs />
            </div>
          </div>
        </section>
      </div>
      <Footernav />
    </div>
  );
}

export default Projects;

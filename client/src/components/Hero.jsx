import { Button } from "../components";
const Hero = () => {
  return (
    <section className="hero mt-24 px-8 tablet:px-10 laptop:px-48 relative">
      <div className="flex">
        <div className="w-5 flex flex-col items-center h-[370px]">
          <div className="w-[1px] h-[60%] flex-grow flex-shrink basis-[0%] border-l border-dashed border-FFFF"></div>
          <div className="rotate-90 my-[35px] font-IBM">Hello</div>

          <div className="w-[1px] h-[60%] flex-grow flex-shrink basis-[0%] border-l border-dashed border-FFFF"></div>
        </div>

        {/* scalable reliable maintainable */}
        <div className="flex flex-col gap-y-2 px-[25px] font-monoton tablet:[35px] laptop:px-[55px] uppercase">
          <div
            className=" text-heading-3 tablet:text-heading-1 text-222 bg-00aecb h-16 flex items-center pl-4 rounded
          border-dashed border-2 border-222
          "
          >
            Scalable
          </div>
          <div
            className=" text-heading-3 tablet:text-heading-1 text-222 bg-00aecb h-16 flex items-center pl-4 rounded
          border-dashed border-2 border-222
          "
          >
            Reliable
          </div>
          <div
            className=" text-heading-3 tablet:text-heading-1 text-222 bg-00aecb h-16 flex items-center pl-4 pr-3 rounded
          border-dashed border-2 border-222
          "
          >
            Maintainable
          </div>
          <div className="text-heading-3 tablet:text-heading-1 text-FFFF h-16 flex items-center border border-dashed pl-4 py-4 ">
            Software
          </div>

          <Button>
            <span className="capitalize font-IBM text-body-2">About me</span>
          </Button>
        </div>
      </div>
    </section>
  );
};

export default Hero;

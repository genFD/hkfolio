import React from "react";
import { Express, Pg, ReactIcon, Node } from "../components";

const Devjobs = () => {
  return (
    <article className="tablet:grid tablet:grid-cols-2 tablet:gap-[5rem]">
      <div className="flex flex-col border-dashed border border-7C5DFA  rounded-b ">
        <header className="card-header">
          <span className="bg-F43030"></span>
          <span className="bg-F7CE5B"></span>
          <span className="bg-5FB4A2"></span>
        </header>
        <img src="/devjobs.jpg" alt="" className=" rounded-b" />
      </div>
      <div className="mt-6 tablet:mt-0 h-full">
        <div className="tags flex justify-between">
          <div className="bg-EAEAEB rounded-[4px] flex justify-between items-center border border-7C5DFA">
            <span className="bg-7C5DFA rounded-[4px] border h-full w-8"></span>
            <span className="px-2 font-IBM text-body-2 text-222">
              Devjobs app
            </span>
          </div>
          <div className="flex">
            <ReactIcon />
            <Node />
            <Express />
            <Pg />
          </div>
        </div>
        <h4 className="mt-4 pl-2 border border-dashed">Brief</h4>
        <p className="mt-2 px-2">
          The challenge was to build out this invoicing application with these
          requirements :
        </p>
        <ul className="bg-203A4C p-3 mt-4 gap-y-6 flex flex-col">
          <li data-icon="🔥">
            Be able to filter jobs on the index page by title, location, and
            whether a job is for a full-time position
          </li>
          <li data-icon="🔥">
            Click a job from the index page so that the user can read more
            information and apply for the job
          </li>
          <li data-icon="🔥">
            View the optimal layout for each page depending on their device's
            screen size
          </li>
          <li data-icon="🔥">
            See hover states for all interactive elements throughout the site
          </li>
          <li data-icon="🔥">Toggle light and dark mode</li>
        </ul>
        <div className="flex justify-between px-2 tablet:px-0 ">
          <button className="rounded-full flex justify-center items-center border border-dashed bg-5964E0  hover:bg-00aecb px-4 py-2 laptop:px-6 laptop:py-3 mt-4 transition-all duration-300">
            <a
              href="https://devjobs.up.railway.app/
                  "
              target="_blank"
              rel="noreferrer"
            >
              See live demo
            </a>
          </button>
          <button className="hover:underline flex items-end py-2">
            <a
              href="https://github.com/hermkan/Jobs-dev
                  "
              target="_blank"
              rel="noreferrer"
              className="flex gap-1"
            >
              <span>
                <svg xmlns="http://www.w3.org/2000/svg" width="25" height="24">
                  <path
                    fill="#FAFAFA"
                    d="M12.5 0C5.594 0 0 5.51 0 12.305c0 5.437 3.581 10.048 8.547 11.674.625.116.854-.265.854-.592 0-.292-.01-1.066-.016-2.092-3.477.742-4.21-1.65-4.21-1.65-.569-1.42-1.39-1.8-1.39-1.8-1.133-.764.087-.748.087-.748 1.255.086 1.914 1.268 1.914 1.268 1.115 1.881 2.927 1.338 3.641 1.024.113-.797.434-1.338.792-1.646-2.776-.308-5.694-1.366-5.694-6.08 0-1.343.484-2.44 1.286-3.302-.14-.31-.562-1.562.11-3.256 0 0 1.047-.33 3.437 1.261 1-.273 2.063-.409 3.125-.415 1.063.006 2.125.142 3.125.415 2.375-1.591 3.422-1.261 3.422-1.261.672 1.694.25 2.945.125 3.256.797.861 1.281 1.959 1.281 3.302 0 4.727-2.921 5.767-5.703 6.07.438.369.844 1.123.844 2.276 0 1.647-.016 2.97-.016 3.37 0 .322.22.707.86.584 5-1.615 8.579-6.23 8.579-11.658C25 5.509 19.403 0 12.5 0z"
                  />
                </svg>
              </span>
              <span>Source Repo</span>
            </a>
          </button>
        </div>
      </div>
    </article>
  );
};

export default Devjobs;

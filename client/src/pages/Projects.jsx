import { Footernav, Express, Node, ReactIcon, Pg } from "../components";

function Projects() {
  return (
    <>
      <div
        className="App mt-10
    laptop:-mt-20 mx-[3%] tablet:mx-[5%] min-w-[460px] 
    font-IBM
    "
      >
        <section className="projects-list flex flex-col">
          <div className="title flex justify-center mb-10 laptop:mb-20">
            <div className="flex justify-center border border-dashed w-fit px-5 py-5">
              <h2 className=" text-heading-2 font-monoton">Projects</h2>
            </div>
          </div>

          {/* content */}
          <div className="projects">
            {/* <div className="mb-5 flex justify-center tablet:justify-end">
              <div className="border tablet:w-[35%]">
                <h3 className="font-IBM text-heading-3">Invoice app</h3>
              </div>
            </div> */}

            <div className="tablet:grid tablet:grid-cols-2 tablet:gap-[5rem]">
              <div className="flex flex-col ">
                <header className="card-header">
                  <span className="bg-F43030"></span>
                  <span className="bg-F7CE5B"></span>
                  <span className="bg-5FB4A2"></span>
                </header>
                <img src="/invoice.jpg" alt="" className=" rounded-b" />
              </div>
              <div className="mt-6 tablet:mt-0">
                <div className="tags flex justify-between">
                  <div className="bg-EAEAEB rounded-[4px] flex justify-between items-center border border-7C5DFA">
                    <span className="bg-7C5DFA rounded-[4px] border h-full w-8"></span>
                    <span className="px-2 font-IBM text-body-2 text-222">
                      Invoice app
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
                  The challenge was to build out this invoicing application with
                  these requirements :
                </p>
                <ul className="bg-203A4C p-3 mt-4 gap-2 flex flex-col">
                  <li data-icon="🔥">
                    View the optimal layout for the app depending on their
                    device's screen size
                  </li>
                  <li data-icon="🔥">
                    See hover states for all interactive elements on the page
                  </li>
                  <li data-icon="🔥">
                    Create, read, update, and delete invoices
                  </li>
                  <li data-icon="🔥">
                    Save draft invoices, and mark pending invoices as paid
                  </li>
                  <li data-icon="🔥">
                    Filter invoices by status (draft/pending/paid)
                  </li>
                  <li data-icon="🔥">Toggle light and dark mode</li>
                  <li data-icon="🔥">
                    Build this project as a full-stack application
                  </li>
                </ul>
                <button className="rounded-full flex justify-center items-center border border-dashed bg-5964E0  hover:bg-00aecb px-6 py-3 mt-4 transition-all duration-300">
                  See live demo
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
      <Footernav />
    </>
  );
}

export default Projects;

const Button = ({ children }) => {
  return (
    <button
      className="primary-btn mt-8 w-[200px] h-12 bg-203A4C  hover:bg-00aecb disabled:bg-EAEAEB 
      "
    >
      <a href="#about" className="flex justify-between items-center">
        <span className="w-12 h-12 bg-222 bg-opacity-10 flex justify-center items-center">
          <svg xmlns="http://www.w3.org/2000/svg" width="16" height="14">
            <g fill="none" fillRule="evenodd" stroke="#5FB4A2">
              <path d="M0 9l8 4 8-4" />
              <path opacity=".5" d="M0 5l8 4 8-4" />
              <path opacity=".25" d="M0 1l8 4 8-4" />
            </g>
          </svg>
        </span>

        <span className="uppercase text-body-2 w-full h-full flex items-center justify-start pl-6">
          {children}
        </span>
      </a>
    </button>
  );
};

export default Button;

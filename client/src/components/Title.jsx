import React from "react";

const Title = ({ children }) => {
  return (
    <header>
      <h2 className="text-heading-7 capitalize font-IBM">{children}</h2>
      <span className="flex items-center justify-center w-20">*</span>
      <hr className="h-[2px] w-20 text-00aecb border" />
    </header>
  );
};

export default Title;

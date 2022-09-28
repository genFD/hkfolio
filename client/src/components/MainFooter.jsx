import { FooterContact, Footernav } from "../components";
import React from "react";

const MainFooter = () => {
  return (
    <footer className="laptop:mt-40 min-w-[470px]">
      <FooterContact />
      <Footernav />
    </footer>
  );
};

export default MainFooter;

import { FooterContact, Footernav } from "../components";
import React from "react";

const MainFooter = () => {
  return (
    <footer className="mt-20 laptop:mt-40">
      <FooterContact />
      <Footernav />
    </footer>
  );
};

export default MainFooter;

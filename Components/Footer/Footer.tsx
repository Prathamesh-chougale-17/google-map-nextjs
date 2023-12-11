import React from "react";

const Footer = () => {
  return (
    <footer className="border-t-2">
      <div className="mt-2 z-50 flex-between text-xs md:text-sm w-full lg:px-10 max-md:flex-col">
        <p className="flex">
          Copyright &#169; 2023 by HydroMinex{" "}
          <span className="hidden lg:flex">&nbsp;| All Rights Reserved</span>
        </p>
      </div>
    </footer>
  );
};

export default Footer;

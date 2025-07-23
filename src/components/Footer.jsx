import React from "react";
import { useEffect, useState } from "react";
import "./Footer.scss";

const Footer = () => {

    return (
        <div className="footer text-center">
        <p> 
          &#x3c;&#47;&#x3e; with ❤️ by
          <a href="" target="_blank">
            {" "}
             Jaydeep Singh 
          </a>
          😎
        </p>
      </div>
    );
  };
  
  export default Footer;
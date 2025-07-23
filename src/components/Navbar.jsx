import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { styles } from "../styles";
import { logo } from "../assets";
import "./Navbar.scss";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 100);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav
      className={`${styles.paddingX} w-full flex items-center py-3 fixed top-0 z-20 ${
        scrolled ? "bg-primary" : "bg-transparent"
      }`}
    >
      <div className="w-full flex justify-between items-center max-w-7xl mx-auto">
        <Link
          to="/"
          className="flex items-center gap-2"
          onClick={() => window.scrollTo(0, 0)}
        >
          <img src={logo} alt="logo" className="w-9 h-9 object-contain logo" />
          <p className="text-white text-[18px] font-bold cursor-pointer">
            Jaydeep Singh
          </p>
        </Link>

        <div className="sm:flex gap-5">
          <div
            className="top2 text-secondary hover:text-white text-[15px] font-medium cursor-pointer"
          >
            <a
              href="https://drive.google.com/file/d/1k1hnxB9JqfVrxwzaLcVaG7Vu8ebSY1hX/view?usp=drivesdk"
              target="_blank"
              rel="noopener noreferrer"
            >
              Resume
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;

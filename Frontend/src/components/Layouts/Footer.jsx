import React from "react";
import { FaXTwitter } from "react-icons/fa6";
import { FaFacebook } from "react-icons/fa";
import { FaSquareInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa";
import { FaYoutube } from "react-icons/fa";
import { Link } from "react-router-dom";

const Footer = () => {
  const getCurrentYear = () => {
    return new Date().getFullYear();
  };

  return (
    <footer className="bg-indigo-900 text-white p-10">
     <div className="flex items-center ">
        <div className="flex text-md w-1/3 sm:ml-12 sm:gap-16">
          <ul className="flex-1">
            <li className="text-2xl mb-2 font-bold font-headerFont">Company</li>
            <Link to='/about'><li className="font-bodyFont">About</li></Link>
            <Link to='/blog'><li className="font-bodyFont">Blog</li></Link>
            <Link to='/how-it-works'><li className="font-bodyFont">How it Works</li></Link>
          </ul>

          <ul className="flex-1">
            <li className="text-2xl mb-2 font-bold font-headerFont">Products</li>
            <Link to='/about'><li className="font-bodyFont">About</li></Link>
            <Link to='/blog'><li className="font-bodyFont">Blog</li></Link>
            <Link to='/how-it-works'><li className="font-bodyFont">How it Works</li></Link>
          </ul>
        </div>

        <div className="flex-1 w-full justify-items-end font-bodyFont">
          <ul className="flex gap-1">
            <li>
              <FaXTwitter />
            </li>
            <li>
              <FaFacebook />
            </li>
            <li>
              <FaSquareInstagram />
            </li>
            <li>
              <FaLinkedin />
            </li>
            <li>
              <FaYoutube />
            </li>
          </ul>
          <Link to='/terms-and-conditions'><p>Terms and conditions</p></Link>
          <p>
            <span>&copy; {getCurrentYear()}. All Rights Reserved</span>
          </p>
        </div>
      </div>
    </footer>
  )
};

export default Footer;
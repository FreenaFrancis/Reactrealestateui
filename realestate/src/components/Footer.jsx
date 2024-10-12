import React from 'react';
import { BsDribbble, BsFacebook, BsGithub, BsInstagram, BsTwitter } from "react-icons/bs";
import navlogo from '../assets/navlogo.png';
function MyFooter() {
  return (
    <footer className="bg-gray-800 text-white py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Top Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          {/* Brand */}
          <div className="mb-8 sm:mb-0 space-y-4">
            <a href="/" className="flex items-center">
              <img
                src={navlogo}
                className="h-8 mr-3"
                alt="Brand Logo"
              />
              <span className="text-2xl font-bold">REALCENT</span>
            </a>

            <div>
              <p>Copyright @2024 freena</p>
              <p>All rights reserved</p>
            </div>
          </div>

          {/* Links */}
          <div className="flex space-x-8">
            <div>
              <h5 className="uppercase font-semibold mb-4">About</h5>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Flowbite</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Tailwind CSS</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="uppercase font-semibold mb-4">Follow us</h5>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Github</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Discord</a>
                </li>
              </ul>
            </div>

            <div>
              <h5 className="uppercase font-semibold mb-4">Legal</h5>
              <ul>
                <li className="mb-2">
                  <a href="#" className="hover:underline">Privacy Policy</a>
                </li>
                <li>
                  <a href="#" className="hover:underline">Terms & Conditions</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr className="my-6 border-gray-600" />

        {/* Bottom Section */}
        <div className="flex flex-col sm:flex-row justify-between items-center">
          <p className="text-sm text-gray-400">
            &copy; 2022 <a href="#" className="hover:underline">Flowbite™</a>. All Rights Reserved.
          </p>

          {/* Social Icons */}
          <div className="mt-4 sm:mt-0 flex space-x-6">
            <a href="#" className="text-gray-400 hover:text-white">
              <BsFacebook size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsInstagram size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsTwitter size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsGithub size={20} />
            </a>
            <a href="#" className="text-gray-400 hover:text-white">
              <BsDribbble size={20} />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}

export default MyFooter;

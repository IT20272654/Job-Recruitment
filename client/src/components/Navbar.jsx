import { useEffect } from "react";
import { useState } from "react";

//import logo
import logo from "../assets/logo.svg"; 
// import menuicons from react icons
import {HiMenu} from 'react-icons/hi'


const Navbar = () => {
    const[isMenuOpen, setIsMenuOpen] = useState(false);
    const[isSticky, setIsSticky] = useState(false);

    //toggle Menubtn
    const toggleMenu = () => {
        setIsMenuOpen(!isMenuOpen);
      
    }
    
    useEffect(() => {
        const handleScroll = () => {
          if (window.scrollY > 0) {
            setIsSticky(true);
          }
        };

    window.addEventListener("scroll", handleScroll);
    },[])
    
        
    return (
      <header className="w-full fixed top-0 left-0 right-0">
         <nav className={`py-4 md:px-12 px-4 bg-white ${
          isSticky ? "sticky top-0 right-0 left-0 bg-white " : ""
        }`}>
            {/* for large devices */}
            <div className="flex items-center justify-between">
                {/* for logo */}
                <div className="cursor-pointer">
                    <img src = {logo} alt="" className="h-10"/>
                </div>
                {/* menu items for large devices */}
                <div className="lg:flex items-center gap-3 hideen text-body text-lg ">
                  <a href="/" className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400">Home</a>
                  <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400">Our Skills</a>
                  <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400">About Us</a>
                  <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400">Portfolio</a>
                  <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400">Feedback</a>
                 
                </div>

                {/* Contact Us btn */}
                <div className="lg:block hidden">
                  <button className="outlineBtn">Contact Us</button>
                </div>
                {/* menu btn for mobile devices */}
                <button onClick={toggleMenu} className="lg:hidden tex-body text-3x1">
                <HiMenu/>
                </button>
            </div>

            {/* menu items for small devices*/}
            {
              isMenuOpen && <div className="mt-4 bg-body p-4 rounded-lg text-white">
                <a href="/" className="block py-2 px-4 cursor-pointer text-primary hover:text-gray-400">Home</a>
                  <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400">Our Skills</a>
                  <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400">About Us</a>
                  <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400">Portfolio</a>
                  <a href="/" className="block py-2 px-4 cursor-pointer  hover:text-gray-400">Feedback</a>
                  
                  </div>
            }
         </nav>
      </header>
    );
};



export default Navbar;
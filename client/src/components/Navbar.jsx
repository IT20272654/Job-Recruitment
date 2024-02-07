import { useEffect } from "react";
import { useState } from "react";

//import logo
import logo from "../assets/logo.svg"; 


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
      <header>
         <nav>
            {/* for large devices */}
            <div>
                {/* for logo */}
                <div className="cursor-pointer">
                    <img src = {logo} alt="" className="h-10"/>
                </div>
                {/* menu items for large devices */}
                <div>
                  <a href="/n"></>13.25
                </div>
            </div>
         </nav>
      </header>
    );
};



export default Navbar;
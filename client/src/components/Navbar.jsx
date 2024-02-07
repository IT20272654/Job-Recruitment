import { useState } from "react";

//import logo
import logo from '../assets/logo.svg'; 
/* logo didnt came , vedio time 12.58*/

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
                <div>
                    <img src = {logo} alt=""/>
                </div>
            </div>
         </nav>
      </header>
    );
};



export default Navbar;
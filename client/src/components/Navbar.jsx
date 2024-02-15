import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';
import logo from '../assets/logo.png';


const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const haddleMunuToggler = () => {
    setIsMenuOpen(!isMenuOpen)
  };

const navItem = [
  {path: "/", title: "Home"},
  {path: "/Search", title: "Available Jobs"},
  {path: "/post-job", title: "Post A Job"},
  {path: "/my-job", title: "My Jobs"},
  {path: "/contact-us", title: "Contact Us"},
]

  return (
    <div>

      


      <header className='cardd'>
      <nav className='flex justify-between items-center py-6'>
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
        <a href="/"><img src={logo} alt="" /></a>
        </a>
        
        {/* nav items for large devices*/}
        <ul className='hidden md:flex gap-12'>
          {
            navItem.map(({path,title}) =>(
              <li key={path} className="text-base text-primary">
                <NavLink
                    to={path}
                    className={({ isActive }) => isActive  ? "active": ""}
                  >
                    {title}
                </NavLink>
              </li>
            ))
          }
        </ul>

        {/* sign up and login button */}
        {/* <div>
           <Link to="/login" className='px-8 py-3 bg-primary text-xl text-white rounded hover:bg-body hover:text-white transition-all duration-300'>Login</Link>
           
        </div> */}
        <div>
        <Link to="/sign-up" className='px-8 py-3 bg-primary text-xl text-white rounded hover:bg-body hover:text-white transition-all duration-300'>Sign up</Link>
        </div>
      {/* mobile menu */}


      </nav>
      </header>
    </div>
  )
}

export default Navbar
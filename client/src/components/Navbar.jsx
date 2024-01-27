import React, { useState } from 'react'
import { NavLink } from 'react-router-dom';
import { Link } from 'react-router-dom';

const Navbar = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false)
  const haddleMunuToggler = () => {
    setIsMenuOpen(!isMenuOpen)
  };

const navItem = [
  {path: "/", title: "Start a search"},
  {path: "/my-job", title: "My Jobs"},
  {path: "/salary", title: "Salary Estimate"},
  {path: "/post-job", title: "Post A Job"},
]

  return (
    <div>
      <header className='max-w-screen-2xl mx-auto xl:px-24 px-4'>
      <nav className='flex justify-between items-center py-6'>
        <a href="/" className="flex items-center gap-2 text-2xl text-black">
          <span>Job Eka</span>
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
        <div>
           <Link to="/login" className='py-2 px-5 border rounded'>Login</Link>
           <Link to="/sign-up" className='py-2 px-5 border rounded bg-blue'>Sign up</Link>
        </div>

      {/* mobile menu */}


      </nav>
      </header>
    </div>
  )
}

export default Navbar
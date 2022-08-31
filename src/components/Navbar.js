import React from 'react'
import logo from '../images/logo-bookmark.svg'

export default function Navbar() {
  return (
    <header className="px-6 py-10">
      <div className="container mx-auto flex justify-between items-center">
        {/* Logo */}
        <div className="flex items-center">
          <img src={logo} alt="" />
        </div>
        {/* Menu */}
        <nav className="hidden md:flex items-center space-x-8  uppercase">
          <ul className="flex text-gray-400 space-x-8">
            <li className="hover:text-softRed"><a href="#features" className="tracking-widest">features</a></li>
            <li className="hover:text-softRed"><a href="#download" className="tracking-widest">download</a></li>
            <li className="hover:text-softRed"><a href="#faq" className="tracking-widest">faq</a></li>
          </ul>

          <button className="bg-softRed text-white py-2 px-8 rounded-md border-2 border-softRed hover:bg-white hover:text-softRed text-center uppercase">login</button>
        </nav>

        {/* Mobile Menu Btn */}
        <button className="md:hidden cursor-pointer menu-btn">
          <span className="top"></span>
          <span className="mid"></span>
          <span className="bottom"></span>
        </button>
      </div>
    </header>
  )
}

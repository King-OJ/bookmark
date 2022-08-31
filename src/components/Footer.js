import React from 'react'
import logo from '../images/logo-bookmark-footer.svg'
import facebook from '../images/icon-facebook.svg'
import twitter from '../images/icon-twitter.svg'


export default function Footer() {
  return (
    <footer className="px-6 py-20 bg-veryDarkBlue">
      <div className="flex justify-center items-center md:justify-start">
        <div className="flex flex-col space-y-10 md:flex-row md:space-y-0 md:space-x-4 md:justify-around md:w-full">
        
          <img src={logo} alt="" />

          <ul className="flex flex-col items-center space-y-8 uppercase md:flex-row md:space-y-0 md:space-x-6 text-grayishBlue">
            <li className="text-lg"><a href="#features" className="hover:text-softRed">features</a></li>
            <li className="text-lg"><a href="#download" className="hover:text-softRed">download</a></li>
            <li className="text-lg"><a href="#faq" className="hover:text-softRed">faq</a></li>
          </ul>

          <div className="flex self-center items-center space-x-8 text-white">
            <img src={facebook} alt="" className='hover:cursor-pointer ficon'/>
            <img src={twitter} alt="" className='hover:cursor-pointer ficon'/>
          </div>

        </div>
      </div>
    </footer>
  )
}

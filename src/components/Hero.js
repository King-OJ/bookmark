import React from 'react'
import Hero_image from '../images/illustration-hero.svg'

export default function Hero() {
  return (
    <section id="hero" className="py-16 px-6">
      <div className="container mx-auto flex flex-col space-y-4 lg:flex-row-reverse lg:space-y-0 overflow-hidden">
        {/* hero image */}
        <div className="relative mx-auto lg:mx-0 lg:w-1/2 ">
          <img src={Hero_image} alt="" className='z-20 relative' />
          <div className="hidden absolute z-10 bottom-0 -right-48 lg:block h-72 w-full rounded-l-full bg-softBlue"></div>
        </div>

        {/* Hero textbox */}
        <div className="text-center lg:text-left space-y-8 mx-auto lg:w-1/2">
          <h1 className="text-black capitalize font-bold text-3xl md:text-4xl md:max-w-sm lg:text-6xl lg:max-w-xl">a simple bookmark manager</h1>
          <p className="text-gray-400 max-w-md text-lg mx-auto lg:mx-0 lg:text-2xl lg:leading-8">A clean and simple interface to organize your favourite websites. Open a new browser tab and see your sites load instantly. Try it for free.</p>
          <div className="flex mx-auto space-x-4 items-center justify-center lg:justify-start">
            <button className="text-sm py-4 lg:py-4 lg:text-lg px-2 md:px-6 font-bold rounded text-white bg-softBlue border-2 border-softBlue capitalize hover:bg-white hover:text-softBlue">get it on chrome</button>
            <button className="text-sm py-4 lg:py-4 lg:text-lg px-2 md:px-6 font-bold rounded text-black bg-gray-200 border-2 border-gray-200 capitalize hover:bg-white hover:text-gray-600">get it on firefox</button>
          </div>
        </div>

        {/* Blue background  */}
      </div>
    </section>
  )
}

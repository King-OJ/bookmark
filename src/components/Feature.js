import React from 'react'

export default function Feature({image, header, content}) {
  return (
    <div className="mt-12 mx-6 md:mx-10 flex flex-col items-center md:flex-row md:items-start">
      <div className=" relative w-full md:w-1/2 md:self-stretch">
        <img src={image} alt="" className="relative md:h-full z-20 lg:pb-20 " />
        <div className="hidden absolute z-10 bottom-0 -left-48 lg:block h-72 w-full rounded-r-full bg-softBlue"></div>
      </div>

      {/* feature-text */}
      <div className="mt-12 text-center md:mt-0 md:text-left md:w-1/2 md:ml-6">
        <h3 className="text-2xl md:text-3xl text-black mb-8 font-bold">{header}</h3>
        <p className="text-md text-gray-400 max-w-md mb-8">{content}</p>
        <button className="bg-softBlue text-white font-bold capitalize px-6 py-3 rounded border-2 border-softBlue hover:text-softBlue hover:bg-white">more info</button>
      </div>


    </div>
  )
}

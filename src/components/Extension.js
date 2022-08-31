import React from 'react'

export default function Extension({image, title, desc, btn_text}) {
  return (
    <div className="w-full p-6 rounded md:w-1/3 bg-white shadow-lg">
      <div className="flex justify-center">
        <img src={image} alt="" />
      </div>
      <h4 className="mt-8 font-bold text-xl">{title}</h4>
      <div className="mt-4 text-gray-400 text-md font-medium pb-6">{desc}</div>
      <div className='bg-dots bg-repeat-x pt-6 mb-4'></div>
      <button className=" w-full bg-softBlue text-white capitalize text-center p-2 rounded-lg border-2 border-softBlue hover:text-softBlue hover:bg-white">{btn_text}</button>
    </div>
  )
}

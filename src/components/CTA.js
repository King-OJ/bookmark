import React from 'react'

export default function CTA() {
  return (
    <section id="cta" className="bg-softBlue py-20 px-6">
      <div className="container mx-auto text-white text-center">
        <div className="text-lg tracking-widest">35,000+ ALREADY JOINED</div>
        <h2 className="text-3xl font-bold mt-6 max-w-md mx-auto lg:text-4xl lg:max-w-xl">Stay up-to-date with what we're doing</h2>
        <div className="mt-6 flex flex-col space-y-4 md:space-y-0 md:space-x-4 md:flex-row md:justify-center">
          <div className=" md:mt-0">
            <input type="text" className=" bg-white text-black placeholder:text-gray-400 rounded-lg px-6 py-2 outline-none " placeholder="Enter your email address" />
          </div>
          
          <div className='mt-4 md:mt-0'>
            <button className=" bg-softRed text-white font-bold px-5 py-2 rounded-lg hover:opacity-90">Contact Us</button>
          </div>
        </div>
        

      </div>
    </section>
  )
}

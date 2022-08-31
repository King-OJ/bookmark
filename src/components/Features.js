import React, { useState } from 'react'
import Feature from './Feature'

import img1 from '../images/illustration-features-tab-1.svg'
import img2 from '../images/illustration-features-tab-2.svg'
import img3 from '../images/illustration-features-tab-3.svg'

const features =[
  {
  image: img1,
  header: "Bookmark in one click",
  content: "Organize your bookmarks however you like. Our simple drag-and-drop interface gives you complete control over how you manage your favourite sites."
  },
  {
  image: img2,
  header: "Intelligent search",
  content: "Our powerful search feature will help you find saved sites in no time at all. No need to trawl through all of your bookmarks."
  },
  {
  image: img3,
  header: "Share your bookmarks",
  content: "Easily share your bookmarks and collections with others. Create a shareable a link that you can send at the click of a button."
  }
]

export default function Features() {
  const [num, setNum ] = useState(0)
  
  return (
    <section id="features" className="px-6 py-12">
      <div className="container mx-auto">
        {/* feature header */}
        <h2 className="text-black font-bold text-4xl text-center mb-6">Features</h2>
        <p className="text-md max-w-md mx-auto text-gray-400 font-medium text-center mb-16">
        Our aim is to make it quick and easy for you to access your favourite websites. Your bookmarks sync between your devices so you can access them on the go.
        </p>
        {/* features content */}
        <div className="flex flex-col">
          {/* content headers */}
          <div className="flex flex-col space-y-6 items-center md:flex-row md:justify-between md:border-b-2 md:border-gray-200   md:space-x-6 lg:space-x-20  font-medium mx-6 md:mx-20 lg:mx-auto text-gray-800 md:space-y-0 features">
            <div className="w-full md:w-auto border-b-2 border-gray-200 md:border-0 text-center">
              <button type="button" className={num === 0 ? "active pb-6 capitalize outline-none cursor-pointer hover:text-softRed" : 'pb-6 capitalize outline-none cursor-pointer hover:text-softRed' } onClick={()=>setNum(0)}>simple bookmarking</button>
            </div>
            <div className="w-full md:w-auto border-b-2 border-gray-200 md:border-0 text-center">
              <button type="button" className={num === 1 ? "active pb-6 capitalize outline-none cursor-pointer hover:text-softRed" : 'pb-6 capitalize outline-none cursor-pointer hover:text-softRed' } onClick={()=> setNum(1)}>Speedy searching</button>
            </div>
            <div className="w-full md:w-auto border-b-2 border-gray-200 md:border-0 text-center">
              <button type="button" className={num === 2 ? "active pb-6 capitalize outline-none cursor-pointer hover:text-softRed" : 'pb-6 capitalize outline-none cursor-pointer hover:text-softRed' } onClick={()=>setNum(2)}>Easy Sharing</button>
            </div>
            
          </div>
          {/* content */}
          <Feature image={features[num].image} header={features[num].header} content={features[num].content} />

        </div>

      </div>
    </section>
  )
}

import React, { useState } from 'react'
import arrowUp from '../images/icon-arrow.svg'

export default function FAQ() {

  function toggleDetail(e){

    if(e.target.id === "title"){
      e.target.parentNode.parentNode.firstChild.nextSibling.classList.toggle("hidden")
    } 
    else if(e.target.id === "icon") {
      e.target.parentNode.parentNode.parentNode.firstChild.nextSibling.classList.toggle("hidden")
    }
    else {
      e.target.parentNode.children[1].classList.toggle('hidden')
    }    
    
  }

  return (
    <section id="faq" className="px-6 py-16">
      <div className="max-w 4xl mx-auto">
        {/* section header */}
        <h2 className="text-black text-3xl font-bold md:text-4xl text-center mb-6">Frequently Asked Questions</h2>
        <p className="text-md max-w-md mx-auto font-medium text-center mb-16">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>

        {/* questions box */}
        <div className="max-w-md md:max-w-2xl mx-auto divide-y">

          {/* question 1 */}
          <div className="group text-gray-500 py-4" onClick={(e)=>
              toggleDetail(e)
             }>
            <div className="group flex items-center justify-between hover:cursor-pointer">
              <h5 className="group-hover:text-softRed" id='title'>What is Bookmark?</h5>
              <div className="group-focus:-rotate-180 transition duration-500 ease group-focus:text-red-500" id='icon'>
                <img src={arrowUp} alt="" className=""  />
              </div>
            </div>
            
            <p className='mt-4 hidden' id="detail">Call me, my name is Clement Ojigs. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>
          </div>

          {/* question 2 */}
          <div className="group text-gray-500 py-4" onClick={(e)=>
              toggleDetail(e)
             }>
            <div className="group flex items-center justify-between hover:cursor-pointer">
              <h5 className="group-hover:text-softRed" id='title'>How can i request a new browser?</h5>
              <div className="group-focus:-rotate-180 transition duration-500 ease group-focus:text-red-500" id='icon'>
                <img src={arrowUp} alt="" className=""  />
              </div>
            </div>
            
            <p className='mt-4 hidden' id="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>
          </div>

          {/* question 3 */}
          <div className="group text-gray-500 py-4" onClick={(e)=>
              toggleDetail(e)
             }>
            <div className="group flex items-center justify-between hover:cursor-pointer">
              <h5 className="group-hover:text-softRed" id='title'>Is there a mobile app?</h5>
              <div className="group-focus:-rotate-180 transition duration-500 ease group-focus:text-red-500" id='icon'>
                <img src={arrowUp} alt="" className=""  />
              </div>
            </div>
            
            <p className='mt-4 hidden' id="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>
          </div>

          {/* question 4 */}
          <div className="group text-gray-500 py-4" onClick={(e)=>
              toggleDetail(e)
             }>
            <div className="group flex items-center justify-between hover:cursor-pointer">
              <h5 className="group-hover:text-softRed" id='title'>What about other Chromium browsers?</h5>
              <div className="group-focus:-rotate-180 transition duration-500 ease group-focus:text-red-500" id='icon'>
                <img src={arrowUp} alt="" className=""  />
              </div>
            </div>
            
            <p className='mt-4 hidden' id="detail">Lorem ipsum dolor sit amet consectetur adipisicing elit. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>
          </div>

        </div>

      </div>
    </section>
  )
}

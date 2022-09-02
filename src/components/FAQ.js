import React, { useState } from 'react'
import arrowUp from '../images/icon-arrow.svg'

export default function FAQ() {

  return (
    <section id="faq" className="px-6 py-16">
      <div className="max-w 4xl mx-auto">
        {/* section header */}
        <h2 className="text-black text-3xl font-bold md:text-4xl text-center mb-6">Frequently Asked Questions</h2>
        <p className="text-md max-w-md mx-auto font-medium text-center mb-16">Here are some of our FAQs. If you have any other questions you'd like answered please feel free to email us.</p>

        {/* questions box */}
        <div className="max-w-md md:max-w-2xl mx-auto">

        {/* Question tab 1 */}
        <div class="py-1 border-b outline-none group" tabindex="1">
          {/* Tab Flex Container */}
          <div class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer ease group">
            {/* tab title */}
            <div class="transition duration-500 ease group-hover:text-red-500">What is Bookmark?</div>
            {/* Arrow */}
            <div class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </div> 
          </div>

          {/* Tab Inner Content */}
          <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p class="py-2 text-justify text-gray-400">Call me, my name is Clement Ojigs. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>
          </div>
          
        </div>

        {/* Question tab 2 */}
        <div class="py-1 border-b outline-none group" tabindex="2">
          {/* Tab Flex Container */}
          <div class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer ease group">
            {/* tab title */}
            <div class="transition duration-500 ease group-hover:text-red-500">How can I request a new browser?</div>
            {/* Arrow */}
            <div class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </div> 
          </div>

          {/* Tab Inner Content */}
          <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p class="py-2 text-justify text-gray-400">Call me, my name is Clement Ojigs. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>
          </div>
          
        </div>

        {/* Question tab 3 */}
        <div class="py-1 border-b outline-none group" tabindex="3">
          {/* Tab Flex Container */}
          <div class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer ease group">
            {/* tab title */}
            <div class="transition duration-500 ease group-hover:text-red-500">Is ther a mobile app?</div>
            {/* Arrow */}
            <div class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </div> 
          </div>

          {/* Tab Inner Content */}
          <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p class="py-2 text-justify text-gray-400">Call me, my name is Clement Ojigs. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>
          </div>
          
        </div>

        {/* Question tab 4 */}
        <div class="py-1 border-b outline-none group" tabindex="4">
          {/* Tab Flex Container */}
          <div class="flex items-center justify-between py-3 text-gray-500 transition duration-500 cursor-pointer ease group">
            {/* tab title */}
            <div class="transition duration-500 ease group-hover:text-red-500">What about other Chromium browsers?</div>
            {/* Arrow */}
            <div class="transition duration-500 ease group-focus:-rotate-180 group-focus:text-red-500">
              <svg xmlns="http://www.w3.org/2000/svg" width="18" height="12">
                <path
                  fill="none"
                  stroke="currentColor"
                  stroke-width="3"
                  d="M1 1l8 8 8-8"
                />
              </svg>
            </div> 
          </div>

          {/* Tab Inner Content */}
          <div class="overflow-hidden transition duration-500 group-focus:max-h-screen max-h-0 ease">
            <p class="py-2 text-justify text-gray-400">Call me, my name is Clement Ojigs. Fugiat, repellat amet doloribus consequuntur eos similique provident tempora voluptates iure quia fuga dicta voluptatibus culpa mollitia recusandae delectus id suscipit labore?</p>
          </div>
          
        </div>


        </div>

      </div>
    </section>
  )
}

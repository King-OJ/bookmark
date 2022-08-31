import React from 'react'
import img1 from '../images/logo-chrome.svg'
import img2 from '../images/logo-firefox.svg'
import img3 from '../images/logo-opera.svg'

import Extension from './Extension'

export default function Extensions() {
  return (
    <section id="download" className="px-6 py-12">
      <div className="mx-6 text-center mb-16">
        {/* feature header */}
        <h2 className="text-black text-3xl font-bold md:text-4xl text-center mb-6">Download the extension</h2>
        <p className="text-md max-w-md mx-auto text-gray-400 font-medium text-center mb-20">
        We've got more browsers in the pipeline. Please do let us know if you've got a favourite you'd like us to prioritize.
        </p>
        {/* extensions container */}
        <div className="flex flex-col space-y-8 md:flex-row md:space-y-0 md:space-x-4 max-w-4xl mx-auto">
          <Extension image={img1} title="Add to Chrome" desc="Minimum Version 62" btn_text="Add & Install Extension"/>
          <Extension image={img2} title="Add to Firefox" desc="Minimum Version 55" btn_text="Add & Install Extension"/>
          <Extension image={img3} title="Add to Opera" desc="Minimum Version 46" btn_text="Add & Install Extension"/>
        </div>
      </div>
    </section>
  )
}

// import React from 'react'
import { assets } from '../assets/assets.js'
import { Star } from 'lucide-react';
import { SignIn } from '@clerk/react'

const login = () => {
  return (
    <div className="min-h-screen flex flex-col md:flex-row" style={{ backgroundImage: `url(${assets.bgImage})`, backgroundSize: 'cover', backgroundPosition: 'center', backgroundRepeat: 'no-repeat', backgroundAttachment: 'fixed' }}>
      <div className="flex-1 flex flex-col items-start justify-between p-6 md:p-10 lg:pl-40">
        <img src={ assets.logo } alt="logo icon" className='h-12 object-contain' />

        <div className="flex-1 flex flex-col items-start justify-center p-6 md:p-10 lg:pr-40">
          <div className="flex items-center gap-3 mb-4 max-md:mt10">
            <img src={ assets.group_users } alt="logo" className='h-8 object-contain' />
            <div>
              <div className='flex'>
                {Array(5).fill(0).map((_, i) => (<Star key={i} className="size-4 md:size-4.5 text-transparent fill-amber-500" />))}
              </div>
              <p>Used by 12K developers</p>
            </div>
          </div>
          <h1 className='text-3xl md:text-6xl md:pd-2 font-bold bg-gradient-to-r from-indigo-950 to-indigo-800 bg-clip-text text-transparent'>Join the Future of More than just friends connect</h1>
          <p className='text-xl md:text-3xl text-indigo-900 max-w-72 md:max-w-md'>Experience the next generation of AI-Powered conversations with our cutting-edge platform.</p>
        </div>
      <span className='md:h-10'></span>
      <div className='flex-1 flex items-center justify-center p-6 sm:p-10'>
       <SignIn />
      </div>
      </div>
    </div>
  )
}

export default login;

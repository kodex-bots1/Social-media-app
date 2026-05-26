// import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';
import Menuitems from './Menuitems';
import { CirclePlus } from 'lucide-react';
import { Link } from 'react-router-dom';

const sidebar = ({sidebarOpen, setSidebarOpen}) => {

    const navigate = useNavigate()
  return (
    <div className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col justify-between item-center max-sm:aboslute top-0 left-0 bottom-0-20 ${sidebarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>

        <div className="w-full">
            <img onClick={()=> navigate('/')} src={assets.logo} alt="icon-logo" className='w-26 ml-7 my-2 cursor-pointer' />
            <hr className='border-gray-300 mb-8' />

            <Menuitems setSidebarOpen={setSidebarOpen} />

            <Link to='/create-post' className='flex items-center justify-center gap-2 py-2.5 mt-6 mx-4 rounded-lg bg-gradient-to-r from-indigo-950 to-indigo-800 to-purple-500 hover:from-indigo-700 hover:to-purple-700 text-white active:scale-95 transition cursor-pointer'>
              <CirclePlus className='w-10 h-10' />
              Create Post
            </Link>
        </div>

    </div>
  )
}

export default sidebar;

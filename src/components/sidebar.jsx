import React from 'react'
import { assets } from '../assets/assets';
import { useNavigate } from 'react-router-dom';

const sidebar = ({sidebarOpen}) => {

    const navigate = useNavigate();
  return (
    <div className={`w-60 xl:w-72 bg-white border-r border-gray-200 flex flex-col justify-between item-center max-sm:aboslute top-0 left-0 bottom-0-20 ${sidebarOpen ? 'translate-x-0' : 'max-sm:-translate-x-full'} transition-all duration-300 ease-in-out`}>

        <div className="w-full">
            <img onClick={()=> navigate('/')} src={assets.logo} alt="icon-logo" className='w-26 ml-7 my-2 cursor-pointer' />
            <hr className='border-gray-300 mb-8' />

        </div>

    </div>
  )
}

export default sidebar;

import Image from 'next/image'
import React from 'react'
import {
    BellIcon,
    ChatBubbleBottomCenterIcon,
    ChevronDownIcon,
    HomeIcon,
    UserGroupIcon,
    ViewColumnsIcon,
} from '@heroicons/react/24/solid'
import {
    FlagIcon,
    PlayIcon,
    MagnifyingGlassIcon,
    ShoppingCartIcon
} from '@heroicons/react/24/outline'
import HeadeIcon from './HeadeIcon'


function Header() {
  return (
    <div className='sticky top-0 z-50 bg-white flex items-center
        p-2 lg:px-5 shadow-md justify-between
    '>
        {/* Left */}
        <div className='flex items-center'>
            <Image 
                src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg" 
                width={40} 
                height={40}
            />
            <div className='flex ml-2 items-center rounded-full bg-gray-100 p-2'>
                <MagnifyingGlassIcon className='h-6 text-gray-600'/>
                <input 
                    className='hidden md:inline-flex ml-2 items-center bg-transparent outline-none placeholder-gray-500 flex-shrink' 
                    type="text" 
                    placeholder='Search Facebook'
                />
            </div>
        </div>

        {/* Center */}
        <div className='flex justify-center flex-grow-1'>
            <div className='flex space-x-6 md:space-x-2'>
                <HeadeIcon active Icon={HomeIcon}/>
                <HeadeIcon Icon={FlagIcon}/>
                <HeadeIcon Icon={PlayIcon}/>
                <HeadeIcon Icon={ShoppingCartIcon}/>
                <HeadeIcon Icon={UserGroupIcon}/>
            </div>
        </div>

        {/* Right */}
        <div className='flex items-center sm:space-x-2 justify-end'>
            {/* Profile pic */}
            <p className='whitespace-nowrap font-semibold pr-3'>George Kolesnikov</p>
            <ViewColumnsIcon className='icon'/>
            <ChatBubbleBottomCenterIcon className='icon'/>
            <BellIcon className='icon'/>
            <ChevronDownIcon className='icon'/>
        </div>

    </div>    
  )
}

export default Header
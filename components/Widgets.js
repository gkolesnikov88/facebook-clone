import React from 'react'

import {
    VideoCameraIcon, EllipsisHorizontalIcon
} from '@heroicons/react/24/solid'
import {
    MagnifyingGlassIcon
} from '@heroicons/react/24/outline'

// Mock data
const contacts = [
    {
        name: 'Bill Gates',
        src: 'https://scontent.fayt2-3.fna.fbcdn.net/v/t39.30808-6/404309105_916787023145564_8821763138561689622_n.jpg?_nc_cat=1&ccb=1-7&_nc_sid=5f2048&_nc_ohc=YCLDojzjoaYAX8JEkDW&_nc_ht=scontent.fayt2-3.fna&oh=00_AfCwZ_oqG8nJSLMJCoTsfbrcknGGPYCkMgIkKPMjLo4Uaw&oe=65666ABF'
    },
    {
        name: 'Elon Musk',
        src: 'https://scontent.fayt2-1.fna.fbcdn.net/v/t39.30808-6/382455245_122095695560060878_796991074110125711_n.jpg?_nc_cat=111&ccb=1-7&_nc_sid=5f2048&_nc_ohc=Nwl6o_8zycoAX9cAIjH&_nc_ht=scontent.fayt2-1.fna&oh=00_AfAo068gVXzVQ6JjCsYVcGuWDr6m8KKR2ltY793R3kV-Kw&oe=65669937'
    },
]

function Widgets() {
  return (
    <div className='hidden lg:flex flex-col w-60 p-2 mt-5'>
        <div className='flex justify-between items-center text-gray-500 mb-5'>
            <h2 className='text-xl'>Contacts</h2>
            <div className='flex space-x-2'>
                <VideoCameraIcon className='h-6'/>
                <MagnifyingGlassIcon className='h-6'/>
                <EllipsisHorizontalIcon className='h-6'/>
            </div>
        </div>
    </div>
  )
}

export default Widgets
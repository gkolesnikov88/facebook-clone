import Image from 'next/image'
import React from 'react'
import {
    ChatBubbleBottomCenterIcon, ShareIcon, HandThumbUpIcon
} from '@heroicons/react/24/outline'

function Post({
    name, email, postImage,
    message, image, timestamp
}) {
  return (
    <div className='flex flex-col'>
        <div className='p-5 bg-white mt-5 rounded-t-2xl shadow-sm'>
            <div className='flex items-center space-x-2'>
                <img 
                    className='rounded-full '
                    src={image} width={40} height={40}
                />
                <div>
                    <p className='font-medium'>{name}</p>
                    <p className='text-xs text-gray-400'>
                        {new Date(timestamp?.toDate()).toLocaleString()}
                    </p>
                </div>
            </div>
            <p className='pt-4'>{message}</p>    
        </div>

        {postImage &&
            <div className='relative h-57 md:h-96 bg-white'>
                <Image 
                    className="object-cover" 
                    src={postImage}
                    fill={true}
                />
            </div>
        }

        <div className='flex justify-between items-center rounded-b-2xl bg-white
            shadow-md text-gray-400 border-t'>
            <div className='inputIcon rounded-none rounded-bl-2xl'>
                <HandThumbUpIcon className='h-4' />
                <p className='text-xs sm:text-base'>Like</p>      
            </div>
            <div className='inputIcon rounded-none'>
                <ChatBubbleBottomCenterIcon className='h-4' />
                <p className='text-xs sm:text-base'>Comment</p> 
            </div>
            <div className='inputIcon rounded-none rounded-br-2xl'>
                <ShareIcon className='h-4' />
                <p className='text-xs sm:text-base'>Share</p> 
            </div>
        </div>    
    </div>
  )
}

export default Post
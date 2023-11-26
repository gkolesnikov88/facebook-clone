import { useSession } from 'next-auth/react'
import React, { useRef } from 'react'
import {
    CameraIcon, VideoCameraIcon
} from '@heroicons/react/24/solid'
import {
    FlagIcon
} from '@heroicons/react/24/outline'
import { collection, addDoc, serverTimestamp } from "firebase/firestore"; 

import { db } from '@/firebase';

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  
  const sendPost = async (e) => {
    e.preventDefault();

    if (inputRef.current.value) {
        try {
            const docRef = await addDoc(collection(db, "posts"), {
                message: inputRef.current.value,
                name: session.user.name,
                email: session.user.email,
                image: session.user.image,
                timestap: serverTimestamp(),
            });
            console.log("Document written with ID: ", docRef.id);
            inputRef.current.value = '';
        } catch (e) {
            console.error("Error adding document: ", e);
        }
    }
  }

  return (
    <div className='bg-white p-2 rounded-2xl shadow-md 
        text-gray-500 font-medium mt-6'>
        <div className='flex space-x-4 p-4 items-center'>
            <img 
                className='rounded-full'
                src={session.user.image}
                width={40}
                height={40}
            />
            <form className='flex flex-1'>
                <input 
                    ref={inputRef}
                    type='text' 
                    placeholder={`What's on your mind, ${session.user.name}`}
                    className='rounded-full h-12 bg-gray-100 flex-grow px-5
                    focus:outline-none'    
                />
                <button type='submit' hidden onClick={sendPost}>Submit</button>
            </form>    
        </div>
        <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500'/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Live Video
                </p>
            </div>

            <div className='inputIcon'>
                <CameraIcon className='h-7 text-green-400'/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Photo/video
                </p>
            </div>

            <div className='inputIcon'>
                <FlagIcon className='h-7 text-blue-500'/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Life Event
                </p>
            </div>    
        </div>                    
    </div>
  )
}

export default InputBox
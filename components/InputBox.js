import { useSession } from 'next-auth/react'
import React, { useRef, useState } from 'react'
import {
    CameraIcon, VideoCameraIcon
} from '@heroicons/react/24/solid'
import {
    FlagIcon
} from '@heroicons/react/24/outline'
import { collection, doc, addDoc, updateDoc, serverTimestamp } from "firebase/firestore"; 
import { ref, uploadString, getDownloadURL } from "firebase/storage";

import { db, storage } from '@/firebase';

function InputBox() {
  const { data: session } = useSession();
  const inputRef = useRef(null);
  const filePickerRef = useRef(null);
  const [imageToPost, setImageToPost] = useState(null);
  
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
              // Save a post image
              if (imageToPost) {
                  const storageRef = ref(storage, `posts/${docRef.id}`);
                  uploadString(
                      storageRef,
                      imageToPost
                  ).then((snapshot) => {
                    // Handle successful uploads on complete
                    console.log("Uploaded a base64 string!");
                    removeImage();

                    getDownloadURL(snapshot.ref).then(
                        async (downloadURL) => {
                            console.log("File available at", downloadURL);
                            const savedDocRef = doc(db, "posts", docRef.id);

                            await updateDoc(savedDocRef, {
                                postImage: downloadURL,
                            });
                        }
                    );
                  }).catch((error) => {
                    // Handle unsuccessful uploads
                    console.error("Upload failed: ", error);
                });
              }
              inputRef.current.value = "";
          } catch (e) {
              console.error("Error adding document: ", e);
          }
      }
  }

  const addImageToPost = (e) => {
    const reader = new FileReader();
    if(e.target.files[0]) {
        reader.readAsDataURL(e.target.files[0]);
    }

    reader.onload = (readerEvent) => {
        setImageToPost(readerEvent.target.result);
    }
  }

  const removeImage = () => {
    setImageToPost(null);
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

            {imageToPost && (
                <div onClick={removeImage} className='flex flex-col filter hover:brightness-110
                    transition duration-150 hover:scale-105 cursor-pointer'>
                    <img className='h-10 object-contain' 
                        src={imageToPost} alt='New post image'/>
                    <p className='text-xs text-red-500 text-center'>Remove</p>
                </div>
            )}    
        </div>
        <div className='flex justify-evenly p-3 border-t'>
            <div className='inputIcon'>
                <VideoCameraIcon className='h-7 text-red-500'/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Live Video
                </p>
            </div>

            <div onClick={() => {
                    filePickerRef.current.click()}
                } className='inputIcon'
            >
                <CameraIcon className='h-7 text-green-400'/>
                <p className='text-xs sm:text-sm xl:text-base'>
                    Photo/video
                </p>
                <input ref={filePickerRef} onChange={addImageToPost} type='file' hidden/>
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
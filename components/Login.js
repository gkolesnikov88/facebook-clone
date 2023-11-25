import Image from 'next/image'
import { signIn } from 'next-auth/react'

function Login() {
  return (
    <div className='grid place-items-center'>
        <Image
            src="https://upload.wikimedia.org/wikipedia/commons/b/b8/2021_Facebook_icon.svg"
            height={200}
            width={200}
            objectFit='contain'
            className='p-10'
        />
        <h1 
            onClick={signIn}
            className="p-5 bg-blue-500 rounded-full
            text-white text-center cursor-pointer">
                Login with Facebook
        </h1>  
    </div>
  )
}

export default Login
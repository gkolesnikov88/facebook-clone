import Header from '@/components/Header'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar';
import { getSession } from 'next-auth/react'
import Head from 'next/head'

export default function Home({session}) {
  if(!session) return <Login/>;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>      
      
      {/* HEADER  */}
      <Header />

      <main className='flex'>
        {/* Sidebar */}
        <Sidebar/>

        {/* Fedd */}
        {/* Widgets */}

      </main>
    </div>
  )
}

// next ssr request
export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  return {
    props: {
      session
    }
  }
}

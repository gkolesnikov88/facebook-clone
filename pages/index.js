import Header from '@/components/Header'
import Login from '@/components/Login'
import { getSession } from 'next-auth/react'
import Head from 'next/head'

export default function Home({session}) {
  if(!session) return <Login/>;
  return (
    <>
      <Head>
        <title>Facebook</title>
      </Head>      
      
      {/* HEADER  */}
      <Header />

      <main>
        {/* Sidebar */}
        {/* Fedd */}
        {/* Widgets */}

      </main>
    </>
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

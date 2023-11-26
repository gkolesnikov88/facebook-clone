import Feed from '@/components/Feed';
import Header from '@/components/Header'
import Login from '@/components/Login'
import Sidebar from '@/components/Sidebar';
import Widgets from '@/components/Widgets';
import { db } from '@/firebase';
import { collection, query, orderBy, getDocs } from 'firebase/firestore';
import { getSession } from 'next-auth/react'
import Head from 'next/head'

export default function Home({session, posts}) {
  if(!session) return <Login/>;
  return (
    <div className='h-screen bg-gray-100 overflow-hidden'>
      <Head>
        <title>Facebook</title>
      </Head>      

      <Header />

      <main className='flex'>
        <Sidebar/>

        <Feed posts={posts}/>

        <Widgets />
      </main>
    </div>
  )
}

// next ssr request
export async function getServerSideProps(context) {
  // Get the user
  const session = await getSession(context);

  // Get posts
  const postsQuery = query(collection(db, "posts"), orderBy("timestamp", "desc"));
  const queryPostsSnapshot = await getDocs(postsQuery);
  
  const posts = [];
  queryPostsSnapshot.forEach((postSnap) => {
    // doc.data() is never undefined for query doc snapshots
    posts.push({
      id: postSnap.id,
      ...postSnap.data(),
      timestamp: null
    });
  });

  return {
    props: {
      session,
      posts
    }
  }
}

import React from 'react'
import { useCollection } from "react-firebase-hooks/firestore"
import { query, collection, orderBy } from 'firebase/firestore';

import { db } from '@/firebase';
import Post from './Post';

function Posts({ posts }) {
  const [ realtimePosts ] = useCollection(
    query(collection(db, 'posts'), orderBy("timestamp", "desc"))
  );

  return (
    <div>
        {realtimePosts ? 
          realtimePosts?.docs.map(post => (
            <Post 
                key={post.id}
                name={post.data().name}
                email={post.data().email}
                message={post.data().message}
                timestamp={post.data().timestamp}
                image={post.data().image}
                postImage={post.data().postImage}
            />
        )) : (
          posts.map(post => (
            <Post 
                key={post.id}
                name={post.name}
                email={post.email}
                message={post.message}
                timestamp={post.timestamp}
                image={post.image}
                postImage={post.postImage}
            />
        ))
        )}
    </div>
  )
}

export default Posts
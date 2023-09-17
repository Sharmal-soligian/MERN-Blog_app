import React, { useEffect, useState } from 'react'
import Post from '../Post';
import { environment } from '../../environment/environment';

const apiUrl = environment.base_Url;

const Home = () => {

  const [posts, setPosts] = useState([]);

  useEffect(() => {
    fetch(`${apiUrl}/posts`).then(res => {
      res.json().then(posts => {
        setPosts(posts);
      })
    })
  }, [])

  return (
    <>
      {posts.length > 0 && posts.map(post => (
        <Post { ...post } />
      ))}
    </>
  )
}

export default Home;
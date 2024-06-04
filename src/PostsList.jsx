import { useEffect, useState } from "react";
import Post from "./Post";

function PostsList() {
  const [posts, setPosts] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(function () {
    async function getPosts() {
      try {
        setIsLoading(true);
        const res = await fetch(`https://jsonplaceholder.typicode.com/posts`);
        const data = await res.json();
        setPosts(data)
      } catch (err) {
        console.log(err);
      }
      finally{
        setIsLoading(false)
      }
    }
    getPosts()
  }, []);
  return <div style={{margin:"0",padding:"0"}} className="row g-3">
    {posts.map((post,i)=><Post post={post} key={i}/>)}
  </div>;
}

export default PostsList;

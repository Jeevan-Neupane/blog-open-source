import { useEffect, useState } from "react";
import React from "react";
import service from "../appwrite/config";
import { PostsContainers } from "../style/containers";
import Blog from "../components/blog/Blog";

function PostsPage() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    service.getPosts().then((data) => {
      if (data) {
        setPosts(data);
      }
    });
  }, []);

  console.log(posts.documents);

  return (
    <PostsContainers>
      <p className='total'>Total Posts:{posts?.total}</p>

      <div className='post'>
        {posts?.documents?.map((post) => {
          return (
            <Blog
              post={post}
              key={post.$id}
            />
          );
        })}
      </div>
    </PostsContainers>
  );
}

export default PostsPage;

import { useEffect, useState } from "react";
import React from "react";
import service from "../appwrite/config";
import { PostsContainers } from "../style/containers";
import Blog from "../components/blog/Blog";
import LoadingScreen from "../components/loading/LoadingScreen";

function PostsPage() {
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    service.getPosts().then((data) => {
      if (data) {
        setPosts(data);
        setLoading(false);
      }
    });
  }, []);

  if (loading) {
    return (
      <PostsContainers>
        <LoadingScreen />
      </PostsContainers>
    );
  }
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

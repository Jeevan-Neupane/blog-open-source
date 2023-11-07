import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import service from "../appwrite/config";
import { SingleBlogMainContainer } from "../style/containers";
import SingleBlog from "../components/singleBlog/SingleBlog";

function SingleBlogPage() {
  const [singlePost, setSinglePost] = useState(null);
  const { slug } = useParams();

  useEffect(() => {
    service.getPost(slug).then((post) => {
      setSinglePost(post);
    });
  }, []);

  if (!singlePost) {
    return (
      <SingleBlogMainContainer>
        <h1>Loading...</h1>
      </SingleBlogMainContainer>
    );
  }
  return (
    <SingleBlogMainContainer>
      <SingleBlog post={singlePost} />
    </SingleBlogMainContainer>
  );
}

export default SingleBlogPage;


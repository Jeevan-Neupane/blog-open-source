import React, { useEffect, useState } from "react";
import { EditBlogMain } from "../style/containers";
import { useNavigate, useParams } from "react-router-dom";
import service from "../appwrite/config";
import BlogForm from "../components/form/Form";

function EditBlogPage() {
  const [post, setPost] = useState(null);
  const { slug } = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    if (slug) {
      service.getPost(slug).then((post) => {
        setPost(post);
      });
    } else {
      navigate("/");
    }
  }, [slug, navigate]);

  return post ? (
    <EditBlogMain>
      <BlogForm post={post} />
    </EditBlogMain>
  ) : null;
}

export default EditBlogPage;

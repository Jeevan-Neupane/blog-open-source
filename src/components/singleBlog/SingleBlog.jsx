import React from "react";
import {
  ButtonDiv,
  CreatedAt,
  DeleteButton,
  Description,
  EditButton,
  ImageDiv,
  Img,
  SingleBlogDiv,
  Title,
  UpdatedAt,
} from "./style";
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";

function SingleBlog({ post }) {
  
  const navigate = useNavigate();
  const onDeleteButtonClick = () => {
    service.deletePost(post.$id).then((status) => {
      if (status) {
        service.deleteImage(post.featureImage);
        navigate("/blogs");
      }
    });
  };
  return (
    <SingleBlogDiv>
      <Title>{post?.title}</Title>
      <ImageDiv>
        <Img src={service.getFilePreview(post?.featureImage)} />
      </ImageDiv>

      <Description>{post?.description}</Description>
      <CreatedAt>
        <span>Created At:</span> {post?.$createdAt.slice(0, 10)}
      </CreatedAt>
      <UpdatedAt>
        <span>Updated At</span> {post?.$updatedAt.slice(0, 10)}
      </UpdatedAt>
      <ButtonDiv>
        <EditButton to={`/edit/${post.$id}`}>Edit Post</EditButton>
        <DeleteButton onClick={onDeleteButtonClick}>Delete Post</DeleteButton>
      </ButtonDiv>
    </SingleBlogDiv>
  );
}

export default SingleBlog;

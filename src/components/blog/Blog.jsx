import React from "react";
import { Container, Description, Heading, ImageDiv, Img } from "./style";
import service from "../../appwrite/config";

function Blog({ post }) {
  let description = post.description.slice(0, 10);
  return (
    <Container to={post.$id}>
      <Heading>{post.title}</Heading>
      <ImageDiv>
        <Img src={service.getFilePreview(post.featureImage)} />
      </ImageDiv>

      <Description>
        {description}....... <span>read more</span>
      </Description>
    </Container>
  );
}

export default Blog;

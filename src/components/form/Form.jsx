import React, { useEffect, useState } from "react";
import { useForm } from "react-hook-form";
import {
  FormWrapper,
  InputWrapper,
  Label,
  Button,
  Input,
  TextArea,
  SlugInput,
  ImageDiv,
  Img,
} from "./style";
import service from "../../appwrite/config";
import { useNavigate } from "react-router-dom";

const BlogForm = ({ post }) => {
  const { handleSubmit, register, setValue, getValues, watch, formState } =
    useForm({
      defaultValues: {
        title: post?.title || "",
        description: post?.description || "",
        slug: post?.$id || "",
      },
    });
  const { errors } = formState;
  const navigate = useNavigate();

  const onSubmit = async (data) => {
    if (post) {
      const file = data.image[0]
        ? await service.uploadImage(data.image[0])
        : null;

      if (file) {
        await service.deleteImage(post.featureImage);
      }
      const updatePost = await service.updatePost(post.$id, {
        ...data,
        featureImage: file ? file.$id : post.featureImage,
      });
      if (updatePost) {
        navigate(`/blogs/${post.$id}`);
      }
    } else {
      const file = await service.uploadImage(data.image[0]);
      if (file) {
        const imageId = file.$id;
        data.featureImage = imageId;
        const dbPost = await service.createPost({ ...data });

        if (dbPost) {
          navigate("/blogs");
        }
      }
    }
  };

  const slugTransform = (value) => {
    if (value && typeof value === "string") {
      return value
        .trim()
        .toLowerCase()
        .replace(/[^a-zA-Z\d\s]+/g, "-")
        .replace(/\s/g, "-");
    }
    return "";
  };

  useEffect(() => {
    const subscription = watch((value, { name }) => {
      if (name === "title") {
        setValue("slug", slugTransform(value.title), { shouldValidate: true });
      }
    });
    return () => subscription.unsubscribe();
  }, [watch, slugTransform, setValue]);

  return (
    <FormWrapper onSubmit={handleSubmit(onSubmit)}>
      <InputWrapper>
        <Label>Title:</Label>
        <Input {...register("title", { required: "Title is required" })} />
        <Label>Slug</Label>
        <Input
          {...register("slug", { required: true })}
          onInput={(e) => {
            setValue("slug", slugTransform(e.currentTarget.value), {
              shouldValidate: true,
            });
          }}
          readOnly
        />
        {errors.title && <span>{errors.title.message}</span>}
      </InputWrapper>

      <InputWrapper>
        <Label>description:</Label>
        <TextArea
          {...register("description", { required: "description is required" })}
        />
        {errors.description && <span>{errors.description.message}</span>}
      </InputWrapper>

      <InputWrapper>
        <Label>Image:</Label>
        <Input
          {...register("image", {
            required: !post ? "Please image is needed" : false,
          })}
          type='file'
          accept='image/*'
        />
        {errors.image && <span>{errors.image.message}</span>}
      </InputWrapper>

      {post?.featureImage ? (
        <ImageDiv>
          <Img src={service.getFilePreview(post.featureImage)} />
        </ImageDiv>
      ) : null}
      <Button type='submit'>{post ? "Edit" : "Post"}</Button>
    </FormWrapper>
  );
};

export default BlogForm;

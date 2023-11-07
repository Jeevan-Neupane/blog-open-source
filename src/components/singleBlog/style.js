import { Link } from "react-router-dom";
import styled from "styled-components";

export const SingleBlogDiv = styled.div`
background-color:${props => props.theme.components};
padding:2rem;
width:50rem;
`

export const Title = styled.h3`
font-size:3rem;
margin-bottom:1rem;
`

export const ImageDiv = styled.div`
height:40rem;

display: flex;
align-items:center;
justify-content:center;
background-color:green;
`

export const Img = styled.img`
width:100%;
height:100%;
`


export const Description = styled.p`
font-size:1.6rem;
margin:1rem 0;
`

export const CreatedAt = styled.p`
font-size:1.6rem;
`
export const UpdatedAt = styled.p`
font-size:1.6rem;

`
export const ButtonDiv = styled.div`
margin-top:2rem;
display: flex;
gap:3rem;
`

export const EditButton = styled(Link)`
outline:none;
border:none;
padding:1rem 2rem;
font-size:1.6rem;
cursor: pointer;
text-decoration:none;
color:inherit;
background-color:${props=>props.theme.button};
`

export const DeleteButton = styled.button`
outline:none;
border:none;
padding:1rem 2rem;
font-size:1.6rem;
background-color:${props=>props.theme.button};
cursor: pointer;
color:inherit;
`

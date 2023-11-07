import { Link } from "react-router-dom";
import styled from "styled-components";


export const Container = styled(Link)`
background-color:${props => props.theme.components};
padding:2rem;
height:30rem;
width:30rem;
display: flex;
flex-direction:column;
align-items: center;
justify-content:center;
color:inherit;
text-decoration:none;

`
export const Heading = styled.h2`
font-size:2rem;
margin-bottom:2rem;
text-decoration:none;
text-align:center;
`

export const ImageDiv = styled.div`
height:20rem;
width:20rem;
`

export const Img = styled.img`
height:100%;
width:100%;

`




export const Description = styled.p`
font-size:1.5rem;
margin-top:2rem;
span{
    color:${props => props.theme.specialTextTwo};
}
`




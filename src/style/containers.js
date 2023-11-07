import styled from "styled-components";

export const WrapperContainer = styled.div`
max-width:1440px;
width:100%;
padding:0rem 2rem;
margin:0 auto;

`
export const PostsContainers = styled(WrapperContainer)`

.total{
    text-align:center;
    font-size:2rem;
    margin-bottom:2rem;

}
.post{
    display: flex;
    flex-wrap:wrap;
    gap:2rem;
}
margin-top:2rem;
margin-bottom:2rem;
`
export const SingleBlogMainContainer = styled(WrapperContainer)`
display: flex;
align-items:center;
justify-content:center;
margin:2rem 0;

`

export const EditBlogMain=styled(WrapperContainer)`
`


import styled from "styled-components";

export const FormWrapper = styled.form`
  display: flex;
  flex-direction: column;
  max-width: 400px;
  margin: 0 auto;
  background-color:${props => props.theme.components};
  padding:2rem;
  border-radius:5rem;
  margin-top:2rem;
  margin-bottom:2rem;
`;

export const InputWrapper = styled.div`
  display: flex;
  flex-direction: column;
  margin-bottom: 1rem;
  span{
    color:red;
    display:block;
    margin-top:.5rem;
  }
`;

export const Label = styled.label`
  font-weight: bold;
  margin: 1rem 0;
  font-size:2rem;

`;

export const Input = styled.input`
  padding: 0.5rem;
  font-size: 1rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  font-size:1.6rem;
  `;

export const TextArea = styled.textarea`
font-size:1.6rem;
  padding: 0.5rem;
  border: 1px solid #ccc;
  border-radius: 4px;
  height:20rem;
`;

export const Button = styled.button`
  background-color: #007bff;
  color: white;
  padding: 0.5rem 1rem;
  border: none;
  border-radius: 4px;
  cursor: pointer;
`;

export const SlugInput = styled.input``

export const ImageDiv=styled.div`
height:20rem;
margin-top:2rem;
margin-bottom:2rem;
`

export const Img=styled.img`
height:100%;
width:100%;
`
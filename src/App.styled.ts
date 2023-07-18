import styled from "styled-components";

export const FormContainer = styled.div`
  background-color: #1e1e1e;
  color: #ffffff;
  padding: 20px;
  border-radius: 5px;
  max-width: 400px;
  margin: 0 auto;
`;

export const Form = styled.form`
  display: flex;
  flex-direction: column;
`;

export const Input = styled.input`
  background-color: #2d2d2d;
  color: #ffffff;
  border: none;
  border-radius: 3px;
  padding: 10px;
  margin-bottom: 10px;
`;

export const Label = styled.label`
  color: #ffffff;
`;

export const StyledLink = styled.a`
  color: #ffffff;
  text-decoration: underline;
  margin-bottom: 10px;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    text-decoration: underline;
  }
`;

export const Button = styled.button`
  background-color: ${(prop) => prop.bgColor};
  border-radius: 5px;
  color: white;
  border: none;
  padding: 10px;
  cursor: pointer;
  &:hover {
    background-color: ${(prop) => prop.bgColor};
    opacity: 0.8;
  }
`;

export const ImageButton = styled.button`
  background-color: transparent;
  border: 2px solid transparent;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
    border: 2px solid transparent;
    border-bottom: 2px solid ${(prop) => (prop.color ? prop.color : "white")};
  }
`;

export const ErrorMessage = styled.p`
  color: red;
`;

export const CardCollection = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: flex-start;
  margin: 0 auto;
  gap: 10px;
  max-width: 1000px;
`;

export const FakeButton = styled.button`
  background-color: transparent;
  border: none;
  cursor: pointer;
  &:hover {
    opacity: 0.8;
  }
`;

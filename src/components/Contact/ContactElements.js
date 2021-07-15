import styled from "styled-components";

export const FormContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr 1fr;
  gap: 20px;
  max-width: 400px;
  grid-auto-columns: 200px;
`;

export const Input = styled.input`
  height: 35px;
  margin-bottom: 5px;
  background-color: #292929;
  color: white;
  border: none;
  transition: all 0.8s ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 5px solid #51c8cc;
    padding-bottom: 5px;
  }

  &.Input1 {
    width: 200px;
  }
  &.Input2 {
    width: 200px;
  }
  &.Input3 {
    width: 420px;
    grid-column: 1/-1;
  }
`;

export const Textarea = styled.textarea`
  border: none;
  height: 140px;
  width: 420px;
  margin-top: 3px;
  margin-bottom: 10px;
  background-color: #292929;
  grid-column: 1/3;
  justify-self: stretch;
  &::placeholder {
    font-size: 15px;
  }

  transition: all 0.8s ease-in-out;

  &:focus {
    outline: none;
    border-bottom: 5px solid #51c8cc;
    padding-bottom: 5px;
  }
`;

export const AlertSuccess = styled.div`
  background-color: lightgreen;
  color: darkgreen;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 10px;
  width: 400px;
`;

export const AlertError = styled.div`
  background-color: lightyellow;
  color: red;
  height: 30px;
  display: flex;
  align-items: center;
  justify-content: center;
`;

export const ButtonContainer = styled.div`
  margin-left: -10px;
`;

export const LoadingCircle = styled.div`
  display: flex;
  width: 400px;
  justify-content: center;
`;

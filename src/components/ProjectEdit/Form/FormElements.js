import styled from "styled-components";
export const Container = styled.div`
  margin-left: 60px;
  margin-right: 60px;
`;

export const FormContainer = styled.form`
  display: grid;
  gap: 10px;
  grid-template-columns: 1fr 1fr;

  @media screen and (min-width: 800px) {
    margin-left: 200px;
    margin-right: 200px;
  }
`;

export const InputContainer = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
  color: white;
`;

export const Title = styled.h1`
  font-size: 17px;
  color: white;
`;

export const Input = styled.input`
  width: 100%;
  height: 20px;
  color: white;
  background-color: #292929;
`;

export const TextArea = styled.textarea`
  width: 100%;
  grid-column: 1/-1;
  color: white;
  background-color: #292929;
`;

export const SubTitle = styled.h4`
  font-size: 12px;
  color: white;
  text-align: center;
  margin-bottom: 1px;
`;

export const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: flex-end;
`;
export const Button = styled.button`
  border: 1px solid ${(props) => props.color};
  width: 120px;
  height: 50px;
  color: ${(props) => props.color};

  &:hover {
    font-size: 0.8rem;
  }
`;

export const AccessContainer = styled.div`
  display: grid;
  grid-template-columns: 30% 1fr;
  gap: 9px;
  margin-bottom: 10px;
`;

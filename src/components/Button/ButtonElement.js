import styled from "styled-components";

export const ButtonContainer = styled.div`
  position: relative;
  max-width: 200px;
  min-width: 150px;
  flex: 20%;

  & > .Button {
    border: 1px solid ${(props) => props.theme.tertiary};
    transition: all 0.1s ease-in-out;
  }

  &:hover .Button {
    border: 1px solid #202020;
    background-color: ${(props) => props.theme.tertiary};
    font-size: 17px;
    color: #202020;
  }
`;

export const Button = styled.button`
  width: 100%;
  height: 60px;
  position: relative;
  background: transparent;
  text-transform: uppercase;
  color: ${(props) => props.theme.tertiary};
  font-weight: 700;
  letter-spacing: 1px;
  border: none;
  font-size: 15px;
  outline: none;
  font-family: "Lucida Sans Unicode", "Lucida Grande", sans-serif;
  cursor: pointer;
  text-align: center;
`;

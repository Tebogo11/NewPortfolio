import styled from "styled-components";

export const PresentationDiv = styled.div.attrs({
  className: "animate__animated animate__pulse",
})`
  display: grid;
  grid-template-columns: 1fr 1fr;
  transition: all 0.3s ease;

  @media screen and (max-width: 980px) {
    grid-template-columns: 1fr;
    transform: all 0.3s ease;
  }
`;

export const SubTitle = styled.h1`
  font-size: 24px;
  color: ${(props) => props.theme.tertiary};
  text-align: center;
  text-decoration: underline;
`;

export const ImageContainer = styled.div`
  width: 80%;
  height: 80%;
  margin-left: 50px;
  background-color: #292929;
  border-radius: 10px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  transition: all 0.3s ease;
  position: relative;
  cursor: pointer;
  transition: all 0.3s ease;

  &:hover {
    box-shadow: 0px 2px 6px black;
    -ms-transform: scale(1.05, 1.05); /* IE 9 */
    transform: scale(1.05, 1.05); /* Standard syntax */
  }
`;

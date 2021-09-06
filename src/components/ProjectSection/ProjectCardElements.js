import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  gap: 30px;
  margin: 0px;
  padding: 0px;
  justify-items: center;

  @media screen and (max-width: 768px) {
    grid-template-columns: 1fr;
  }

  @media screen and (min-width: 769px) and (max-width: 1130px) {
    grid-template-columns: 1fr;
  }
`;

export const ImageContainer = styled.div`
  width: 540px;
  height: 260px;
  background-color: #292929;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  transition: all 0.3s ease;
  cursor: pointer;
  transition: all 0.3s ease;
  background-image: url(${({ imageUrl }) => imageUrl});
  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;
  &:hover {
    box-shadow: 0px 2px 6px black;
    -ms-transform: scale(1.05, 1.05); /* IE 9 */
    transform: scale(1.05, 1.05); /* Standard syntax */
    border: 1px solid black;
  }

  @media screen and (min-width: 451px) and (max-width: 769px) {
    width: 85%;

    &:hover {
      transform: scale(1.08, 1.08); /* IE 9 */
    }
  }

  @media screen and (max-width: 450px) {
    width: 85%;

    &:hover {
      transform: scale(1.08, 1.08); /* IE 9 */
    }
  }

  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;

  div {
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: #5be0e0;
    height: 30;
    border-radius: 5%;
  }

  h1 {
    display: none;
    font-size: 13px;
    width: 100px;
    text-align: center;
  }

  &:hover h1 {
    color: #040404;
    display: grid;
    font-family: "Merienda", cursive;
  }
`;

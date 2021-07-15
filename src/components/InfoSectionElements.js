import styled from "styled-components";

export const InfoRow = styled.div`
  display: grid;

  grid-template-areas: ${({ imgStart }) =>
    imgStart ? `'col2 col1'` : `'col1 col2'`};

  @media screen and (max-width: 940px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }

  @media screen and (min-height: 1300px) {
    grid-template-areas: ${({ imgStart }) =>
      imgStart ? `'col1' 'col2'` : `'col1 col1' 'col2 col2'`};
  }
`;

export const Column1 = styled.div.attrs({
  className: "animate__animated animate__slideInLeft",
})`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
  max-width: 100%;
`;

export const Column2 = styled.div.attrs({
  className: "animate__animated animate__slideInRight",
})`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const InfoContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
`;

export const Ptag = styled.p`
  font-size: 2px;
  text-align: justify;
  font-family: "Poppins", sans-serif;
  color: white;

  @media screen and (min-width: 831px) {
    font-size: 18px;
    line-height: 30px;
  }

  @media screen and (max-width: 830px) {
    font-size: 18px;
    line-height: 30px;
  }

  @media screen and (max-width: 768px) {
    font-size: 18px;
    line-height: 30px;
  }

  @media screen and (max-width: 540px) {
    font-size: 16px;
    line-height: 30px;
  }

  @media screen and (max-width: 380px) {
    font-size: 15px;
    line-height: 30px;
  }
  @media screen and (max-width: 290px) {
    font-size: 12px;
    line-height: 30px;
  }
`;

export const Keypoints = styled.span``;

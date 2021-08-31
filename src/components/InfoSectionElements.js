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
  className: "animate__animated animate__slideInDown",
})`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col1;
`;

export const Column2 = styled.div.attrs({
  className: "animate__animated animate__slideInUp",
})`
  margin-bottom: 15px;
  padding: 0 15px;
  grid-area: col2;
`;

export const InfoContainer = styled.div`
  margin-left: 20px;
  margin-right: 20px;
  margin-top: 40px;
`;

export const Ptag = styled.p`
  text-align: justify;
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  color: ${(props) => props.theme.secondary};

  @media screen and (min-width: 831px) {
    font-size: 22px;
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

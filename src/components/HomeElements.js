import styled from "styled-components";

export const TitleH1 = styled.h1`
  font-size: 100px;
  line-height: 0px;
  transform: all 0.8s ease-in-out;

  @media screen and (max-width: 880px) {
    font-size: 90px;
    line-height: 0px;
  }

  @media screen and (max-width: 768px) {
    font-size: 70px;
    line-height: 0px;
  }

  @media screen and (max-width: 540px) {
    font-size: 50px;
    line-height: 0px;
  }

  @media screen and (max-width: 312px) {
    font-size: 30px;
    line-height: 0px;
  }
`;

export const HomeDiv = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-around;

  @media screen and (max-width: 830px) {
    margin-top: 30px;
  }

  @media screen and (max-width: 700px) {
    margin-top: 30px;
    display: flex;
    justify-content: center;
    align-items: center;
  }

  @media screen and (max-width: 540px) {
    margin-top: 60px;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-left: -40px;
  }
`;

export const SubTitle = styled.h2`
  color: ${(props) => props.theme.secondary};
  font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
    Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
  font-weight: 100;
  font-size: 24px;
  margin-left: 15px;
  margin-top: -10px;

  @media screen and (max-width: 540px) {
    text-align: center;
    font-size: 23px;
  }
`;

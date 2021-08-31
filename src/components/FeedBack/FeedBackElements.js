import styled from "styled-components";

export const FeedbackContainer = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  justify-items: center;

  @media screen and (max-width: 500px) {
    grid-template-columns: 1fr;
  }
`;

export const FeedbackCard = styled.div`
  color: ${(props) => props.theme.tertiary};
  font-size: 16px;
  display: flex;
  flex-direction: column;

  p {
    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Oxygen,
      Ubuntu, Cantarell, "Open Sans", "Helvetica Neue", sans-serif;
    width: 255px;

    padding: 7px;
    padding-right: 10px;
    border-radius: 10px;
    border: 1px solid ${(props) => props.theme.tertiary};
    box-shadow: 0px 4px 12px black;
  }

  &:hover {
    margin-left: -10px;
    cursor: pointer;
  }
`;

export const Textarea = styled.textarea`
  background-color: #292929;
  color: white;
  width: 290px;
  height: 250px;
  margin: 20px;
  font-size: 16px;
  font-family: "Merienda", cursive;
  &:focus {
    outline: none;
    border: 5px solid #51c8cc;
  }
  &::placeholder {
    font-size: 17px;
  }
`;

export const ButtonContainer = styled.div`
  margin-left: 20px;
`;

export const Thankyou = styled.h1`
  margin-left: 80px;
  margin-top: -15px;
  color: #51c8cc;
  font-family: "Rubik ", cursive;
`;

export const Reviewmsg = styled.p`
  color: ${(props) => props.theme.primary};
  border-bottom: 1px solid ${(props) => props.theme.secondary};
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

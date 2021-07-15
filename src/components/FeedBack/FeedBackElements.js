import styled from "styled-components";

export const FeedbackContainer = styled.div`
  display: flex;
  flex-direction: row;
`;

export const FeedbackCard = styled.div`
  color: black;
  font-size: 16px;
  display: flex;
  flex-direction: column;

  p {
    font-family: "Rubik ", cursive;
    width: 255px;
    text-align: center;
    padding: 7px;
    padding-right: 10px;
    border-radius: 10px;
    background-color: aqua;
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
  color: white;
  border-bottom: 1px solid #ff1616;
  text-align: center;
  font-size: 18px;
  font-weight: bold;
`;

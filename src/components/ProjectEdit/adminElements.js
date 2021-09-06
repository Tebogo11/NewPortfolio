import styled from "styled-components";

export const ProjectContainer = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin: 20px;
`;

export const ProjectCard = styled.div`
  background-color: #5d5d5d;
  border-radius: 5px;
  box-shadow: 0px 4px 12px rgba(0, 0, 0, 0.24);
  border: 2px solid rgba(7, 7, 7, 0.12);
  transition: all 0.3s ease;
  display: grid;
  grid-template-columns: 1fr 30%;
  gap: 5px;
  cursor: default;
  padding: 5px;
`;

export const CardContent = styled.h1`
  font-size: 1em;
  color: white;
`;

export const IconContainer = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-around;
  cursor: pointer;
`;

import React, { useState } from "react";
import { AiOutlineLeft, AiOutlineRight } from "react-icons/ai";
import WebCertificate from "../../images/WebDevelopmentCert.png";
import RNCertificate from "../../images/ReactNativeCert.png";
import styled from "styled-components";
import { color } from "../../constants/Colors";
const CertNav = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
  align-items: center;

  div:hover {
    transform: scale(1.1, 1.1);
    cursor: pointer;
  }

  h1 {
    padding: 0;
    margin: 0;
    color: ${(props) => props.theme.tertiary};
  }
`;
const Certifcate = () => {
  const [currentSelection, setcurrentSelection] = useState(1);
  const certImages = [WebCertificate, RNCertificate];
  return (
    <div>
      <CertNav>
        {currentSelection === 0 ? (
          <AiOutlineLeft size={40} color={color.secondary} />
        ) : (
          <div>
            <AiOutlineLeft
              size={40}
              color={color.tertiary}
              onClick={() => setcurrentSelection(currentSelection - 1)}
            />
          </div>
        )}

        <h1>{currentSelection + 1} / 2</h1>
        {currentSelection === certImages.length - 1 ? (
          <AiOutlineRight size={40} color={color.secondary} />
        ) : (
          <div>
            <AiOutlineRight
              size={40}
              color={color.tertiary}
              onClick={() => setcurrentSelection(currentSelection + 1)}
            />
          </div>
        )}
      </CertNav>
      <img
        src={certImages[currentSelection]}
        alt="Logo"
        width={600}
        height={500}
      />
    </div>
  );
};

export default Certifcate;

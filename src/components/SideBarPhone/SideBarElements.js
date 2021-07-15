import styled from "styled-components";
import { FaTimes } from "react-icons/fa";
import { Link } from "react-router-dom";

export const SidemenuContainer = styled.aside`
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100%;
  background: #0d0d0d;
  display: grid;
  align-items: center;
  top: 0;
  left: 0;
  transition: 0.3s ease-in-out;
`;

export const CloseIcon = styled(FaTimes)`
  color: #fff;
`;

export const Icon = styled.div`
  position: absolute;
  top: 1.2rem;
  right: 1.5rem;
  background: transparent;
  font-size: 2rem;
  cursor: pointer;
  outline: none;
`;

export const SidebarWrapper = styled.div`
  color: #fff;
  margin-top: 60px;
`;

export const SidebarMenu = styled.ul`
  display: grid;
  grid-template-columns: 1fr;
  grid-template-rows: repeat(6, 80px);
  text-align: center;

  @media screen and (max-width: 480px) {
    grid-template-rows: repeat(6, 60px);
  }
`;
export const SidebarLink = styled(Link)`
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  text-decoration: none;
  list-style: none;
  transition: 0.2s ease-in-out;
  color: #fff;
  cursor: pointer;

  &:hover {
    color: #51c8cc;
    transition: 0.2s ease-in-out;
  }

  &.active {
    color: #51c8cc;
    transition: 0.2s ease-in-out;
  }
`;

export const MobileIcon = styled.div`
  position: fixed;
  right: 20px;
  top: 20px;
  cursor: pointer;
`;

export const logoComponent = styled.img`
  display: flex;
  justify-content: center;
`;

export const PhoneBanner = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: space-between;
`;

export const LogoHolder = styled.div`
  position: fixed;
  left: 10px;
  top: 10px;
`;

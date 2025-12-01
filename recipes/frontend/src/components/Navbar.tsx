import styled from "styled-components";
import Cooking from "../assets/svgs/Cooking";
import { NavLink, useNavigate } from "react-router";

const NavContainer = styled.div`
  font-size: var(--medium-font-size);
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.8rem 1.5rem;
`;

const NavImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const WebsiteName = styled.span`
  font-size: var(--medium-font-size);
  font-weight: 800;
`;

const NavWrapper = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  gap: 3rem;
`;

function Navbar() {
  return (
    <>
      <NavContainer>
        <NavImgContainer>
          <NavLink to="/">
            <Cooking />
          </NavLink>
          <WebsiteName>Happy Kitchen</WebsiteName>
        </NavImgContainer>
        <NavWrapper>
          <NavLink to="/">
            <span>Home</span>
          </NavLink>
          <NavLink to="/recipes">
            <span>Recipes</span>
          </NavLink>
        </NavWrapper>
        <NavWrapper>
          <NavLink to="/mykitchen">
            <span>My Kitchen</span>
          </NavLink>
          <NavLink to="/myaccount">
            <span>My Account</span>
          </NavLink>
        </NavWrapper>
      </NavContainer>
    </>
  );
}

export default Navbar;

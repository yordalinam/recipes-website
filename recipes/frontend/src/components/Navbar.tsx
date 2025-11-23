import styled from "styled-components";
import Cooking from "../assets/svgs/Cooking";
import { NavLink } from "react-router";
//import { Searchbar } from "./Searchbar";

const NavContainer = styled.div`
  font-size: 1.4rem;
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 1.5rem;
`;

const NavImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
  gap: 0.5rem;
`;

const WebsiteName = styled.span`
  font-size: 2.2rem;
  font-weight: 800;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 3rem;
`;

function Navbar() {
  return (
    <>
      <NavContainer>
        <NavImgContainer>
          <Cooking />
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
          <NavLink to="/myrecipes">
            <span>My Favorites</span>
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

import styled from "styled-components";
import Cooking from "../assets/svgs/Cooking";
import { NavLink } from "react-router";
import { Searchbar } from "./Searchbar";

const NavContainer = styled.div`
  box-sizing: border-box;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  padding: 0.5rem;
  gap: 5rem;
`;

const NavImgContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: flex-start;
  align-items: center;
`;

const NavWrapper = styled.div`
  display: flex;
  gap: 1rem;
`;

function Navbar() {
  return (
    <>
      <NavContainer>
        <NavImgContainer>
          <Cooking />
          <span>My Cooking Website</span>
        </NavImgContainer>
        <NavWrapper>
          <NavLink to="/">
            <span>Home🍪</span>
          </NavLink>
          <NavLink to="/recipes">
            <span>Recipes🧑🏻‍🍳</span>
          </NavLink>
        </NavWrapper>
        <NavWrapper>
          <NavLink to="/myrecipes">
            <span>My Recipes😻</span>
          </NavLink>
          <NavLink to="/myaccount">
            <span>My Account🏠</span>
          </NavLink>
        </NavWrapper>
      </NavContainer>
    </>
  );
}

export default Navbar;

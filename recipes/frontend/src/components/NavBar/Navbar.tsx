import Cooking from "../../assets/svgs/Cooking";
import { NavLink } from "react-router";
import {
  NavContainer,
  NavImgContainer,
  WebsiteName,
  NavWrapper,
} from "./styles";

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

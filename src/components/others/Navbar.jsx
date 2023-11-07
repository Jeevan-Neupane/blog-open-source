import React from "react";
import styled from "styled-components";
import { Link, NavLink } from "react-router-dom";
import { WrapperContainer } from "../../style/containers";

const NavbarWrapper = styled.nav`
  background-color: #333;
  color: white;
  display: flex;
  justify-content: space-between;
  padding: 1rem;
`;

const Wrapper = styled(WrapperContainer)`
  display: flex;
  justify-content: space-between;
  padding: 1rem;
  align-items: center;
`;

const Logo = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 3rem;
  font-weight: bold;
`;

const NavLinks = styled.ul`
  list-style: none;
  display: flex;
  gap: 5rem;
`;

const NavLinked = styled.li`
  a {
    color: white;
    text-decoration: none;
    font-size: 1.6rem;
  }
`;

const Navbar = () => {
  const linkActive = ({ isActive }) => {
    return {
      color: isActive ? " teal" : "",
    };
  };
  return (
    <NavbarWrapper>
      <Wrapper>
        <Logo to='/'>Blogs</Logo>
        <NavLinks>
          <NavLinked>
            <NavLink
              style={linkActive}
              to='/'
            >
              Home
            </NavLink>
          </NavLinked>

          <NavLinked>
            <NavLink
              style={linkActive}
              to='/blogs'
            >
              Blog
            </NavLink>
          </NavLinked>
        </NavLinks>
      </Wrapper>
    </NavbarWrapper>
  );
};

export default Navbar;

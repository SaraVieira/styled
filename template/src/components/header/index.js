import { h } from 'preact';
import { Link } from 'preact-router/match';
import styled from 'styled-components';

const Heading = styled.h1`
  float: left;
  margin: 0;
  padding: 0 15px;
  font-size: 24px;
  line-height: 56px;
  font-weight: 400;
  color: #fff;
`;

const HeaderStyled = styled.header`
  position: fixed;
  left: 0;
  top: 0;
  width: 100%;
  height: 56px;
  padding: 0;
  background: #673ab7;
  box-shadow: 0 0 5px rgba(0, 0, 0, 0.5);
  z-index: 50;
`;

const Nav = styled.nav`
  float: right;
  font-size: 100%;
`;

const Anchor = styled(Link)`
  display: inline-block;
  height: 56px;
  line-height: 56px;
  padding: 0 15px;
  min-width: 50px;
  text-align: center;
  background: rgba(255, 255, 255, 0);
  text-decoration: none;
  color: #fff;
  will-change: background-color;

  &:hover,
  &:active {
    background: rgba(0, 0, 0, 0.2);
  }

  &.active {
    background: rgba(0, 0, 0, 0.4);
  }
`;

const Header = () => (
  <HeaderStyled>
    <Heading>Preact App</Heading>
    <Nav>
      <Anchor activeClassName="active" href="/">
        Home
      </Anchor>
      <Anchor activeClassName="active" href="/profile">
        Me
      </Anchor>
      <Anchor activeClassName="active" href="/profile/john">
        John
      </Anchor>
    </Nav>
  </HeaderStyled>
);

export default Header;

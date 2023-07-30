import styled from "styled-components";

export const StyledNavBar = styled.nav`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  padding-top: 1em;
  box-shadow: 0px 3px 15px rgba(100, 100, 100, 0.49);

  img {
    max-width: 7%;
    padding: 0 0 1em 4em;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  @media (max-width: 750px) {
    height: 4em;
    img {
      max-width: 14%;
      padding-left: 1em;
    }
  }
`;

export const Nav = styled.nav`
  float: right;
  display: flex;
  align-items: center;
  padding-right: 4em;

  .navLink {
    margin-left: 1em;
    margin-right: 1em;
    font-size: 30px;
    text-decoration: none;
    color: black;
  }

  a.navLink.active {
    color: #50a060;
    transition: all 0.3s;
  }

  button {
    border-radius: 1em;
    width: 8em;
    height: 2em;
    border: none;
    background-color: #50a060;
    color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    font-weight: 700;
    font-size: large;
    margin-right: 3em;
    margin-left: 2em;
    cursor: pointer;
    :hover {
      transform: scale(1.15);
      text-shadow: #304d80 1px 0 7px;
    }
  }

  @media (max-width: 750px) {
    padding-right: 0;
    .navLink {
      font-size: 1.3em;
      margin-left: 0.3em;
      margin-right: 0.6em;
    }
    button {
      width: 4.6em;
      height: 1.4em;
      font-size: 0.9em;
      margin-left: 0.5em;
      margin-right: 1.5em;
    }
  }
`;

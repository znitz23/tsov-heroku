import styled from "styled-components";

export const StyledNavBar = styled.section`
  width: 100%;
  position: fixed;
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
  background-color: #fff;
  margin-top: -10px;
  margin-left: -10px;
  padding-top: 10px;
  box-shadow: 0px 3px 15px rgba(100, 100, 100, 0.49);

  img {
    max-width: 7%;
    padding: 10px 0 10px 40px;
  }

  div {
    display: flex;
    flex-direction: row;
  }

  @media only screen and (max-width: 768px) {
    flex-direction: column;
    text-align: center;
    img {
      margin-bottom: -110px;
    }
    button {
      margin-bottom: 95px;
      margin-top: 15px;
    }
  }
`;

export const Nav = styled.nav`
  float: right;
  display: flex;
  align-items: center;
  padding-right: 40px;

  .navLink {
    margin-left: 20px;
    margin-right: 20px;
    font-size: 30px;
    text-decoration: none;
    color: black;
  }

  a.navLink.active {
    color: #50a060;
    transition: all 0.3s;
  }

  button {
    border-radius: 20px;
    width: 150px;
    height: 35px;
    border: none;
    background-color: #50a060;
    color: #fff;
    box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
    font-weight: 700;
    font-size: large;
    margin-right: 20px;
    margin-left: 20px;
    cursor: pointer;
    :hover {
      transform: scale(1.15);
      text-shadow: #304d80 1px 0 7px;
    }
  }
  @media only screen and (max-width: 768px) {
    .navLink,
    button {
      display: flex;
    }

    button {
      align-items: center;
      justify-content: center;
    }

    flex-direction: column;
  }
`;

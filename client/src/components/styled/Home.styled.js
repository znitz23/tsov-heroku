import styled from "styled-components";

export const CredentialsStyled = styled.div`
  display: flex;
  justify-content: center;
  padding: 15px;

  .close {
    position: absolute;
    right: 2px;
    top: 2px;
    max-width: 25px;
    border-radius: 0%;
    border: none;
    color: rgba(0, 0, 0, 1);
    font-size: 20px;
    font-weight: 600;
    background: rgba(0, 0, 0, 0);
    cursor: pointer;
  }
  .welcome-message {
    display: flex;
    flex-direction: column;

    width: 100%;
    height: 100%;

    h1 {
      font-size: 35px;
      padding-top: 25px;
    }
    h4 {
      width: 88%;
      padding-top: 25px;
    }
  }

  form {
    height: 82%;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background-color: white;
    border-radius: 10px 0 0 10px;
    width: 65%;
    margin: 10px 0 10px 0;
    padding: 20px;
    input {
      height: 25px;
      width: 88%;
      border: none;
      border-radius: 6px;
      margin: 12px 0 7px 0;
      box-shadow: 2px 2px 3px 1px #64d993;
    }
    button {
      border-radius: 12px;
      width: 55%;
      height: 18%;
      border: none;
      background-color: #50a060;
      color: #fff;
      box-shadow: 0 0 6px rgba(0, 0, 0, 0.15);
      font-weight: 700;
      font-size: large;
      margin-top: 15px;
      cursor: pointer;
    }
  }

  section {
    position: relative;
    width: 40%;
    height: auto;
    margin-top: 80px;
    border-radius: 10px;
    background-image: linear-gradient(to bottom right, #64d993, #148541);
    display: flex;
    align-items: center;
    text-align: center;
    box-shadow: 0px 0px 10px 2px #64d993;
    color: white;
  }

  @media (max-width: 765px) {
    section {
      width: 95%;
      flex-direction: column-reverse;
    }
    form {
      border-radius: 10px 10px 10px 10px;
    }
  }
`;

export const WelcomeStyled = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin: 0 3em;
  text-align: center;

  span {
    font-size: 1.5em;
    text-align: center;
  }

  button {
    background-color: white;
    border: none;
    font-size: 25px;
    font-family: "Permanent Marker", cursive;
    color: blue;
    text-shadow: 5em;
    cursor: pointer;
  }

  .user-welcome {
    font-size: 28px;
  }
`;

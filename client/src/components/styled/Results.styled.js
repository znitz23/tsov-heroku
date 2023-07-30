import styled from "styled-components";

export const StyledResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;

  .toggle-form {
    border-radius: 2em;
    width: 20em;
    height: 4em;
    border: none;
    margin-top: 2em;
    background-color: #50a060;
    color: #fff;
    box-shadow: 3px 3px 12px 2px gray;
    font-weight: 700;
    font-size: medium;
    cursor: pointer;
  }

  .session-form {
    display: flex;
    flex-direction: column;
    width: 90%;
    margin-top: 1em;
    border-radius: 1em;
    background-image: linear-gradient(to bottom right, #defce6, #b0cfb8);
    display: flex;
    align-items: center;
    text-align: center;
    box-shadow: 3px 3px 12px 2px gray;

    .submit-session {
      background-color: #50a060;
      margin: 8px 0 15px 0;
      width: 30%;
    }
  }
  .close-form {
    margin-left: 14em;
    border-radius: 0%;
    border: none;
    color: rgba(0, 0, 0, 1);
    font-size: 2em;
    font-weight: 600;
    background: rgba(0, 0, 0, 0);
    box-shadow: none;
    cursor: pointer;
  }

  input,
  select {
    padding: 2px;
    height: 25px;
    color: black;
    font-size: 20px;
    margin: 7px;
    text-align: center;
    width: 175px;
    border: none;
    border-radius: 8px;
    background-color: #fff;
  }

  .submission-form-title {
    margin-top: 0px;
    height: 1em;
    font-size: 2.5em;
  }

  section {
    width: 100%;
    height: 100%;
    display: flex;
    margin: 0;
    justify-content: center;
    align-items: center;
    margin-top: 35px;
  }

  button {
    border-radius: 20px;
    width: 65px;
    height: 30px;
    border: none;
    background-color: #cd1906;
    color: #fff;
    box-shadow: 3px 3px 12px 2px gray;
    font-weight: 700;
    font-size: medium;
    cursor: pointer;
    margin-bottom: 15px;
  }

  @media (max-width: 765px) {
    table {
      width: 96%;
    }
    td,
    th {
      font-size: 10px;
    }
    button {
      width: 4em;
      height: 2em;
      font-size: 1em;
      margin-bottom: 0;
    }
  }
`;

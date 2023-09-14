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
    position: relative;
    display: flex;
    flex-direction: column;
    width: 35vw;
    margin-top: 1em;
    border-radius: 1em;
    background-image: linear-gradient(to bottom right, #defce6, #cef0c7);
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
    position: absolute;
    right: 1em;
    top: 0.8em;
    border: none;
    color: rgba(0, 0, 0, 1);
    font-size: 1em;
    font-weight: 600;
    background: #adaaaa;
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
    margin-top: 40px;
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
    input,
    select {
      font-size: 18px;
    }
    table {
      width: 94%;
    }
    td,
    th {
      font-size: 10px;
    }
    button {
      text-align: center;
      width: 4em;
      height: 2em;
      font-size: 1em;
      margin-bottom: 0;
    }
    .session-form {
      width: 90vw;
    }
    .submission-form-title {
      margin-top: 1.5em;
    }
  }
`;

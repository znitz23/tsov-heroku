import styled from "styled-components";

export const StyledResults = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  .toggle-form {
    border-radius: 20px;
    width: 200px;
    height: 40px;
    border: none;
    background-color: #50a060;
    color: #fff;
    box-shadow: 3px 3px 12px 2px gray;
    font-weight: 700;
    font-size: medium;
    cursor: pointer;
  }

  .session-form {
    position: fixed;
    display: flex;
    flex-direction: column;
    width: 27%;
    height: auto;
    margin-top: 30px;
    border-radius: 10px;
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

  h3 {
    font-size: 28px;
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
`;

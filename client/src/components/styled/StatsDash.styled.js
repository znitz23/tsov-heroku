import styled from "styled-components";

export const StatsDashStyled = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  max-width: 95%;
  height: 100%;
  margin: 0 auto;
  margin-bottom: 40px;
`;

export const StatPaneStyled = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  background-color: #3ead62;
  color: white;
  align-items: center;
  width: 13em;
  height: 13em;
  margin: 12px;
  border-radius: 12px;
  box-shadow: 3px 3px 12px 2px gray;

  h3 {
    font-size: 16px;
  }
  h4 {
    margin: 0;
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    font-size: 50px;
  }
`;

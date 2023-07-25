import styled from "styled-components";

export const Container = styled.div`
  width: 100%;
  height: 100%;
  margin: 0 auto;
  padding-top: 65px;

  table {
    font-family: "Gill Sans", "Gill Sans MT", Calibri, "Trebuchet MS",
      sans-serif;
    display: flex;
    flex-flow: column nowrap;
    background-color: white;
    width: 85%;
    margin: 0 auto;
    border-radius: 8px;
    border: 1px solid #dadada;
    box-shadow: 3px 3px 12px 2px gray;
    margin-bottom: 40px;
  }

  tr {
    display: flex;
    flex-flow: row nowrap;
    width: 100%;
    border-bottom: 1px solid #dadada;
  }

  th,
  td {
    display: flex;
    flex: 1;
    font-size: 17px;
    padding: 8px 0;
    justify-content: center;
    align-items: center;
    transition: all 0.15s ease-in-out;
    margin: 0 5px 0 5px;
  }

  td {
    font-family: sans-serif;
  }
`;

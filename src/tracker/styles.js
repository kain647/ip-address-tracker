import styled from "styled-components";
import { createGlobalStyle } from "styled-components";

export const GlobalStyle = createGlobalStyle`

  body {
    display: block;
    width: 100%;
    padding: 20px 5%;
    margin: 0;
    box-sizing: border-box;
    
    background: linear-gradient(#c6c6c6, #767676);

    font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto", "Oxygen",
    "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans", "Helvetica Neue",
    sans-serif;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
  }
  code {
    font-family: source-code-pro, Menlo, Monaco, Consolas, "Courier New",
    monospace;
  }
`;

export const Container = styled.div`
  display: flex;
  width: 100%;
  max-width: 1024px;
  margin: 0 auto;
  box-sizing: border-box;
  justify-content: center;
  align-items: center;
  flex-direction: column;
`;

export const Header = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  width: inherit;
  color: #155724;
  font-weight: 500;
  padding: 15px 20px;
  background-color: #d4edda;
  border-color: #c3e6cb;
  border-radius: 5px 5px 0px 0px;
`;

export const FormContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: #fafafa;
  padding: 20px 20px;
  margin-bottom: 20px;
  border: 1px solid hsla(0, 0%, 0%, 0.07);
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);
`;
export const Input = styled.input`
  display: flex;
  box-sizing: border-box;
  width: 70%;
  border: 1px solid hsla(0, 0%, 0%, 0.07);
  color: #495057;
  border-radius: 5px;
  outline: none;
  padding: 10px;
  margin-bottom: 20px;
`;
export const Button = styled.button`
  display: flex;
  align-items: center;
  justify-content: center;
  border: none;
  height: 45px;
  background-color: #946fb7;
  cursor: pointer;
  padding: 0px 50px 0px 50px;
  border-radius: 5px;
  color: #ffffff;
`;
export const PanelContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;
  width: 100%;
  margin-bottom: 20px;
`;
export const PanelHeading = styled.div`
  display: flex;
  box-sizing: border-box;
  justify-content: center;
  width: inherit;
  color: #155724;
  font-weight: 500;
  padding: 15px 20px;
  background-color: #d4edda;
  border-color: #c3e6cb;
  border-radius: 5px 5px 0px 0px;
`;
export const PanelTable = styled.div`
  display: flex;
  flex-direction: column;
  box-sizing: border-box;
  width: 100%;
  background-color: #fafafa;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.08);

  table {
    display: flex;
    flex-direction: column;
    width: 100%;
    justify-content: center;
    align-items: center;
    box-sizing: border-box;
    border-collapse: collapse;

    .color {
      color: red;
    }

    .text {
      font-weight: 500;
    }

    .bg {
      background-color: rgba(0, 0, 0, 0.05);
    }

    .hover {
      :hover {
        background-color: rgba(0, 0, 0, 0.075);
      }
    }
  }

  tr {
    display: flex;
    width: 100%;
    justify-content: center;
    align-items: center;
    .flag {
      display: flex;
      justify-content: center;
      align-items: center;
    }
  }

  td {
    display: flex;
    justify-content: center;
    align-items: center;
    border: 1px solid #dee2e6;
    width: 100%;
    padding: 10px;
    height: 50px;
    text-align: center;
  }
`;
export const MapContainer = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
`;
